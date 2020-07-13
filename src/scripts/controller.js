import Model from "./model.js";
import View from "./view.js";
import {
    getCookie
} from "./utils.js";

export default class Controller {
    constructor(model, view) {
        this.model = model || new Model();
        this.view = view || new View(this.model);

        this.eventHandler = this.eventHandler.bind(this);
        this.newUser = this.newUser.bind(this);

        this.addMessage = this.loadMessage().bind(this);
    }

    init() {

        const userInfo = getCookie("userId");
        if (userInfo !== undefined) {
            const data = {
                '_id': userInfo
            }
            //this.requestOnServer("user/auth", data, this.newUser);
            //this.addMessage(6);
        }

    }

    // newMessage(event) {
    //     console.log(event.data);
    //     let pack = JSON.parse(event.data);
    //     this.model.addMessage(pack);
    //     console.log(this.model);
    //     this.view.newMessage(pack);
    // }

    connectElements(selector, event) {
        let elements = document.querySelectorAll(selector);
        for (let element of elements)
            element.addEventListener(event, e => this.eventHandler(e));
    }

    eventHandler(event) {
        let data;
        let type;
        let req;
        switch (event.target.dataset.index) {
            case 'registration':
                this.view.registration(event);
                break;
            case 'login':
                this.view.login(event);
                break;
            case 'send':
                if (event.keyCode == 13 || event.type == 'click') {
                    var content = this.value; 
                    // var caret = getCaret(this);     
                    if (event.shiftKey) {
                        // this.value = content.substring(0, caret - 1) + "\n" + content.substring(caret, content.length);
                        event.stopPropagation();
                    } else {
                        // this.value = content.substring(0, caret - 1) + content.substring(caret, content.length);
                        let outgoingMessage = document.querySelector(".room__message").value;
                        this.socket.send(outgoingMessage);
                        data = {
                            userId: this.model.user.id,
                            text: outgoingMessage,
                            date: new Date()
                        }
                        type = 'message';
                        req = this.requestOnServer(type, data, this.log);
                        return false;
                    }


                }
                break;
            case 'reg-data':
                event.preventDefault();
               
                const uploadFile = document.getElementById('upload'); 
                const formData = new FormData();
                formData.append('avatar', uploadFile.files[0]);
                data = {
                    avatar: formData,
                    name: document.getElementById('newName').value,
                    login: document.getElementById('newLogin').value,
                    pass: document.getElementById('newPass').value
                    
                }
                console.log(data);
                type = 'user';
                req = this.requestOnServer(type, new FormData(form__registration), this.newUser);

                break;
            case 'login-data':

                break;

            case 'load-message':
                this.addMessage(10);
            default:
                break;
        }
    }

    async requestOnServer(type, data, action) {
        let req;

        var myHeaders = new Headers();
        //myHeaders.append("Content-Type", "form-data");
        // , "application/json"
        //var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        console.log(data)
        let url = `http://localhost:3000/api/${type}`;
        let response = await fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
                req = JSON.parse(result);
                console.log(result);
                action(req);
            })
            .catch(error => console.log('error', error));

        return req;
    }


    saveCookie() {
        if (this.model.user !== undefined) {
            document.cookie = `userId = ${this.model.user.id}`;
        }
    }

    newUser(data) {
        this.model.newUser(data);
        this.saveCookie();
        this.socket = new WebSocket(`ws://localhost:8081`);
        console.log(this.socket);
        // отправить сообщение из формы publish
        // document.forms.publish.onsubmit = function () {
        //     let outgoingMessage = this.message.value;

        //     socket.send(outgoingMessage);
        //     return false;
        // };
        this.socket.onopen = this.log('новый пользователь');
        // обработчик входящих сообщений
        this.socket.onmessage = this.newMessage.bind(this);
        this.socket.onclose = this.log('пользователь вышел');

        this.view.run();



    }




    newMessage(event) {
        console.log(event);
        const data = JSON.parse(event.data);
        switch (data.type) {
            case "open":
                if (data) {
                    this.model.users = [];
                    data.userInfo.forEach(element => {
                        this.model.users.push(element);
                    });

                }
                this.view.renderUsers();
                break;
            case "message":
                this.view.newMessage(data);
                break;
            case "close":
                const userId = data.id;
                let index;
                for (let i = 0; i < this.model.users.length; i++) {
                    if (this.model.users[i].id == userId) {
                        index = i;
                        break;
                    }
                }
                this.model.users.splice(index, 1);
                this.view.renderUsers();
                break;
            default:
                break;
        }

    }

    loadMessage() {
        let data = {
            skip: 0,
            limit: 0
        }
        return (limit) => {
            data.limit = limit;
            //this.requestOnServer('message/out', data, this.view.showMessages);
            data.skip += data;
        }
    }

    log(message) {
        console.log(message)
    }
}