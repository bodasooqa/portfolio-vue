const mongoose = require('mongoose');
const { Schema } = mongoose;

const Tech = new Schema({
    name: String
});

module.exports = mongoose.model('Tech', Tech);