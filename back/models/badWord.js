const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const badWordSchema = new Schema({
    level : Number,
    word : String
});

module.exports = mongoose.model('badWord', badWordSchema);