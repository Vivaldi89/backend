const Joi = require('@hapi/joi');


const loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(4).max(250)
})

module.exports = loginSchema;