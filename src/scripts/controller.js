import Model from "./model.js";
import View from "./view.js";
import {
    getCookie,
    isJsonString,
    pasteIntoInput
} from "./utils.js";

export default class Controller {
    constructor(model, view) {
        this.model = model || new Model();
        this.view = view || new View(this.model);

        this.eventHandler = this.eventHandler.bind(this);
        this.newUser = this.newUser.bind(this);
        this.addMessage = this.loadMessage.bind(this);
    }

    init() {

        const userInfo = getCookie("userId");
        if (userInfo !== undefined) {
            const data = {
                '_id': userInfo
            }
            this.requestOnServer("user/auth", JSON.stringify(data), this.newUser);
            this.addMessage(6);
        }

        
        var input = document.getElementById("massage");

        
        
    }

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
                    var content = event.target.value; 
                    console.log(event.target);
                    if (event.shiftKey) {
                        event.preventDefault();
                        // pasteIntoInput(event.target, '\n');
                    } else {
                        let outgoingMessage =  event.target.value;
                        this.socket.send(outgoingMessage);
                        data = {
                            userId: this.model.user._id,
                            text: outgoingMessage,
                            date: new Date()
                        }
                        type = 'message';
                        req = this.requestOnServer(type, JSON.stringify(data), this.log);
                        return false;
                    }
                }
                else {
                    this.cursorPosition = event.target.selectionStart;
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
                break;
            default:
                break;
        }
    }

    async requestOnServer(type, data, action) {
        let req;

        var myHeaders = new Headers();
        if (isJsonString(data)) {
            myHeaders.append("Content-Type", "application/json");
        }

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };
        
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
            document.cookie = `userId = ${this.model.user._id}`;
        }
    }

    newUser(data) {
        this.model.newUser(data);
        this.saveCookie();
        this.socket = new WebSocket(`ws://localhost:8081`);
             
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
                const userData = this.model.getUser(data.userId);
                this.view.newMessage(data, userData);
                break;
            case "close":
                const userId = data._id;
                let index;
                for (let i = 0; i < this.model.users.length; i++) {
                    if (this.model.users[i]._id == userId) {
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
            this.requestOnServer('message/out', data, this.view.showMessages);
            data.skip += data;
        }
    }

    log(message) {
        console.log(message);
    }

}