import Message from './message.js'
export default class Model {
    constructor () {
        this.users = [];
        this.messages = [];

        this.url = "http://localhost:3000";
        this.getPath = this.getPath.bind(this);
    }

    newUser(data) {
        this.user = {
            name: data.name,
            login: data.login,
            _id: data._id,
            avatar: data.avatar || null
        };
        console.log(this.user);
    }


    getUser(id) {
        for (var item in this.users) {
            if (this.users[item]._id === id) {
                return this.users[item];
            }
        }
        return {};
    }

    getMassage() {
        return this.messages
    }

    getPath(user) {
        if (user.avatar) {
            return `${this.url}${user.avatar.path}?id=${user._id}`;
        }
        return "./src/image/dog.jpg";
    }

    addMessage(message) {
        this.messages.push(message);
    }
}