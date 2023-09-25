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

    static async findAll() {
      const query = 'SELECT * FROM "user"';

      const results = await client.query(query);

      // const users = [];

      // for (const obj of results.rows) {
      //     const user = new User(obj);

      //     users.push(user);
      // }

      /**
       * Array.map permet de créér un nouveau tableau, selon les conditions réunis dans la fonction que l'on pass en argument
       */
      const users = results.rows.map((obj) => {
          const user = new User(obj);

          return user;
      });

      console.log(results.rows);
      console.log(users);

      for (const obj of users) {
          console.log(obj.fullName());
      }

      return users;
  }

    static async findById(id) {
      const query = {
          text: 'SELECT * FROM "user" WHERE id = $1',
          values: [id],
      };

      const result = await client.query(query);

      console.log(result.rows);
      console.log(result.rows[0]);
      // On souhaite retourner une instance de User
      const user = new User(result.rows[0]);

      console.log(user);

      return user;
  }

  async insert() {
    // Dans cette requêtes le RETURNING * veut dire que l'on souhaite que la BDD, nous retourne une copie de ce qu'elle vient d'enregistrer
    const query = {
        text: 'INSERT INTO "user" ("email", "password", "firstname", "lastname") VALUES ($1, $2, $3, $4) RETURNING *',
        values: [this.email, this.password, this.firstname, this.lastname],
    };

    const result = await client.query(query);

    this.id = result.rows[0].id;

    console.log(this);
}

}


module.exports = User;
