const {Router} = require(`express`);
const async = require(`../utils/async`);
const dataRenderer = require(`../utils/data-renderer`);
const logger = require(`../logger`);


const chatRouter = new Router();



const toPage = async (cursor, skip = 0, limit = 20) => {
    return {
      data: await (cursor.sort( { date: -1 } ).skip(skip).limit(limit).toArray()),skip,limit,total: await cursor.count()};
  };

chatRouter.use((req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
    next();
});


chatRouter.post(`/out`, async(async (req, res) => {
    const data = await req.body;
    res.send(await toPage(await chatRouter.messageStore.getUserMessage(), data.skip*1, data.limit*1));
}));

chatRouter.post(``, async(async (req, res) => {
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