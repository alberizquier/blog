let roleVerify = (req, res, next) => {
    let role = req.userData.role;
    
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

module.exports = roleVerify;