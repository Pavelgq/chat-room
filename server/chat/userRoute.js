const {Router} = require(`express`);
const async = require(`../utils/async`);
const dataRenderer = require(`../utils/data-renderer`);
const logger = require(`../logger`);
const multer = require(`multer`);
const createStreamFromBuffer = require(`../utils/buffer-to-stream`);


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
    //res.header('Content-Type', 'form-data')
    next();
});

const upload = multer({storage: multer.memoryStorage()});

chatRouter.post(`/auth`, async(async (req, res) => {
    const data = await req.body; 
    const result = await chatRouter.userStore.getUser(data);
    res.send(await result);
}));


chatRouter.post(``, upload.single(`upload`), async(async (req, res) => {
    const data = await req.body; 
    logger.info(`Received data from user: `, data);
   
    const avatar = req.file;
    console.log(avatar);
    if (avatar) {
      data.avatar = avatar;
    }

    console.log(upload);

    if (avatar) {
      const avatarInfo = {
        path: `/api/user/${data.username}/avatar`,
        mimetype: avatar.mimetype
      };
      await chatRouter.imageStore.save(avatarInfo.path, createStreamFromBuffer(avatar.buffer));

      data.avatar = avatarInfo;
    }

    await chatRouter.userStore.save(data);
    dataRenderer.renderDataSuccess(req, res, data);
  }));

chatRouter.use((exception, req, res, next) => {
    dataRenderer.renderException(req, res, exception);
    next();
  });

module.exports = (userStore, imageStore) => {
    chatRouter.userStore = userStore;
    chatRouter.imageStore = imageStore;
    return chatRouter;
}