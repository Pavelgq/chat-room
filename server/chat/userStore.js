const db = require('../database/database');
var ObjectId = require('mongodb').ObjectID;
const logger = require(`../logger`);
  
const setupCollection = async () => {
    const dBase = await db;
    const collection = dBase.collection(`users`);
    collection.createIndex({
        login: 1
    }, {
        unique: true
    });
    
    return collection;
}

class UserStore {
    constructor(collection) {
        this.collection = collection;
    }

    async getUser(userId) {
        return (await this.collection).findOne({
           "_id": ObjectId(userId)
        });
    }
    //TODO: получить всех пользователей с данными ключами в массиве

    async getArrayUsers(connectUsers) {
        const searchPack = connectUsers.map(function (userId) {return ObjectId(userId)});
        return (await this.collection).find({
            "_id": { $in:searchPack}
         }).toArray();
    }

    async save(userData) {
        return (await this.collection).insertOne(userData);
    }
}

module.exports = new UserStore(setupCollection().catch((e) => logger.error(`Failed to set up "users"-collection`, e)));