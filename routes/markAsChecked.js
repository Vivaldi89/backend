const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');

router.put('/update/:id/:check', tokenCheck, (req, res) => {
    TD.updateOne({
        id: req.params.id,
        user: req.user
    }, {$set: {checked: req.params.check}}, 
    (err, newTD) => {
        if (err) {
            res.status(204).send(err);
        }
        else {
            res.send({ msg: "Success"});
        }
    }
)})

module.exports = router;