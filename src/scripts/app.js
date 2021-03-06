import Controller from "./controller.js";

const controller = new Controller();

controller.init();

controller.connectElements('.room__send', 'click');
controller.connectElements('.login__button', 'click');
controller.connectElements('#form__registration', 'submit');
controller.connectElements('.room__load', 'click');

controller.connectElements('.room__message', 'keyup');