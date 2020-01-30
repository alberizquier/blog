const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    authorName : String,
    authorNickname : String,
    contentTitle : String,
    contentText  : String,
    image : String,
    continent : String,
    date: Date,
    commentsList : Array
});

module.exports = mongoose.model('Post', postSchema);