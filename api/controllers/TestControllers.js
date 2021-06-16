const db = require('../models');

class TestControllers {
    static async selectAll(req, res) {
        try {
            const allUsers = await db.Testando.findAll();
            return res.status(200).json(allUsers);
        }catch (err) {
            res.status(500).json(err.message);
        }
        
    }

    static async selectOne(req, res) {
        try {
            const id = req.params.id;
            const oneUser = await db.Testando.findOne({where: {id: id}})
            res.status(200).json(oneUser)  
        }catch (err) {
            res.status(500).json(err.message);
        }
        
    }
}

module.exports = TestControllers;