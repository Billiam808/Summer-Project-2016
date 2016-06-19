var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        main_title: "Bill I Am's Supermarket"
      }
  );
});

module.exports = router;
