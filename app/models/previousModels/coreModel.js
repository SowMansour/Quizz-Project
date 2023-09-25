const client = require('../database');

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

    static async findAll() {
        const query = `SELECT * FROM "${this.table}"`;

        const results = await client.query(query);

        const records = results.rows.map((obj) => {
            const data = new this(obj);

            return data;
        });

        return records;
    }

    static async findById(id) {
        const query = {
            text: `SELECT * FROM "${this.table}" WHERE id = $1`,
            values: [id],
        };

        const result = await client.query(query);

        // On souhaite retourner une instance de User
        const data = new this(result.rows[0]);

        return data;
    }
};



module.exports = CoreModel;