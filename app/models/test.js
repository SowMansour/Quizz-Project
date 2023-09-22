const CoreModel = require('./coreModel');
const Level = require('./level');
const Answer = require('./answer');


// const level = new Level({
//     name: "Intermediaire"
// });

// console.log(level);
// console.log(level instanceof Level);

const answer = new Answer({
    id: 1,
    description: "string",
    question_id: 5
})

console.log(answer); // On remarque ici que l'id n'est pas affiché
console.log(answer.id); //On accede à l'id grace au getter
// answer.id = 1234; //On modifie l'id grace au setter
// console.log(answer.id); 

