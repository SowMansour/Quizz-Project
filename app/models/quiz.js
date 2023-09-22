const CoreModel = require('./coreModel');

class Quiz extends CoreModel{
    title;
    description;
    user_id;

    constructor(obj){
        super(obj.id);

        if (typeof obj.title !== 'string') {
            throw new error("Quiz title must be a string");
        }
        this.title = obj.title;

        if (typeof obj.description !== 'string') {
            throw new error("Quiz description must be a string");
        }
        this.description = obj.description; 
        
        if(isNaN(parseInt(obj.user_id))) {
            throw new Error('Quiz user_id must be a number')
        }
        this.user_id = obj.user_id;  
    }
}

module.exports = Quiz;
