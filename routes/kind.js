var express = require('express');
var router = express.Router();

var viewPath = 'partials/kind/';

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

module.exports = router;