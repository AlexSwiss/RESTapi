const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema and model
//Schema
const ninjaSchema = new Schema({

    name:{
        type: String,
        required: [true, 'name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

//model
const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;

