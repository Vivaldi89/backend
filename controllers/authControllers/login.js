require('dotenv').config();
const USER = require('../../model/userModel');
const loginSchema = require('../../validateLogin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const { error } = await loginSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await USER.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send({ msg: "Incorrect email or password!" });
    }

    const plainPasswd = await bcrypt.compare(req.body.password, user.password);
    if (!plainPasswd) {
        return res.status(400).send({ msg: "Incorrect password!" });
    }

    const token = jwt.sign({_id: user._id}, process.env.SECRET);

    res
        .status(200)
        .header('todo-token', token)
        .send(token)
}