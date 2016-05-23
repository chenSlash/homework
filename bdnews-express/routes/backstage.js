var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var tag = req.query.name;
    var handle = req.query.handle;
    var $newsId = req.query.newsId;
    var $displayBox = req.query.displayBox;
    var $displayType = req.query.displayType;
    var $displayUrl = req.query.displayUrl;  
    var $newsType = req.query.newsType;
    var $newsTitle = req.query.newsTitle;
    var $newsImg1 = req.query.newsImg1;
    var $newsImg2 = req.query.newsImg2;
    var $newsImg3 = req.query.newsImg3;
    var $newsContent = req.query.newsContent;
    var $tip = req.query.tip;
    //这里我想引入tag,实现点击分类查找相应数据显示出来，像这样：
    req.models.News.find({displayBox: tag}, function(err, news) {
        if (err) {
            console.log(err);
        };
        console.log(news);
        res.render('backstage', {news});
    });
    //但结果并没有显示出来，难道查找find{}里不能用变量表示？？为什么？？
    

    // req.models.News.find({displayBox: '推荐'}, function(err, news) {
    //     if (err) {
    //         console.log(err);
    //     };
    //     console.log(news);
    //     res.render('backstage', {news});
    // });
    //发布新闻
    if (handle=='publish') {
      req.models.News.create([{
        displayBox: $displayBox,
        displayType: $displayType,
        displayUrl: $displayUrl,
        newsType: $newsType,
        newsTitle: $newsTitle,
        newsImg1: $newsImg1,
        newsImg2: $newsImg2,
        newsImg3: $newsImg3,
        newsContent: $newsContent,
        tip: $tip
      }], function(err, items){
        if (err) {
            console.log(err);
        };
      });
      res.send('发布成功');
    };
    //删除新闻
    if (handle=='del') {
      req.models.News.get($newsId, function(err,items){
        items.remove(function(err){
          console.log(err);
        })
      });
      res.send('删除成功');
    };
    //更新新闻
    if (handle=='update') {
      req.models.News.get($newsId, function(err,items){
        items.save({
          displayBox: $displayBox,
          displayType: $displayType,
          displayUrl: $displayUrl,
          newsType: $newsType,
          newsTitle: $newsTitle,
          newsImg1: $newsImg1,
          newsImg2: $newsImg2,
          newsImg3: $newsImg3,
          newsContent: $newsContent,
          tip: $tip
        }, function(err){
          console.log(err);
        })
      })
      res.send('更新成功');
    };
});

module.exports = router;
