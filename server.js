const express = require('express');
const mongoose = require('mongoose');
const auth =require('./routes/auth');
const todo = require('./routes/todo');


const app = express();
app.use(express.json());


app.use('/auth', auth);
app.use('/api', todo);


const PORT = 8080;
const dbURI = 'mongodb://localhost:27017/todo';


mongoose.connect(dbURI)
    .then(() => app.listen(PORT));


