export default class User {
    constructor (name, status, image) {
        this.name = name;
        this.status = status;
        this.image = image;
    }

    changeImage(src) {
        //проверка корректности

        this.image = src;
    }
}