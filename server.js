var http = require('http');
var Static = require('node-static');

var WebSocketServer = new require('ws');

// подключённые клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});

webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  
  console.log("новое соединение " + id);

  //TODO: Регистрация пользователя перед открытием сокета

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);
    let pack = {
      userId: id,
      text: message
    }
    for (var key in clients) {
      clients[key].send(JSON.stringify(pack));
    }
  });

  ws.on('close', function() {
    delete clients[id];
    
    console.log('соединение закрыто ' + id);


    // if (event.wasClean) {
    //   console.log('Соединение закрыто чисто');
    // } else {
    //   console.log('Обрыв соединения'); // например, "убит" процесс сервера
    // }
    // console.log('Код: ' + event.code + ' причина: ' + event.reason);
  });

});