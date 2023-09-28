const adminMiddleware = (req, res, next) => {
    //Check if user === admin
    if(req.session.user.role === 'admin'){
    next();
    } else {
        return res.redirect('/profil');
    }
}

module.exports = adminMiddleware;