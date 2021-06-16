const mongoose = require('mongoose');

const thoughtSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    thought: {
        type: String,
        required: true
    }
});

const Thought = module.exports = mongoose.model('Thought', thoughtSchema);