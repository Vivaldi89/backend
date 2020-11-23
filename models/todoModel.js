const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = Schema(
    {
    id: { type: Number},
    text: { type: String},
    checked: { type: Boolean }
    }
) 

const TD = mongoose.model('Todo', todoSchema);

module.exports = TD