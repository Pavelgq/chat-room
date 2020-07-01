const db = require('../database/database');
const logger = require(`../logger`);

console.log(db);    
const setupCollection = async () => {
    const dBase = await db;
    const collection = dBase.collection(`users`);
    collection.createIndex({
        userid: -1
    }, {
        unique: true
    });
    
    return collection;
}

class UserStore {
    constructor(collection) {
        this.collection = collection;
    }

    async getUser() {
        return (await this.collection).findOne({
            userid
        });
    }

    async save(userData) {
        return (await this.collection).insertOne(userData);
    }
}

module.exports = new UserStore(setupCollection().catch((e) => logger.error(`Failed to set up "users"-collection`, e)));