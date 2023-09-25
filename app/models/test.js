require('dotenv').config();
const Level = require('./level');

async function test() {
    const levels = await Level.findAll();
    console.log(levels);
    //await Level.sync({ force: true });
}

test();