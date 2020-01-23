let adminVerify = (req, res, next) => {
    let role = req.user.role;
    console.log(role);
    if (role === 'admin') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                msg: 'User is not an admin'
            }
        });
    }
};

let publisherVerify = (req, res, next) => {
    let role = req.user.role;
    if (role === 'publisher') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                msg: 'User is not a publisher'
            }
        });
    }
};

let authenticateVerify = (req, res, next) => {
    let role = req.user.role;
    if (role === 'publisher' || role === 'admin') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                msg: `User doesn't have permission`
            }
        });
    }
};

module.exports = adminVerify;
module.exports = publisherVerify;
module.exports = authenticateVerify;