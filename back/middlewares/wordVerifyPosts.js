const BadWord = require('../models/badWord');

let wordVerifyPosts = async (req, res, next) => {
    // req.body.article = {
    //     authorName : "Hulk",
    //     authorNickname : "Hulky",
    //     contentTitle : "Soy verde",
    //     contentText : "Muy verde",
    //     continent : "Hulkilandia",
    //     image : "hulk.jpg",
    //     date : "hoy"
    // };
    // console.log("req at wordVerifyPosts: ", req);

    let postTitle = req.body.contentTitle;
    let postText = req.body.contentText;
    let words = await BadWord.find();
    let offensiveWordsInText = [];
    let offensiveWords = [];

    for (let i = 0; i < words.length; i++) {
        offensiveWords.push({'word' : words[i].word, 'level': words[i].level});
    }
    
    for (let i = 0; i < offensiveWords.length; i++) {
        if (postTitle.includes(offensiveWords[i].word) || postText.includes(offensiveWords[i].word)) {
            offensiveWordsInText.push({ 'word' : offensiveWords[i].word, 'level' : offensiveWords[i].level });
        }
    }

    if (offensiveWordsInText.length === 0) {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                msg: 'Sorry, your post content next bad words: ',
                words: offensiveWordsInText
            }
        });
    }
};

module.exports = wordVerifyPosts;