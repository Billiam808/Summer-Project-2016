/**
 * Created by BillJoshua on 6/15/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('non_member',
        {
            main_title: "Bill I Am's Supermarket"
        });
});

module.exports = router;