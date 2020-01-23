const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const tokenVerify = require('../middlewares/authentication');

router.post('/users/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    msg: '(User) or password are incorrect'
                }
            });
        }
        if (!bcrypt.compareSync(req.body.password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    msg: 'User or (password) are incorrect'
                }
            });
        }
        let token = jwt.sign({
            user: userDB
        }, 'secret', { expiresIn: 60 * 60 * 24 * 30});
        res.json({
            ok: true,
            user: userDB,
            token
        })
    });
});

router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        role: req.body.role
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    });
});

router.get('/users', (req, res) => {
    User.find({})
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok : true,
                users
            });
        });
});

module.exports = router;