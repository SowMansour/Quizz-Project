const bcrypt = require('bcrypt');
const { User } = require('../models');
const emailValidator = require('email-validator');

const userController = {
    signup: async (req, res) => {
        res.render('signup')
    },

    register: async (req, res) => {
        //Retrieve data form
        const {lastname, firstname, email, password, passwordConfirm} = req.body;

        //Validate email format
        if(!emailValidator.validate(email)){
            return res.render('signup', {error: 'email incorrect'})
        }
        //Validate if email exist or not
        const user = await User.findOne({
            where: {
                email
            }
        });

        if(user){
            return res.render('signup', {error: 'email not available'});
        }

        //Validate passwword
        if(password !== passwordConfirm){
            return res.render('signup', {error: 'Wrong password'});
        }

        //Instaciate user
        const userObj = User.build({
            lastname, 
            firstname, 
            email  
        });

        //Hashage
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        //console.log(hash);
        
        //Save new user
        userObj.password = hash;
        //Insert user
        await userObj.save()
        
        res.redirect('/login');
    },

    login: async (req, res) => {
        
        res.render('login')
    
    }
}

module.exports = userController;