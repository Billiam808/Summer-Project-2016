var express = require('express');
var router = express.Router();
var request = require('request');
var url = '	http://billadona-test.apigee.net/summer2016';
var proxy_city1;    // will hold the data from the parsed body
var proxy_state_name1;  // holds the state name that came from the parsed body
var proxy_zip_code1;    // holds zip code that came from the parsed body from the proxy

var proxy_city2;    // will hold the data from the parsed body
var proxy_state_name2;  // holds the state name that came from the parsed body
var proxy_zip_code2;    // holds zip code that came from the parsed body from the proxy

var obj;    // will hold the parsed body

var index = 'index';

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
        proxy_state_name1 = obj.entities[0].cities[0].state_name;
        proxy_zip_code1 = obj.entities[0].cities[0].zip_code;

        proxy_city2 = obj.entities[0].cities[1].city_name;
        proxy_state_name2 = obj.entities[0].cities[1].state_name;
        proxy_zip_code2 = obj.entities[0].cities[1].zip_code;
    });

    // specifies which jade file will be used to render and json data will be sent to the jade file
    // so the jade file can show data
  res.render('jade_index',
      {
          jade_title: "Bill I Am Weather Report",

          jade_city1: proxy_city1,
          jade_state_name1: proxy_state_name1,
          jade_zip_code1: proxy_zip_code1,

          jade_city2: proxy_city2,
          jade_state_name2: proxy_state_name2,
          jade_zip_code2: proxy_zip_code2,

          currHead: index
      }
  );
});

module.exports = router;
