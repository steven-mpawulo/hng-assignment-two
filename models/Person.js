const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide person name"],
    }
},  {
    timeStamps: true
});

module.exports = mongoose.model('worker', personSchema);