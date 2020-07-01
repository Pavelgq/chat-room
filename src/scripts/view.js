export default class View {
  constructor(model) {
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

  showMessage(pack) {
    let messageElem = document.createElement("DIV");
    messageElem.setAttribute('class', 'room__post post');

    let template = `
    <img class="user__avatar post__avatar" src="/src/image/dog.jpg" alt="Аватар пользователя" srcset="${pack.userId}">
    <p class="post__text">
    ${pack.text}
    </p>`;
    messageElem.innerHTML = template;

    document.querySelector('.room__field').appendChild(messageElem);
  }

  registration() {
    const modal = document.getElementById("modal__action");
    modal.classList.add("vissualy-hidden");
    
    const registration = document.getElementById("modal__registration");
    registration.classList.remove("vissualy-hidden")


  }

  login() {

  }

}