let tokenVerify = (req, res, next) => {
    let token = req.get('token');
    
    next();
}


module.exports = tokenVerify;