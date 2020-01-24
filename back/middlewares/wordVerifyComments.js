const BadWord = require('../models/badWord');

let wordVerifyComments = async (req, res, next) => {
    let comment = req.body.commentContent;
    let words = await BadWord.find();
    let offensiveWordsInText = [];
    let offensiveWords = [];

    for (let i = 0; i < words.length; i++) {
        offensiveWords.push(words[i].word);
    }

    for (let i = 0; i < offensiveWords.length; i++) {
        if (comment.includes(offensiveWords[i])) {
            offensiveWordsInText.push(offensiveWords[i]);
        }
    }

    if (offensiveWordsInText.length === 0) {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                msg: 'Sorry, your comment content next bad words: ',
                words: offensiveWordsInText
            }
        });
    }
};

module.exports = wordVerifyComments;