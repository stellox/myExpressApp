var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team-DevOps Loves to Break Stuff and Cook Beans' });
});

module.exports = router;
