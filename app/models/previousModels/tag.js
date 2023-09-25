const CoreModel = require('./coreModel');



class Tag extends CoreModel{
    name;

    constructor(obj){
      super(obj.id);
      
      if (typeof obj.name !== 'string') {
        throw new error("Tag name must be a string");
    }
      this.name = obj.name;   
    }
}


module.exports = Tag;
