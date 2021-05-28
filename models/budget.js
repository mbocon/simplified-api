const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    user: {
        type: String
    },
    type: {
        type: String
    },
    value: {
        type: Number
    },
    name: {
        type: String
    },
    date: {
        type: String
    }
})

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = { Budget }