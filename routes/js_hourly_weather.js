/**
 * Created by BillJoshua on 6/30/2016.
 */
/**
 * Created by BillJoshua on 6/15/2016.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next)
{
    /* res.render('jade file', json data for jade file) */
    res.render('jade_hourly_weather',
        {
            jade_title: "Bill I Am Weather Report"
        });
});

module.exports = router;