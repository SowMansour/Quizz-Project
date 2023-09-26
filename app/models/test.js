require('dotenv').config();
const Level = require('./level');
const Question = require('./question');

async function test() {
    const questions = await Question.findAll();
    console.log(questions);
}

test();