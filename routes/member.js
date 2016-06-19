var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('member',
      {
        main_title: "Bill I Am's Supermarket"
      });
});

module.exports = router;
