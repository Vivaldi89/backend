const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');

router.delete('/delcompleted', tokenCheck, (req, res) => {
    TD.deleteMany({
        checked: true,
        user: req.user
    }, (err) => {
        if (err) {
            res.json({ msg: "Error"});
        }
        else {
            res.json({ msg: "SUCCESS"});
        }
    }
)})

module.exports = router;