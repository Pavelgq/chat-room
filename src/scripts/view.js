export default class View {
  constructor(model) {
    this.model = model;
  }

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

  registration(event) {
    const modal = event.target.closest(".modal");
    modal.classList.toggle("visually-hidden");

    const registration = document.getElementById("modal__registration");
    registration.classList.remove("visually-hidden");
  }

  login(event) {
    const modal = event.target.closest(".modal");
    modal.classList.toggle("visually-hidden");

    const login = document.getElementById("modal__login");
    login.classList.remove("visually-hidden");
  }

  run() {
    const modal = document.querySelectorAll(".modal");
    modal.forEach(element => {
      element.classList.add("visually-hidden");
    });
    
    const header = document.querySelector(".header__user");
    const nameContainer = header.querySelector(".user__name");
    nameContainer.innerText = `${this.model.user.name} <${this.model.user.login}>`;
  }

  newUser(data) {
    const container = document.querySelector(".chat__conected");
    const template = `<div class="chat__user user">
      <div class="user__photo">
          <img class="user__avatar" src="/src/image/dog.jpg" alt="Аватар пользователя" srcset="">
      </div>
      <p class="user__info">
          <span class="user__name">${data.name} <${data.login}></span>
          <span class="user__status">online</span>
      </p>
    </div>`;

    container.innerHTML+=template;
  }

  newMessage(flag, data) {
    const container = document.querySelector(".room__field");
    const myMessage = flag?"post__my":"";

    const template = `<div class="room__post post ${myMessage}">
    <!-- <div class="user__photo"> -->
    <img class="user__avatar post__avatar" src="/src/image/dog.jpg" alt="Аватар пользователя"
        srcset="">
    
    <p class="post__message">
        <span class="post__name">${data.userInfo.name}</span>
        <span class="post__text">${data.text}</span>
    </p>
</div>`;
    container.innerHTML += template;
  }
}