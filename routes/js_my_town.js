/**
 * Created by BillJoshua on 6/30/2016.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
var url = 'http://wsf.cdyne.com/WeatherWS/Weather.asmx/GetCityForecastByZIP?ZIP=';
var user = { name: 'John' }
var parseString = require('xml2js').parseString;
var city;
var state;

/* GET users listing. */
router.get('/', function(req, res, next)
{
    /* res.render('jade file', json data for jade file) */
    res.render('jade_my_town',
        {
            jade_title: "Bill I Am Weather Report"
        });
});


router.post('/', function (req, res){
    var zip = req.body.zip_code;
    var url_zip = url + zip;
    request(url_zip, function(err, response, body){
        /*error checking: if there is error prompt user*/
        if(err)
        {
            res.send('ERROR');
            return;
        }

        /*get data from weather web service*/
        parseString(body, function(error, result){
            city = result.ForecastReturn.City;
            state =result.ForecastReturn.State;
        });

        res.render('jade_my_town_post',
            {
                jade_title: "Bill I Am Weather Report",
                jade_city: city,
                jade_state: state
            });

    });
});

module.exports = router;
