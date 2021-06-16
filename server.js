const express = require('express');
const mongoose = require('mongoose');

//model requires
const User = require('./models/user');
const Thought = require('./models/thought');
const user = require('./models/user');

//import routers
const thoughtsRouter = require('./routes/thoughts');
const userRouter = require('./routes/users');

const app = express();
const PORT = 5000;

//uri
const uri = "mongodb+srv://JschwartzDev:JschwartzDev@thoughtful.2cqh7.mongodb.net/Thoughtful?retryWrites=true&w=majority";

//connect to DB and declare db
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

//check for errors on connecting to db
db.on('error', (err) => {
    console.log(err)
})

//once db is open, simply log succesful connection
db.once('open', () => {
    console.log('connected to db successfully')
})

//middleware
app.use(express.json());

//routes middleware
app.use('/thoughts', thoughtsRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})