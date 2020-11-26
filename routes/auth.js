require('dotenv').config()
const router = require('express').Router();
const bcrypt = require('bcryptjs')
const USER = require('../model/userModel')
const jwt = require('jsonwebtoken')
const registerSchema = require('../validator');
const loginSchema = require('../validateLogin');
const tokenCheck = require('../tokenVerifier');


router.post('/register', async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    const isAlreadyInUse = await USER.findOne({ email: req.body.email })
    if (isAlreadyInUse) return res.status(400).send({ msg: "User with such email already exists!" })

    const salt = await bcrypt.genSalt(12)
    const hashedPasswd = await bcrypt.hash(req.body.password, salt)

    const user = new USER({
        name: req.body.name,
        email: req.body.email,
        password: hashedPasswd
    })

    try {
        const saved = await user.save()
        res
            .status(200)
            .send({ msg: 'SUCCESS'})
        
    } catch (error) {
        res.json({ msg: error})
    }
    
})

router.post('/login', async (req, res) => {
    const { error } = await loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    const user = await USER.findOne({ email: req.body.email })
    if (!user) return res.status(400).send({ msg: "Incorrect email or password!" })

    const plainPasswd = await bcrypt.compare(req.body.password, user.password)
    if (!plainPasswd) return res.status(400).send({ msg: "Incorrect email or password!" })

    const token = jwt.sign({_id: user._id}, process.env.SECRET)

    res
        .status(200)
        .header('todo-token', token)
        .send(token)
})

module.exports = router