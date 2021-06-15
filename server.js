const express = require('express');
const mongoose = require('mongoose');

//model requires
const User = require('./models/user');
const Thought = require('./models/thought');
const user = require('./models/user');

const app = express();
const PORT = 5000;

//uri
const uri = "mongodb+srv://JschwartzDev:JschwartzDev@thoughtful.2cqh7.mongodb.net/Thoughtful?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('connected to db successfully')
})

//middleware
app.use(express.json());

app.get('/', (req,res) => {
    User.find({}, (err, users) => {
        res.send(users)
    })
})

app.post('/', (req,res) => {
    let user = new User({
        _id: new mongoose.Types.ObjectId,
        username: req.body.username,
        password: req.body.password
    });
    User.create(user).then(s => {
        res.send('new user created')
    });
    
})

app.post('/thoughts', (req,res) => {
    let thought = new Thought({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        thought: req.body.thought
    });

    Thought.create(thought).then(s => {
        res.send('new thought created')
    })
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})