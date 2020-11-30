const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');

router.delete('/del/:id', tokenCheck, (req, res) => {
    const num = Number(req.params.id)
    TD.findOneAndDelete ({
        id: num,
        user: req.user
    }, (err, obj) => {
        if (err) {
            res.json({ msg: "Error"});
        }
        else {
            res.json({ msg: "SUCCESS"});
        }
    }
)})

module.exports = router;