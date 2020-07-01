const db = require('../database/database');
const logger = require(`../logger`);

console.log(db);    
const setupCollection = async () => {
    const dBase = await db;
    const collection = dBase.collection(`messages`);
    collection.createIndex({
        messageid: 1
    }, {
        unique: true
    });
    
    return collection;
}

class MessageStore {
    constructor(collection) {
        this.collection = collection;
    }

    async getUserMessage(userid, buf = 10) {
        return (await this.collection).find({
            userid
        });
    }

    async save(userData) {
        return (await this.collection).insertOne(userData);
    }
}

module.exports = new MessageStore(setupCollection().catch((e) => logger.error(`Failed to set up "message"-collection`, e)));