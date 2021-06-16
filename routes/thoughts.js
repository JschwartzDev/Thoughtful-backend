const express = require('express');
const mongoose = require('mongoose');

//import model
const Thought = require('../models/thought');

//create router
const router = express.Router();

router.get('/', (req,res) => {
    Thought.find({}, (err, thoughts) => {
        if(thoughts){
            res.status(200).send(thoughts);
        } else {
            res.status(500).send('ran into an error while getting thoughts')
        } 
    })
});

router.post('/', (req,res) => {
    let thought = new Thought({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        thought: req.body.thought
    });

    if(thought.thought){
        Thought.create(thought).then(s => {
        res.send('new thought created')
        })
    } else {
        res.send('no thought sent or created')
    }
    
})

const thoughtsRouter = module.exports = router;