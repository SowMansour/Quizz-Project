const client = require('../database');
const CoreModel = require('./coreModel');

class Level extends CoreModel{
    name;

    constructor(obj){
        super(obj.id);
        
        if (typeof obj.name !== 'string') {
            throw new error("Level name must be a string");
        }
        this.name = obj.name;
    }
    //Static nous permet d'ignorer le constructeur
    static async findAll(){
        const query = {
            text: `SELECT * FROM level`
        }
        const result = await client.query(query);

        const levels = [];

        //result.rows.forEach(elem => {
        for(let elem of result.rows){
            levels.push(new Level(elem));
        }
        return levels;
    }

    static async getOneById(id) {
        const query = {
            text: `SELECT * FROM level WHERE id = $1;`,
            value: [id]
         }
         const level_obj = await client.query(query);
         const level = new Level (level_obj.rows[0]);
         return level
    }
}

Level.findAll();

module.exports = Level;
