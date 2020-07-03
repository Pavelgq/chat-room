import Model from "./model.js"
import View from "./view.js"

export default class Controller {
    constructor(model, view) {
        this.model = model || new Model();
        this.view = view || new View(this.model);
    }

    init() {
        this.socket = new WebSocket("ws://localhost:8081");
        console.log(this.socket);
        // отправить сообщение из формы publish
        // document.forms.publish.onsubmit = function () {
        //     let outgoingMessage = this.message.value;

        //     socket.send(outgoingMessage);
        //     return false;
        // };

        // обработчик входящих сообщений
        this.socket.onmessage = this.newMessage.bind(this);
    }

    newMessage(event) {
        console.log(event.data);
        let pack = JSON.parse(event.data);
        this.model.addMessage(pack);
        console.log(this.model);
        this.view.showMessage(pack);
    }

    connectElements(selector, event) {
        let elements = document.querySelectorAll(selector);
        for (let element of elements)
            element.addEventListener(event, e => this.eventHandler(e));
    }

    eventHandler(event) {
        switch (event.target.dataset.index) {
            case 'registration':
                this.view.registration(event);
                break;
            case 'login':
                this.view.login(event);
                break;
            case 'send':
                let outgoingMessage = document.querySelector(".room__message").value;
                this.socket.send(outgoingMessage);
                return false;
                break;
            case 'reg-data':
                let data = {
                    name: document.getElementById('newName').value,
                    login: document.getElementById('newLogin').value,
                    pass: document.getElementById('newPass').value
                }
                let type = 'user';
                this.responseOnServer(type, JSON.stringify(data));
                break;
            case 'login-data':

                break;
            default:
                break;
        }
    }

    async responseOnServer(type, data) {
        let url = `http://localhost:3000/api/${type}`;
        let response = await fetch(url, {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                // 'Access-Control-Request-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        let req = await response.json();

        return req;
    }
}