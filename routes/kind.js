var express = require('express');
var router = express.Router();
var Kind = require('../model/kind');

var viewPath = 'partials/kind/';

router.get('/', function(req, res, next) {
    let promise = Kind.find();
    promise.then(function(data) {
        res.render(viewPath + 'view', {
            kinds: data
        });
    });
});

module.exports = router;