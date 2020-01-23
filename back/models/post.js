const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    authorName : String,
    authorNickname : String,
    contentTitle : String,
    contentText  : String,
    commentsList : Array
});

module.exports = mongoose.model('Post', postSchema);