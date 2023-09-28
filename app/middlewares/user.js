const userMiddleware = (req, res, next) => {
    if(req.session.user){
        res.locals.user = req.session.user;
    } else {
        res.locals.user = null;
        return res.redirect('/login');
    }
    next();
}

module.exports = userMiddleware;