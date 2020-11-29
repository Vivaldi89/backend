const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = Schema(
    {
    id: { type: Number },
    text: { type: String },
    checked: { type: Boolean },
    user: { type: String }
    }
) 

const TD = mongoose.model('Todo', todoSchema, 'todos');

module.exports = TD;