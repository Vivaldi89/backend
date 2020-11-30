const USER = require('../model/userModel');
const router = require('express').Router();
const registerSchema = require('../validator');
const bcrypt = require('bcryptjs');
// const tokenCheck = require('../tokenVerifier');

router.post('/register', async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const isAlreadyInUse = await USER.findOne({ email: req.body.email });
    if (isAlreadyInUse) {
        return res.status(400).send({ msg: "User with such email already exists!" });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPasswd = await bcrypt.hash(req.body.password, salt);

    const user = new USER({
        name: req.body.name,
        email: req.body.email,
        password: hashedPasswd
    })

    try {
        const saved = await user.save();
        res
            .status(200)
            .send({ msg: 'SUCCESS'})
        
    } catch (error) {
        res.json({ msg: error});
    }
    
})

module.exports = router;