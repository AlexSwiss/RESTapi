const express = require('express');
const Ninja = require('../models/ninja');

router = express.Router();


//get list of all ninjas from db
router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET'});
});

//add a ninja to db
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);  

});

//edit a ninja from db
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja);
        });
    });
});

//delete a ninja from db
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
        res.send(ninja);
    })
});

module.exports = router;