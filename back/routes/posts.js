const router = require('express').Router();
const Post = require('../models/post');
const Comment= require('../models/comment');
const tokenVerify = require('../middlewares/authentication');
const roleVerify = require('../middlewares/roleVerify');
const wordsVerifyPosts = require('../middlewares/wordVerifyPosts');

router.get('/posts', (req, res) => {
    Post.find({})
        .exec((err, posts) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok : true,
                posts
            });
        });
});

router.post('/posts', [ tokenVerify, roleVerify, wordsVerifyPosts ], (req, res) => {
    let post = new Post({
        authorName: req.body.authorName,
        authorNickname: req.body.authorNickname,
        contentTitle: req.body.contentTitle,
        contentText: req.body.contentText,
        image : req.body.image,
        continent : req.body.continent,
        date : new Date()
    });

    Post.find({})
        .exec((err, posts) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
        });

    post.save((err, postDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            post: postDB
        });
    });
});

router.put('/posts/:id', [ tokenVerify, roleVerify, wordsVerifyPosts ], (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Post.findByIdAndUpdate(id, body, {
        new: true
    }, (err, postDB) => {
        if (err) {
            return res.send(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            post: postDB
        });
    })

});

router.get('/posts/:id', (req, res) => {
    const id = req.params.id;    
    Post.findOne({
        _id: id
    }, (err, postDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            post: postDB
        });
    });
});

router.delete('/posts/:id', [ tokenVerify, roleVerify ], async (req, res) => {
    const id = req.params.id;    
    await Post.findOneAndDelete({
        _id: id
    }, (err, postDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
    });
    let comment = await Comment.find({
        postId : id
    });
    console.log(comment);
    await comment.delete();
    res.json({
        ok: true,
        post: postDB
    });
});

module.exports = router;