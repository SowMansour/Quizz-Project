const userMiddleware = (req, res, next) => {
    if(req.session.user){
    next();
    } else {
        res.locals.user = null;
        return res.redirect('/login');
    }
}

module.exports = userMiddleware;