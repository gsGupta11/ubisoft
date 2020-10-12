var mongoose = require('mongoose');
require('dotenv').config()
makeConnection = () => {
    // s="mongodb+srv://"+process.env.USERNAME+":"+process.env.PASS+"@cluster0.wveny.mongodb.net/ubisoft?retryWrites=true&w=majority"
    mongoose.connect("mongodb+srv://prince:prince12345@cluster0.wjthg.mongodb.net/ubisoft?retryWrites=true&w=majority", {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
        console.log("Db Connection Established");
    }).on("error", (error) => {
        console.log("Error: ", error);
    })
}

module.exports = makeConnection
