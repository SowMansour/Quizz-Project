const CoreModel = require('./coreModel');


class Question extends CoreModel{
    question;
    anecdote;
    wiki;
    level_id;
    answer_id;
    quiz_id;

    constructor(obj){
      super(obj.id);

      if (typeof obj.question !== 'string') {
        throw new error("Question question must be a string");
    }
      this.question = obj.question;

      if (typeof obj.anecdote !== 'string') {
        throw new error("Question anecdote must be a string");
    }
      this.anecdote = obj.anecdote;
      
      if (typeof obj.wiki !== 'string') {
        throw new error("Question wiki must be a string");
    }
      this.wiki = obj.wiki;

      if(isNaN(parseInt(obj.level_id))) {
        throw new Error('Question level_id must be a number')
    }
      this.level_id = obj.level_id;
      
      if(isNaN(parseInt(obj.answer_id))) {
        throw new Error('Question answer_id must be a number')
    }
      this.answer_id = obj.answer_id;

        if(isNaN(parseInt(obj.quiz_id))) {
        throw new Error('Question quiz_id must be a number')
    }
      this.quiz_id = obj.quiz_id;  
    }
}

module.exports = Question;
