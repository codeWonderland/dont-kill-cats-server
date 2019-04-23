var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req);
  console.log('ok');

  res.json({
    "success" : true
  })
});

router.post('/light', function(req, res, next) {
  console.log(req);
  
  res.json({
    "success" : true
  })
});

module.exports = router;
