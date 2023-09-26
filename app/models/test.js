require('dotenv').config();
const Level = require('./level');
const Question = require('./question');
const Tag = require('./tag');
const Quiz = require('./quiz');


async function test() {
    // const tags = await Tag.findAll();

    // console.log(tags);

    // let questions = await Question.findAll();
    // questions = await Question.findAll({
    //     limit: 1,
    // });

    // const question = await Question.findByPk(3);
    // console.log(question);
    // -   Créer un Level avec le nom "très difficile" et l'insérer en BDD.
    // const difficile = Level.build({ name: 'Très Difficile' });
    // const result = await difficile.save();
    // console.log(result);

    // const res = await Level.create({
    //     name: 'Ultra Très difficile',
    // });

    // console.log(res);

    const del = await Level.destroy({
        where: {
            id: 7,
        },
    });

    console.log(del);

    process.exit();
}

test() 