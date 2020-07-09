import Message from './message.js'
export default class Model {
    constructor () {
        this.users = [];
        this.messages = [];
    }

    newUser(data) {
        this.user = {
            name: data.name,
            login: data.login,
            id: data._id
        };
        console.log(this.user);
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