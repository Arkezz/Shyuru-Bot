const mongoose = require("mongoose");


const schema = mongoose.Schema({
    username: String,
    userID: String,
    money: Number
});

module.exports = mongoose.model("Money", schema);