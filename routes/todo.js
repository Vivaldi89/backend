const router = require('express').Router();
const TD = require('../model/todoModel')
const tokenCheck = require('../tokenVerifier')

router.post('/add', tokenCheck, (req, res) => {
    const newTodo = new TD()
    newTodo.id = req.body.id
    newTodo.text = req.body.text
    newTodo.checked = req.body.checked
    newTodo.user = req.user
    newTodo.save()
     .then(() => res.send({ msg: "Success" }))
     .catch((err) => res.json({ error: err }))
})

router.get('/update/:id/:check', tokenCheck, (req, res) => {
    TD.updateOne({
        id: req.params.id,
        user: req.user
    }, { checked: Boolean(req.params.check) }, //{$set:
    (err, newTD) => {
        if (err) res.status(204).send(err)
        else res.send({ msg: "Success"})
    }
)})

router.get('/todos', tokenCheck, (req, res) => {
    TD.find({ user: req.user})
        .then((result) => res.json(result))  //res.json(result)
        .catch((err) => res.json({ error: err }))
})

router.delete('/del/:id', tokenCheck, (req, res) => {
    const num = Number(req.params.id)
    TD.findOneAndDelete ({
        id: num,
        user: req.user
    }, (err, obj) => {
        if (err) res.json({ msg: "Error"})
        else res.json({ msg: "SUCCESS"})
    }
)})

router.delete('/delcompleted', tokenCheck, (req, res) => {
    TD.deleteMany({
        checked: true,
        user: req.user
    }, (err) => {
        if (err) res.json({ msg: "Error"})
        else res.json({ msg: "SUCCESS"})
    }
)})

router.get('/checkall', tokenCheck, (req, res) => {
    TD.updateMany({ checked: false, user: req.user }, {$set: {checked: true}},
        (err, o) => {
            if (err) res.json({ msg: "Error"})
            else res.json({ msg: "SUCCESS"})
        })
})

router.get('/uncheckall', tokenCheck, (req, res) => {
    TD.updateMany({ checked: true, user: req.user  }, {$set: {checked: false}},
        (err, o) => {
            if (err) res.json({ msg: "Error"})
            else res.json({ msg: "SUCCESS"})
        })
})

module.exports = router;