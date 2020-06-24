export default class View {
    constructor (model) {
       this.model = model;
    }

    // authorization() {
    //         /**
    //          * Открываю модальное окно и подписываюсь на события кнопок
    //          */
    // }

    // createUser() {
    //     /**
    //      * Добавляю пользователя, обновляю модель?? через контроллер??
    //      */
    // }

    showMessage(message) {
        let messageElem = document.createElement('div');
        messageElem.appendChild(document.createTextNode(message));
        document.querySelector('.room__field').appendChild(messageElem);
      }

}