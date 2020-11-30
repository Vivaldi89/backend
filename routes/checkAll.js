const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');

router.put('/checkall', tokenCheck, (req, res) => {
    TD.updateMany({ checked: false, user: req.user }, {$set: {checked: true}},
        (err, o) => {
            if (err) {
                res.json({ msg: "Error"});
            }
            else {
                res.json({ msg: "SUCCESS"});
            }
        })
})

module.exports = router;