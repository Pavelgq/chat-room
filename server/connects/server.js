const express = require(`express`);
const userStore = require(`../chat/userStore`);
const messageStore = require(`../chat/messageStore`);
const imageStore = require(`../images/imageStore`);
const userRouter = require(`../chat/userRoute`)(userStore, imageStore);// imageStore);
const messageRouter = require(`../chat/messageRoute`)(messageStore);// imageStore);
const logger = require(`../logger`);
var bodyParser = require('body-parser');

const app = express();

app.use(express.static(`static`));

app.use(bodyParser.json());

app.use(`/api/user`, userRouter);
app.use(`/api/message`, messageRouter);

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



