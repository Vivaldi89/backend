const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo')
const authRouter = require('./routes/auth')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json());
app.use('/auth', authRouter)
app.use('/', todoRouter)

const PORT = 8080
const dbURI = 'mongodb://localhost:27017/todo'


mongoose.connect(dbURI)
    .then(() => app.listen(PORT))


