const db = require('../database/database');
const logger = require(`../logger`);

console.log(db);    
const setupCollection = async () => {
    const dBase = await db;
    const collection = dBase.collection(`messages`);
    collection.createIndex({
        date: 1
    }, {
        unique: true
    });
    
    return collection;
}

class MessageStore {
    constructor(collection) {
        this.collection = collection;
    }

    async getUserMessage() {
        return (await this.collection).find().sort({"date" : -1});
    }

    async save(messageData) {
        return (await this.collection).insertOne(messageData);
    }
}

module.exports = new MessageStore(setupCollection().catch((e) => logger.error(`Failed to set up "message"-collection`, e)));