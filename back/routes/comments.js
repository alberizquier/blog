const router = require('express').Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const tokenVerify = require('../middlewares/authentication');
const adminVerify = require('../middlewares/roleVerify');
const publisherVerify = require('../middlewares/roleVerify');
const roleVerify = require('../middlewares/roleVerify');

router.get('/comments', (req, res) => {
    Comment.find({})
        .exec((err, comments) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                comments
            });
        });
});

router.get('/posts/:id/comments', (req, res) => {
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
            comments: postDB.commentsList
        });
    });
});

router.post('/posts/:id/comments', [ tokenVerify, roleVerify ], async (req, res) => {
    const id = req.params.id;
    const post = await Post.findById(id);
    if (!post) {
        res.json({
            msg: 'Post not found'
        });
    }
    let comment = new Comment({
        postId : id,
        authorCommentNickname: req.body.authorCommentNickname,
        commentContent: req.body.commentContent,
        date: new Date()
    });
    await comment.save();
    post.commentsList.push({
        id: comment._id,
        postId : id,
        authorCommentNickname: req.body.authorCommentNickname,
        commentContent: req.body.commentContent,
        date: new Date()

    });
    await post.save();
    res.json({
        ok: true,
        comment: comment
    });
});

router.put('/posts/:idPost/comments/:idComment', [ tokenVerify, roleVerify ], async (req, res) => {
    const postId = req.params.idPost;
    const commentId = req.params.idComment;
    const post = await Post.findById(postId);
    if (!post) {
        res.json({
            msg: 'Post not found'
        });
    }
    let updatedComment = {
        authorCommentNickname: req.body.authorCommentNickname,
        commentContent: req.body.commentContent,
        date: new Date()
    };
    await Comment.updateOne({
        _id: commentId
    }, {
        $set: updatedComment
    });
    for (let i = 0; i <= post.commentsList.length; i++) {
        console.log(post.commentsList[i].id);
        if (post.commentsList[i].id == commentId) {
            post.commentsList[i] == updatedComment;
        }
    }
    await post.save();
    res.json({
        ok: true,
        comment: updatedComment
    });
});

router.delete('/posts/:postId/comments/:commentId', [ tokenVerify, roleVerify ], async (req, res) => {
    const commentId = req.params.commentId;
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
        res.json({
            msg: 'Post not found'
        });
    }
    let comment = await Comment.findById(commentId);
    if (!comment) {
        res.json({
            msg: 'Comment not found'
        });
    }
    await comment.delete();
    for (let i = 0; i <= post.commentsList.length; i++) {
        if (post.commentsList[i].id == commentId) {
            post.commentsList.splice(i,1);
        }
    }
    await post.save();
    res.json({
        ok: true,
        comment: comment
    });
});

module.exports = router;