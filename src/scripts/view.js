export default class View {
  constructor(model) {
    this.model = model;

    this.showMessages = this.showMessages.bind(this);


  }

  showMessage(pack, user) {
    let messageElem = document.createElement("DIV");
    messageElem.setAttribute('class', 'room__post post');

    let template = `
    <img class="user__avatar post__avatar" src="${this.model.getPath(user)||""}" alt="Аватар пользователя" >
    <p class="post__text">
    ${pack.text}
    </p>`;
    messageElem.innerHTML = template;

    document.querySelector('.room__field').appendChild(messageElem);
  }

  showMessages(pack) {

    pack.data.reverse().forEach(element => {

      this.newMessage(element, element.userInfo);
    });
  }

  selectAction() {
    const select = document.getElementById("modal__action");
    select.classList.remove("visually-hidden");
  }

  registration(event) {
    const modal = event.target.closest(".modal");
    modal.classList.toggle("visually-hidden");

    const registration = document.getElementById("modal__registration");
    registration.classList.remove("visually-hidden");

    const fileField = registration.querySelector("#upload");
    //fileField.addEventListener("change",this.previewFile(event), false);
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

    const header = document.querySelector(".header");

    const template = `
                  <section class="header__user user">
                    <div class="user__photo">
                        <img class="user__avatar" src="${this.model.getPath(this.model.user)}" alt="Аватар пользователя" srcset="">
                    </div>
                    <p class="user__info">
                        <span class="user__name">${this.model.user.name} <${this.model.user.login}></span>
                        <button type="button" class="user__exit" id="exit" data-index = "exit">Выйти</button>
                    </p>

                </section>`
    header.innerHTML += template;
  }

  newUser(data) {
    const container = document.querySelector(".chat__conected");
    const template = `<div class="chat__user user">
      <div class="user__photo">
          <img class="user__avatar" src="${this.model.getPath(data)}" alt="Аватар пользователя" srcset="">
      </div>
      <p class="user__info">
          <span class="user__name">${data.name} <${data.login}></span>
          <span class="user__status">online</span>
      </p>
    </div>`;

    container.innerHTML += template;
  }

  renderUsers() {
    const container = document.querySelector(".chat__conected");
    container.innerHTML = '';
    this.model.users.forEach(element => {
      const template = `<div class=".chat_user user">
      <div class="user__photo">
      <img class="user__avatar" src="${this.model.getPath(element)}" alt="Аватар пользователя" srcset="">
  </div>
  <p class="user__info">
      <span class="user__name">${element.name}</span>
      <span class="user__status">online</span>
  </p> 
    </div>`;
      container.innerHTML += template;
    })


  }

  newMessage(data, user) {
    const container = document.querySelector(".room__field");
    const flag = (data.userId === (this.model.user._id || 0));
    const myMessage = flag ? "post__my" : "";

    const template = `<div class="room__post post ${myMessage}">
    <!-- <div class="user__photo"> -->
    <img class="user__avatar post__avatar" src="${this.model.getPath(user)}" alt="Аватар пользователя"
        srcset="">
    
    <p class="post__message">
        <span class="post__text">${data.text}</span>
    </p>
</div>`;
    container.innerHTML += template;
    const block = document.querySelector(".room__field");
    block.scrollTop = block.scrollHeight;

    const field = document.getElementById("message");
    field.value = '';
  }

  previewFile(event) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    const file = event.files[0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onloadend = function () {
      console.log(file.name);
      data.push(file.name.replace('.txt', '') + '\n' + reader.result);

      let img = document.createElement('img');
      img.src = event.target.result;
      img.alt = file.name;
      document.getElementById('gallery').appendChild(img);
    }
  }

  authError(type) {
    let form;
    if (type == 'reg') {
      form = document.querySelector("#form__registration");
    } else {
      form = document.querySelector("#form__auth");
    }
    const field = form.querySelector('.login__error');
    field.classList.add('login__line-required');

    setTimeout(() => {
      field.classList.remove('login__line-required');
    }, 5000);
  }
}