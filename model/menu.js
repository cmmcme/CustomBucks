var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    title: String,
});

module.exports = mongoose.model('Menu', menuSchema);