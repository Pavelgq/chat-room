// const http = require('http');
// const Static = require('node-static');
// const express = require('express');
// const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

// const PORT = process.env.PORT || 3000;


// const app = express();

// let db;

// async function start() {
//   try {

//     app.listen(PORT, () => {
//       console.log('Server started...');
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }



// start();

const express = require(`express`);
const userStore = require(`../chat/store`);
// const imageStore = require(`./images/store`);
const userRouter = require(`../chat/route`)(userStore);// imageStore);
const logger = require(`../logger`);

const app = express();
app.use(express.static(`static`));

app.use(`/api/user`, userRouter);

// app.use(`/`, function (req, res, next) {
//   console.log(req.method);
//   next();
// });

const HOSTNAME = process.env.SERVER_HOST || `localhost`;
const PORT = parseInt(process.env.SERVER_PORT, 10) || 3000;

const serverAddress = `http://${HOSTNAME}:${PORT}`;
module.exports = {
  run() {
    app.listen(PORT, HOSTNAME, () => {
      logger.info(`Server running at ${serverAddress}/`);
    });
  },
  app
};



