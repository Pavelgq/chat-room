const db = require('./database');

const setupCollection = async () => {
    const dBase = await db;

    const collection = dBase.collection('user');
    collection.createIndex(
        {username: -1}, 
        {unique: true});

    return collection;
}

class ChatStore {
    constructor (collection) {
        this.collection = collection;
    }

    async getUser() {
        return (await this.collection).findOne({username});
    }
    
}