const {
  Router
} = require(`express`);
const async = require(`../utils/async`);
const dataRenderer = require(`../utils/data-renderer`);
const logger = require(`../logger`);
const userStore = new require('../chat/userStore');

const chatRouter = new Router();



const toPage = async (cursor, skip = 0, limit = 20) => {

  const data = await (cursor.sort({
    date: -1
  }).skip(skip).limit(limit).toArray());
  const total = await cursor.count();


  const array = await data.map(async function (element) {
    let userInfo = {};
    userInfo = userStore.getUser(element.userId);
    element.userInfo = await userInfo;
    
    return await element;
  });

  const obj = Promise.all(array);

  return {
    data: await obj,
    skip,
    limit,
    total
  };
}
chatRouter.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
  next();
});


chatRouter.post(`/out`, async (async (req, res) => {
  const data = await req.body;

  const messages = await toPage(await chatRouter.messageStore.getUserMessage(), data.skip * 1, data.limit * 1);
  res.send(messages);
}));

chatRouter.post(``, async (async (req, res) => {
  const data = await req.body;
  logger.info(`Received data from user: `, data);
  // res.send((req));

  await chatRouter.messageStore.save(data);
  dataRenderer.renderDataSuccess(req, res, data);
}));

chatRouter.use((exception, req, res, next) => {
  dataRenderer.renderException(req, res, exception);
  next();
});



module.exports = (messageStore) => {
  chatRouter.messageStore = messageStore;
  return chatRouter;
}