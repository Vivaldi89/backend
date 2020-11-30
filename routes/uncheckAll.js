const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');

router.put('/uncheckall', tokenCheck, (req, res) => {
    TD.updateMany({ checked: true, user: req.user  }, {$set: {checked: false}},
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