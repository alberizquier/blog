const jwt = require('jsonwebtoken');
const User = require('../models/user');

let tokenVerify = async (req, res, next) => {
    let token = req.header('Authorization');
    token = token.replace('Bearer ','');
    try {
        const userPayload = jwt.verify(token, 'secret');
        if(userPayload){
            console.log(userPayload);
           await User.findById(userPayload.user._id);
           req.userData = userPayload.user;
           next();
        }
        //  (err, req => {
        //     if (err) {
        //         return res.status(401).json({
        //             ok: false,
        //             err
        //         });
        //     }
            // await User.findById(userPayload.user._id);
            // next();
        // }));
    
    } catch (error) {
        console.log(error);
    }
}

module.exports = tokenVerify;