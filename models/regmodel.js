var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const regSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    img:{
        data:Buffer,
        contentType:String
    }
});

const Reg = new mongoose.model("regmodel",regSchema);
module.exports = Reg;