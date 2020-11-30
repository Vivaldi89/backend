const TD = require('../model/todoModel');
const router = require('express').Router();
const tokenCheck = require('../tokenVerifier');


router.post('/add', tokenCheck, async (req, res) => {
    const newTodo = new TD();
    newTodo.id = req.body.id;
    newTodo.text = req.body.text;
    newTodo.checked = req.body.checked;
    newTodo.user = req.user;
    const resp = await newTodo.save();
    if (resp) {
    res.send({ msg: "Success" });
    } else {
    res.json({ error: "Bad request" });
    }
})

module.exports = router;