const models = require('../../models');

const index = (req, res) => {
    models.User.findAll().then(users => res.json(users));
}
const show = (req, res) => {
    models.User.findOne({where: {id: req.params.id}}).then(user => {
        if (!user) return res.status(404).end(); 
        res.json(user); 
    });
};
const create = (req, res) => {
    if (!req.body.name) return res.status(400).end();
    
    models.User.create({name: req.body.name}).then(user => {
        res.status(201).json(user);
    });
};
const update = (req, res) => {
    if (!req.body.name) return res.status(400).end();

    models.User.findOne({where: {id: req.params.id}}).then(user => {
        if (!user) return res.status(404).end();

        user.name = req.body.name;
        user.save().then(_ => res.json(user));
    });
};
const destory = (req, res) => {
    models.User.destroy({where: {id: req.params.id}}).then(() => {
        res.status(204).end();
    });
};

module.exports = {index, show, create, update, destory};
