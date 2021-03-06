const express = require('express');
const mongoose = require('mongoose');

//model import
const User = require('../models/user');

//create router
const router = express.Router();

router.get('/', (req,res) => {
    User.find({}, (err,users) => {
        if(users){
            res.status(200).send(users);
        } else {
            res.status(500).send('Ran into an error while getting users');
        }
    })
});

router.post('/', (req,res) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: req.body.password
    });

    if(user.username && user.password){
        User.create(user).then(s => {
            console.log('user created succesfully')
        });
    } else {
        res.send('no username or password given')
    }
    
})

const userRouter = module.exports = router;

