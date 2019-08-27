const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const UserSchema = new Schema({
name: {
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
},
password:{
    type: String,
    required: true,
},
date: {
    type: Date,
    default: Date.now
},
level: {
    type: Number,
    default: 1,
},
experience:{
    type: Number,
    default: 0,
},
games:{
    type: Array,
    default: [],
},
});

module.exports = User = mongoose.model('user', UserSchema);