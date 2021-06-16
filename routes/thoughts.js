const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('hello from thoughts')
});

/*
router.post('/thoughts', (req,res) => {
    let thought = new Thought({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        thought: req.body.thought
    });

    Thought.create(thought).then(s => {
        res.send('new thought created')
    })
})
*/


const thoughtsRouter = module.exports = router;