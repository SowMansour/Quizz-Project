const CoreModel = require('./coreModel');
require('dotenv').config();
const Level = require('./level');
const User = require('./user');
// const Answer = require('./answer');


// const level = new Level({
//     name: "Intermediaire"
// });

// console.log(level);
// console.log(level instanceof Level);

// const answer = new Answer({
//     id: 1,
//     description: "string",
//     question_id: 5
// })

// console.log(answer); // On remarque ici que l'id n'est pas affiché
// console.log(answer.id); //On accede à l'id grace au getter
// answer.id = 1234; //On modifie l'id grace au setter
// console.log(answer.id); 

async function test(){
    // const levels = await Level.findAll();
    // console.log(levels);
    
    // await User.findAll();
    // // await User.findAll();
    // await User.findById(1);
    // await User.findById(3);

    // Donnéed issues d'un formulaire
    const user = {
        firstname: 'Marc',
        lastname: 'oclock',
        id: 4,
        firstname: 'Bianca',
        lastname: 'Bell',
        password: 'stringcompliquée',
        email: 'Marc@oclock.io',
        email: 'Bianca@oclock.io',
    };
    const user_obj = new User(user);

    await user_obj.insert();
    await user_obj.destroy();

    process.exit();
}

test();