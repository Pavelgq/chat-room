import Model from "./model.js"
import View from "./view.js"

export default class Controller {
    constructor(model, view) {
        this.model = model || new Model();
        this.view = view || new View(this.model);
    }

    init() {
        this.socket = new WebSocket("ws://localhost:8081");

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
        let incomingMessage = event.data;
        this.model.addMessage(incomingMessage);
        console.log(this.model);
        this.view.showMessage(incomingMessage);
    }

    connectElements(selector, event) {
        let els = document.querySelectorAll(selector);
        for (let el of els)
            el.addEventListener(event, e => this.eventHandler(e));
    }

    eventHandler(e) {
        switch (event.target.dataset.index) {
            case 'auth':
                break;
            case 'login':
                break;
            case 'send':
                let outgoingMessage = document.querySelector(".room__message").value;
                this.socket.send(outgoingMessage);
                return false;
                break;
            default:
                break;
        }


    }
}