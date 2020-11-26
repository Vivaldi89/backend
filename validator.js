const Joi = require('@hapi/joi')

const registerSchema = Joi.object({
    name: Joi.string().max(250).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(4).max(250)
})


module.exports = registerSchema