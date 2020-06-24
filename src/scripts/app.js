import Controller from "./controller.js"

const controller = new Controller();

controller.init();

controller.connectElements(".room__send", 'click');