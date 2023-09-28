const emailValidator = require('email-validator');

const checkEmail = (req, res, next) => {
    if(emailValidator.validate(req.body.email)){
        return next();
    }
        const error = new Error('email incorrect');
        return next(error);
};

module.exports = checkEmail;