const router = require('express').Router();
const Post = require('../models/post');
const Comment= require('../models/comment');

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

router.post('/posts', (req, res) => {
    let post = new Post({
        authorName: req.body.authorName,
        authorNickname: req.body.authorNickname,
        contentTitle: req.body.contentTitle,
        contentText: req.body.contentText
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

router.put('/posts/:id', (req, res) => {
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

router.delete('/posts/:id', async (req, res) => {
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