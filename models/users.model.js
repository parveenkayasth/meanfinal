const mongoose  = require("mongoose");
const Schema  =  mongoose.Schema;

const userSchema = new Schema({
        _id: String,
        username: String,
        password: String,

});

module.exports = mongoose.model("users", userSchema);