import Message from './message.js'
export default class Model {
    constructor () {
        this.messages = [];
    }

    newUser() {

    }


    getUser() {

    }

    getMassage() {
        return this.messages
    }

    addMessage(message) {
        this.messages.push(message);
    }
}