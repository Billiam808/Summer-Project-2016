var express = require('express');
var router = express.Router();
var request = require('request');
var parseString = require('xml2js').parseString;
var url = '	http://billadona-test.apigee.net/summer2016';
var proxy_city1;
var proxy_state_name1;
var proxy_zip_code1;
var obj;

/* GET home page. */
router.get('/', function(req, res, next)
{
    // sending a request to the proxy
    // proxy will send a json data containing details about cities from backend database
    request(url, function(err, response, body){
        // error checking; exits request function when error occurred
        if(err)
        {
            console.log('error occurred');
            return;
        }
        // parse the JSON so we can access the data and save it to var obj
        obj = JSON.parse(body);
        proxy_city1 = obj.entities[0].cities[0].city_name;
    });

    // specifies which jade file will be used to render and json data will be sent to the jade file
    // so the jade file can show data
  res.render('jade_index',
      {
          jade_title: "Bill I Am Weather Report",
          jade_city1: proxy_city1
      }
  );
});

module.exports = router;
