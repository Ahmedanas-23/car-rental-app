const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String
}, {timestamps : true});

const User = mongoose.model("Users", userSchema);

module.exports = User;