const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    postId : String,
    authorCommentNickname : String,
    commentContent : String,
    date  : Date
});

module.exports = mongoose.model('Comment', commentSchema);