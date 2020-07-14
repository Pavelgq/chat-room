const WebSocketServer = new require('ws');
const getCookie = new require('../utils/getCookie');
const userStore = new require('../chat/userStore');

// подключённые клиенты
var clients = new Set();

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});

webSocketServer.on('connection', function (ws, data) {
  const cookieIndex = data.rawHeaders.indexOf('Cookie', 0) + 1;
  const id = getCookie(data.rawHeaders[cookieIndex], "userId");
  const userid = {
    '_id': id
  }
  let userInfo;
  let createPack = {
    userInfo: [],
    type: "open"
  }
  clients[id] = ws;

  for (var key in clients) {
    createPack.userInfo.push(key);
  }
  console.log(createPack.userInfo);
  userStore.getArrayUsers(createPack.userInfo).then((result) => {
    console.log('open user')
    console.log(result);
    createPack.userInfo = result;
    for (var key in clients) {
      clients[key].send(JSON.stringify(createPack));
    }

  });
  

  console.log("новое соединение " + id);




  ws.on('message', function (message) {
    console.log('получено сообщение ' + message);
    let pack = {
      userInfo: userInfo,
      userId: id,
      text: message,
      type: "message"
    };

    for (var key in clients) {
      clients[key].send(JSON.stringify(pack));
    }
  });

  ws.on('close', function () {
    // clients.splice(clients.indexOf(socket.id), 1)
    // console.log(`Client with id ${socket.id} disconnected`)
    delete clients[id];
    console.log('соединение закрыто ' + id);
    let pack = {
      _id: id,
      type: "close"
    }
    for (var key in clients) {
      clients[key].send(JSON.stringify(pack));
    }

    // if (event.wasClean) {
    //   console.log('Соединение закрыто чисто');
    // } else {
    //   console.log('Обрыв соединения'); // например, "убит" процесс сервера
    // }
    // console.log('Код: ' + event.code + ' причина: ' + event.reason);
  });

});

module.exports = webSocketServer;