

class CoreModel {
    #id;

    constructor(id){
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    // set id(param) {
    //     this.#id = param;
    // }
};



module.exports = CoreModel;