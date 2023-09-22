const { type } = require('os');
const CoreModel = require('./coreModel');
const { error } = require('console');

class Level extends CoreModel{
    name;

    constructor(obj){
        super(obj.id);
        
        if (typeof obj.name !== 'string') {
            throw new error("Level name must be a string");
        }
        this.name = obj.name;

    }
}

module.exports = Level;
