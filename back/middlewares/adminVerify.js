let adminVerify = (req, res, next) => {
    console.log('Paso por aquí');
    let role = req.user.role;
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

module.exports = adminVerify;