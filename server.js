const express = require('express');
const mongoose = require('mongoose');
const add = require('./routes/add')
const todos = require('./routes/todos')
const delOne = require('./routes/deleteOne')
const delCompleted = require('./routes/delCompleted')
const checkAll = require('./routes/checkAll')
const uncheckAll = require('./routes/uncheckAll')
const markAsChecked = require('./routes/markAsChecked')
const login = require('./routes/login')
const register = require('./routes/register')

const app = express();
app.use(express.json());

app.use('/auth',
    register,
    login
    );

app.use('/api', 
    add, 
    todos, 
    delOne, 
    delCompleted, 
    checkAll, 
    uncheckAll, 
    markAsChecked
    );


const PORT = 8080;
const dbURI = 'mongodb://localhost:27017/todo';


mongoose.connect(dbURI)
    .then(() => app.listen(PORT));


