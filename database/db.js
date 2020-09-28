var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost", {useUnifiedTopology: true}).then((conn) => {
    try {
        global.conn = conn.db("validaCEPGotham");
    } catch(error) {
        console.log(error);
    }
}).catch((err) => {
    console.log(err)
});

module.exports = {};