var express = require('express');
var router = express.Router();

var viewPath = 'partials/kinds/';

router.get('/', function(req, res, next) {

    // TODO::디비에서 데이터를 가져오는걸로 바꾸어야함
    let kinds = [
        {
            title: '콜드 브루'
        },
        {
            title: '프라푸치노'
        }
    ];
    res.render(viewPath + 'view', {
        kinds: kinds
    });
});

router.get('/:kind/menu', function(req, res, next) {
    // TODO::디비에서 데이터를 가져오는걸로 바꾸어야함
   let menus = [
       {
           title: '아메리카노'
       },
       {
           title: '에스프레소'
       }
   ];
   res.render(viewPath + 'menu/view', {
       menus: menus
   });
});

module.exports = router;
