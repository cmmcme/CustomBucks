var express = require('express');
var router = express.Router();

var viewPath = 'partials/menu/';

router.get('/view', function(req, res, next) {
    res.render(viewPath + 'view');
});

router.get('/new', function(req, res, next) {
    res.render(viewPath + 'new');
});

module.exports = router;
