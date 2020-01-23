const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    nickname : String,
    email : {
      type: String,
      unique: true  
    },
    password  : String,
    isAuthenticate : Boolean,
    isAdmin : Boolean,
    isPublisher : Boolean
});


module.exports = mongoose.model('User', userSchema);