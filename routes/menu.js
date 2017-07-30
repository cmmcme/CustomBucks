var express = require('express');
var router = express.Router();
// var Menu = require('model/menu');

var viewPath = 'partials/menu/';

router.get('/:kind', function(req, res, next) {
    let kind = req.params.kind;

    // TODO::디비에서 데이터를 가져오는걸로 바꾸어야함
   let menus = [
       {
           title: '아메리카노'
       },
       {
           title: '에스프레소'
       }
   ];
   res.render(viewPath + 'list', {
       kind: kind,
       menus: menus
   });
});

router.get('/:kind/:menu', function(req, res, next) {
    let kind = req.params.kind;
    let menu = req.params.menu;

    res.render(viewPath + 'view', {
        kind: kind,
        menu: menu
    });
});

router.get('/:kind/:menu/new', function(req, res, next) {
   res.render(viewPath + 'new');
});

module.exports = router;
