const mongoose = require('mongoose');
const { Schema } = mongoose;

const Tech = new Schema({
    name: String,
    num: Number
});

module.exports = mongoose.model('Tech', Tech);