const mongoose = require('mongoose');

const thoughtSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    thought: String
});

const Thought = module.exports = mongoose.model('Thought', thoughtSchema);