var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('jade_index',
      {
          jade_title: "Bill I Am Weather Report"
      }
  );
});

module.exports = router;
