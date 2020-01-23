const jwt = require('jsonwebtoken');

let tokenVerify = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }
        req.user = decoded.user;
        next();
    });
}

module.exports = tokenVerify;