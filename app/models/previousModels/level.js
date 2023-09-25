const client = require('../database');
const CoreModel = require('./coreModel');

class Level extends CoreModel{
    static table = 'level';
    name;

    constructor(obj){
        super(obj.id);
        
        if (typeof obj.name !== 'string') {
            throw new error("Level name must be a string");
        }
        this.name = obj.name;
    }
    // une méthide static permet de se passer du mot clé new, et d'appeler directement la méthode.
    // Le constructeur n'est pas appelé
    static async findAll() {
        const query = 'SELECT * FROM level';
    // static async findAll() {
    //     const query = 'SELECT * FROM level';

        const levels_array = await client.query(query);
    //     const levels_array = await client.query(query);

        // On veut retourner un tableau d'instance de notre classe
        const levels = [];
    //     // On veut retourner un tableau d'instance de notre classe
    //     const levels = [];

        // Pour chaque élément sorti de la base de données,
        // On instancie notre classe et on l'envoie dans notre tableau levels
        for (let obj of levels_array.rows) {
            const level = new Level(obj);
    //     // Puyr chaque élément sortior de la base de données,
    //     // On instancie notre classe et on l'envoie dans notre tableau levels
    //     for (let obj of levels_array.rows) {
    //         const level = new Level(obj);

            levels.push(level);
        }
    //         levels.push(level);
    //     }

        return levels;
    }
    //     return levels;
    // }

    static async findOneById(id) {
        const query = 'SELECT * FROM level WHERE id = $1;';
    // static async findOneById(id) {
    //     const query = 'SELECT * FROM level WHERE id = $1;';

        const level_obj = await client.query(query, [id]);
    //     const level_obj = await client.query(query, [id]);

        const level = new Level(level_obj.rows[0]);
    //     const level = new Level(level_obj.rows[0]);

        return level;
    }
    //     return level;
    // }
}

Level.findAll();

module.exports = Level;
