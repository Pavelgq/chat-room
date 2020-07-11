const {Router} = require(`express`);
const async = require(`../utils/async`);
const dataRenderer = require(`../utils/data-renderer`);
const logger = require(`../logger`);


const chatRouter = new Router();



const toPage = async (cursor, skip = 0, limit = 20) => {
    return {
      data: await (cursor.skip(skip).limit(limit).toArray()),
      skip,
      limit,
      total: await cursor.count()
    };
  };

chatRouter.use((req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, Content-Type, Accept`);
    res.header('Content-Type', 'application/json')
    next();
});


chatRouter.post(`/auth`, async(async (req, res) => {
    const data = await req.body; 
    const result = await chatRouter.userStore.getUser(data);
    res.send(await result);
}));


chatRouter.post(``, async(async (req, res) => {
    const data = await req.body; 
    logger.info(`Received data from user: `, data);
   
    
    await chatRouter.userStore.save(data);
    dataRenderer.renderDataSuccess(req, res, data);
  }));

chatRouter.use((exception, req, res, next) => {
    dataRenderer.renderException(req, res, exception);
    next();
  });

module.exports = (userStore) => {
    chatRouter.userStore = userStore;
    return chatRouter;
}