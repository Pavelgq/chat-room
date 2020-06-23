export default class Controller {
    constructor(model, view) {
        this.model = model || new Model();
        this.view = view || new View(this.model);
    }

    init() {
        let socket = new WebSocket("ws://localhost:8081");

        // отправить сообщение из формы publish
        document.forms.publish.onsubmit = function () {
            let outgoingMessage = this.message.value;

            socket.send(outgoingMessage);
            return false;
        };

        // обработчик входящих сообщений
        socket.onmessage = function (event) {
            let incomingMessage = event.data;
            model.addMessage(incomingMessage);
            console.log(model);
            view.showMessage(incomingMessage);
        };
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
                break;
            default:
                break;
        }


    }
}