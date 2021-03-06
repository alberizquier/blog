const router = require('express').Router();
const BadWord = require('../models/badWord');
const tokenVerify = require('../middlewares/authentication');
const adminVerify = require('../middlewares/adminVerify');

router.get('/badWords', [ tokenVerify, adminVerify ], (req, res) => {
    BadWord.find({})
        .exec((err, words) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok : true,
                words
            });
        });
});

router.post('/badWords', [ tokenVerify, adminVerify ], (req, res) => {
    let word = new BadWord({
        level : req.body.level,
        word : req.body.word
    });
    word.save((err, wordDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            word: wordDB
        });
    });
});

router.put('/badWords/:id', [ tokenVerify, adminVerify ], (req, res) => {
    const id = req.params.id;
    const body = req.body;

    BadWord.findByIdAndUpdate(id, body, {
        new: true
    }, (err, wordDB) => {
        if (err) {
            return res.send(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            word: wordDB
        });
    })

});

router.delete('/badWords/:id', [ tokenVerify, adminVerify ], (req, res) => {
    const id = req.params.id;    
    BadWord.findOneAndDelete({
        _id: id
    }, (err, wordDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            word: wordDB
        });
    });
});

module.exports = router;