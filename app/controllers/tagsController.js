const { Answer, Question, Level, Quiz, User, Tag } = require('../models/index');

const tagController = {
    getTags: async (req, res) =>{
        const tags = await Tag.findAll();
        //console.log(tags);
        
        res.render('tags', {
            tags,
        });
    },

    getTag: async (req, res) =>{
        const paramId = req.params.id;

        const tag = await Tag.findByPk(paramId, {
            include: {association: 'quizzes', include: 'author'}
        });
        //console.log(tags);
        
        res.render('tag', {
            tag,
        });
    }
}

module.exports = tagController;