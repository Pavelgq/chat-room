const WebSocketServer = new require('ws');
const getCookie = new require('../utils/getCookie');
const userStore = new require('../chat/userStore');

// подключённые клиенты
var clients = {};

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
  userStore.getUser(userid).then((result) => {
    userInfo = result;
  });

  clients[id] = ws;
  
  console.log("новое соединение " + id);

  ws.on('message', function (message) {
    console.log('получено сообщение ' + message);
    let pack = {
      userInfo: userInfo,
      userId: id,
      text: message
    };
    
    for (var key in clients) {
      clients[key].send(JSON.stringify(pack));
    }
  });

  ws.on('close', function () {
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

module.exports = webSocketServer;