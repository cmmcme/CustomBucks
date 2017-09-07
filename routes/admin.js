var express = require('express');
var router = express.Router();
var Kind = require('../model/kind');

var viewPath = 'partials/admin/';
var kindViewPath = 'partials/admin/kind/';

router.get('/kind/new', function(req, res, next) {
   res.render(kindViewPath + 'new');
});

router.post('/kind/new', function(req, res, next) {
    var kind = new Kind();
    kind.title = req.body.title;
    kind.save(function (err) {
       if(err) {
           console.error(err);
           res.redirect('/kind');
       }
        res.redirect('/kind');
    });
});

router.get('/kind', function(res, res, next) {
    Kind.find()
        .then(function (kinds) {
            res.render(kindViewPath + 'list', {kinds: kinds});
        });
});

router.get('/kind/:kind', function(req, res, next) {
    let title = req.params.kind;
    Kind.findOne({title: title})
        .then(function (kind) {
            console.log(kind);
            res.render(kindViewPath + 'view', {title: kind.title});
        });
});

router.get('/menu/new', function(req, res, next) {
    res.render(viewPath + 'new');
});

router.post('/menu/new', function(req, res, next) {
    res.redirect('/menu/new');
});

module.exports = router;
