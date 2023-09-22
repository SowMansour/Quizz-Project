const CoreModel = require('./coreModel');
const emailValidator = require('email-validator');


class User extends CoreModel {
    email;
    password;
    firstname;
    lastname;

    constructor(obj){
      super(obj.id);
      
      if(!emailValidator.validate(obj.email)){
        throw new Error('User email must be a valid email')
      }
      this.email = obj.email;

      this.password = obj.password;  


      if (typeof obj.firstname !== 'string') {
        throw new error("User firstname must be a string");
    }
      this.firstname = obj.firstname; 

      if (typeof obj.lastname !== 'string') {
        throw new error("User lastname must be a string");
    }
      this.lastname = obj.lastname;     
    }
}


module.exports = User;
