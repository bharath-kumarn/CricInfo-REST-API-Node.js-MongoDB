const mongoose = require('mongoose')


const cric_infoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    runs: {
        type: Number,
    },
    fours: {
        type: Number,
    },
    sixes: {
        type: Number,
        },

})

module.exports = mongoose.model('Cric_info',cric_infoSchema)