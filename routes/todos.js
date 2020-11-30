const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');

router.get('/todos', tokenCheck, async (req, res) => {
    const result = await TD.find({ user: req.user})
    if (result) {
        res.json(result);
    }
    else {
        res.json({ error: err });
    }
})

module.exports = router;