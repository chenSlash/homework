var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.models.News.find({displayBox: '推荐'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

router.get('/tuijian', function(req, res, next) {
  req.models.News.find({displayBox: '推荐'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

router.get('/baijia', function(req, res, next) {
  req.models.News.find({displayBox: '百家'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

router.get('/bendi', function(req, res, next) {
  req.models.News.find({displayBox: '本地'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

router.get('/tupian', function(req, res, next) {
  req.models.News.find({displayBox: '图片'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

router.get('/yule', function(req, res, next) {
  req.models.News.find({displayBox: '娱乐'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

router.get('/shehui', function(req, res, next) {
  req.models.News.find({displayBox: '社会'}).limit(4).offset(0).run(function(err,news){
    if(err){
      console.log(err);
    };
    res.render('index',{news});
  });
});

module.exports = router;
