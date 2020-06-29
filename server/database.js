const {MongoClient} = require(`mongodb`);
const logger = require(`./logger`);

const uri = "mongodb+srv://pavel:5430027@cluster0-c10cy.mongodb.net/chat-room?retryWrites=true&w=majority";

module.exports = MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then((client) => client.db(`users`)).catch((e) => {
    logger.error(`Failed to connect to MongoDB`, e);
    process.exit(1);
});