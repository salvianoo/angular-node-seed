var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index');
});

router.get('/vehicles', function(req, res){
  res.render('vehicles');
});

router.post('/vehicles', function(req, res){
  res.json(req.body);
});

module.exports = router;
