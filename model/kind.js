var mongoose = require('mongoose');

var kindSchema = new mongoose.Schema({
    title: String,
});

module.exports = mongoose.model('Kind', kindSchema);