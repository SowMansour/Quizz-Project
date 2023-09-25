const CoreModel = require('./coreModel');

class Answer extends CoreModel{
    description;
    question_id;

    constructor(obj){
        super(obj.id);

        if (typeof obj.description !== 'string') {
            throw new Error("Answer description must be a string");
        }
        this.description = obj.description;
        
        if(isNaN(parseInt(obj.question_id))) {
            throw new Error('Answer Question_id must be a number')
        }
        this.question_id = obj.question_id;

    }
}


module.exports = Answer;