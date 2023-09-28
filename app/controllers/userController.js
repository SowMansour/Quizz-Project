const bcrypt = require('bcrypt');
const { User } = require('../models');
const emailValidator = require('email-validator');
const { request } = require('express');

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

    login:(req, res) => {
        res.render('login')
    },

    userCheckIn: async (req, res) => {
        
        //Rtrieve form data
        const {email, password} = req.body;

        //Validate email format
        if(!emailValidator.validate(email)){
        return res.render('login', {error: 'email incorrect'})
        }

        //Validate if email exist or not
        const user = await User.findOne({
            where: {
                email
            }
        });
        //If user doesnt exist, we throw an error
        if(!user){
            return res.status(400).render('login', {error: 'email not correct'});
        }

        //Compare password
        const validePassword = await bcrypt.compare(password, user.password);

        if(!validePassword){
            return res.status(400).render('login', {error: 'password not correct'});

        }
        //Secure step: Delete password before session transmission
        delete user.dataValues.password;

        //Add User to Session
        req.session.user = user;

        res.redirect('/');
    },

    logout:(req, res) => {
        //Détruire la session
        req.session.user = null;
        res.redirect('/');
    },

    getProfile:(req, res) => {
        res.render('profile');
    },
}

module.exports = userController;