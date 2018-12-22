const express = require('express');

router = express.Router();


//get list of all ninjas from db
router.get('/ninjas', (req, res) => {
    console.log('req.body');
    res.send({type: 'GET'});
});

//add a ninja to db
router.post('/ninjas', (req, res) => {
    res.send({type: 'POST'});
});

//edit a ninja from db
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'});
});

//delete a ninja from db
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;