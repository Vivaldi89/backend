const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo')
const authRouter = require('./routes/auth')

const app = express();
app.use(express.json());
app.use('/auth', authRouter)
app.use('/', todoRouter)

const PORT = 8080
const dbURI = 'mongodb://localhost:27017/todo'


mongoose.connect(dbURI)
    .then(() => app.listen(PORT))


