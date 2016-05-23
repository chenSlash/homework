-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 04 月 01 日 09:47
-- 服务器版本: 5.5.47
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `phplesson`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `displayBox` text NOT NULL,
  `displayType` int(11) NOT NULL,
  `displayUrl` text NOT NULL,
  `newsType` text NOT NULL,
  `newsId` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  `newsTitle` varchar(100) NOT NULL,
  `newsImg1` text NOT NULL,
  `newsImg2` text NOT NULL,
  `newsImg3` text NOT NULL,
  `newsContent` text NOT NULL,
  `tip` text NOT NULL,
  PRIMARY KEY (`newsId`),
  KEY `newsTitle` (`newsTitle`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='新闻表' AUTO_INCREMENT=141 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`displayBox`, `displayType`, `displayUrl`, `newsType`, `newsId`, `newsTitle`, `newsImg1`, `newsImg2`, `newsImg3`, `newsContent`, `tip`) VALUES
('推荐', 2, 'http://news.sina.cn/news_zt/xjpfwjkbfmcxhaqfh2016?wm=3200_0001', 'hot', 1, '从习近平谈“十三五”看中国经济发展三大密码', 'listImg1.jpg', '', '', '以供给侧结构性改革为主线，扩大有效供给，满足有效需求。', '置顶'),
('推荐', 1, 'http://3g.k.sohu.com/t/n124727540', 'hot', 2, '金正恩胞妹与大学教授完婚 曾传嫁崔龙海次子', '145913339880791873_620_1000.JPEG', '', '', '朝鲜最高领导人金正恩的胞妹、劳动党中央委员会副部长金与正已与一名普通家庭出身的大学教授完婚。', '热点'),
('推荐', 1, 'http://3g.k.sohu.com/t/n124727540', 'recommend', 3, '觥筹交错的背后，两岁的乐视体育已经完成了B轮融资。 ', '20160328082989868986.jpg', '', '', '2016中国IT领袖峰会上，乐视控股创始人、董事长兼CEO贾跃亭正式公布了乐视体育完成B轮融资...', '猜你喜欢'),
('推荐', 1, 'http://sinanews.sina.cn/sharenews.shtml?id=fxqswxn6477655-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', 'info', 5, '谷歌Facebook空中互联网计划遇阻：领空不让飞', 'album1.jpg', 'album2.jpg', 'album3.jpg', '', ''),
('推荐', 1, '', 'info', 6, '跨境电商税改有利市场公平', '10111459395436.jpg', '', '', '这一新政策可促进跨境电商市场公平竞争，并降低跨境电商发展的政策不确定性，有利于跨境电商行业的长...', ''),
('百家', 1, 'http://wangyijian.baijia.baidu.com/article/382023', 'recommend', 7, '今年愚人节百度会展示什么黑科技？', 'b8014a90f603738d6b050499b41bb051f819ec3a.jpg', '', '', '在愚人节玩笑后不久，14年的9月3日，百度世界大会现场，百度筷搜正式亮相，宣布进入量产。', '猜你喜欢'),
('百家', 1, 'http://news.163.com/16/0328/17/BJ8TVIK100014AED.html', 'hot', 8, '广东两名中学生遭霰弹枪击伤', 'CF57158509A9C86CCA0A52AB29B8AD94.jpg', '', '', '梅州公安通报证实，通过进一步的调查，案情出现了大逆转，确定枪击为受害方同伙误伤，其中两名伤者均...', '网易要闻'),
('百家', 1, 'http://view.inews.qq.com/a/NEW2016032805112808', 'hot', 9, '省委书记爱读研 在职硕士7成', 'album4.jpg', 'album5.jpg', 'album6.jpg', '', '腾讯要闻'),
('百家', 1, 'http://m.pedaily.cn/detail.asp?id=395034', 'info', 10, '冯鑫现场演唱《野子》PK贾跃亭，将成立暴风影业', '20160328164740904090.jpg', '', '', '称“要把这首歌拿回来”。', ''),
('百家', 1, 'http://synchuman.baijia.baidu.com/article/383511', 'text', 11, '史上最赞的十本硬科幻小说，你看过几本？', 'album7.jpg', 'album8.jpg', 'album9.jpg', '', '小说'),
('本地', 1, 'http://sports.163.com/16/0329/11/BJAR7AR400052UUC.html', 'text', 12, '粤媒:新疆or北京韩胖需谨慎', '', '', '', 'CBA联赛的自由球员转会市场并不完善，每一年赛季结束，球员去留问题都会绯闻多多。', 'CBA'),
('本地', 1, 'http://news.sina.com.cn/c/2016-03-29/doc-ifxqssxu8514929.shtml', 'text', 13, '荷兰驻华大使：中国经济增速放缓是成熟标志', '-019-fxqtiwa5247918.jpg', '', '', '继他1989年第一次来中国访问，这是他时隔27年之后再度踏上这片土地。', '荷兰'),
('本地', 1, 'http://news.10jqka.com.cn/20160329/c588852202.shtml', 'text', 14, '新加坡专家为北京“城市病”支招：分成六个城市', '', '', '', '对北京的“城市病”作出诊断，北京最大的问题是，它是一个超大城市，没有城市细胞的观念。', '新加坡'),
('本地', 1, 'http://news.xinhuanet.com/house/bj/2016-03-29/c_1118475101.htm', 'text', 15, '一线城市限购升级 东坝豪宅去化速度惊人 ', '1118475101_14592262059541n.jpg', '', '', '房价持续暴涨，沪深接连收紧楼市政策……过去的这个周末，全国房地产市场并不平静。', '限购'),
('本地', 1, 'http://edu.ce.cn/xw/201603/29/t20160329_3653218.shtml', '', 16, '北京外国语大学招生改革：高考成绩仅占70%', '', '', '', '北外正式发布了这一新的招生改革方案，这意味着今年北外有15个专业录取本科生时不再将高考成绩作为...', ''),
('娱乐', 1, 'http://news.ifensi.com/article-14-3809907-1.html', 'text', 17, '玖月奇迹等好友助阵雷佳歌剧《白毛女》', '20160329112406802.jpg', '', '', '徐子崴隆重出席盛赞好友雷佳饰演的“喜儿”成功接班。', '玖月奇迹'),
('娱乐', 1, 'http://economy.southcn.com/e/2016-03/29/content_144972881.htm', 'text', 18, '张庭被误当乞丐 揭秘当红明星成名前的辛酸经历 ', 'album13.jpg', 'album14.jpg', 'album15.jpg', '', '岳云鹏'),
('娱乐', 1, 'http://m.cankaoxiaoxi.com/baidunews-eco/ent/20160329/1112860.shtml', '', 19, 'DAY6后日出演《M COUNT DOWN》 出道后首登音乐节目', 'W020160329413279935979.jpg', '', '', 'DAY6此次的回归计划以音乐放送节目为中心展开活动，更加亲近地走近大家。', ''),
('娱乐', 1, 'http://m.cankaoxiaoxi.com/baidunews-eco/ent/20160328/1111878.shtml', 'text', 20, '鬼吹灯开机 原作党喜大普奔', '', '', '', '在现象级热剧《伪装者》中，1米83的靳东饰演的大哥明楼用超过2米83的强大气场和精湛演技实力圈粉。', '鬼吹灯'),
('娱乐', 1, 'http://www.dowei.com/mingxing/rihan/201603/74602.html', '', 21, '车艺莲朱相昱公开恋情 因《华丽的诱惑》而结缘', '1459223131255058.jpg', '', '', '韩国艺人朱相昱与车艺莲昨日被爆料在一起拍摄电视剧《华丽的诱惑》时发展成为了恋人，朱相昱的经纪公...', ''),
('社会', 1, 'http://news.sohu.com/20160329/n442685778.shtml', '', 22, '民警写古诗辞职信走红网络 称要追求想做的事(图)', 'Img442685780.jpg', '', '', '民警写古诗辞职信：追求想做的事、磨老婆半年。', ''),
('社会', 2, 'http://huaxi.media.baidu.com/article/16371395164226433009', 'text', 23, '注意！成都多个地铁站现偷包贼 小偷从安检传送带顺走包', '20160329011135575.jpg', '', '', '成都地铁华西坝、人民公园、人民北路、省体育馆等地铁站连续发生6起安检机拎包窃案，涉案金额高达4...', '四川地区'),
('社会', 3, 'http://m.china.com.cn/baidu/doc_1_1_1114364.html', 'text', 24, '赣州民间救援队下河寻找救人教师王来福踪迹 暂无结果（图）', 'album16.jpg', 'album17.jpg', 'album118.jpg', '', '教师'),
('社会', 1, 'http://i.ifeng.com/news?aid=107700282', 'recommend', 25, '未拆封的油桶里泡着只老鼠，他开口就要20万赔偿', '4ac668c0ed8d9dea1ec3_size68_w550_h194.jpg', '', '', '“油里有老鼠……”虽说超市工作人员也见多了各种稀奇古怪的投诉，可在未拆封的油桶里竟然会有一只老...', '凤凰要闻'),
('社会', 1, 'http://www.jsw.com.cn/site3/jjwb/html/2016-03/29/content_3035677.htm', '', 26, '周围群众徒手抬车救人', '80471459205618197.jpg', '', '', '由于抢救及时，受伤群众均无生命危险。', ''),
('图片', 1, 'http://wengengmiao.baijia.baidu.com/article/382838', 'text', 27, 'FBI宣布成功破解iPhone 苹果公司尴尬了', 'album19.jpg', 'album20.jpg', 'album21.jpg', '', '苹果公司'),
('图片', 1, 'http://dtcaijing.baijia.baidu.com/article/382505', 'text', 28, '跟地球上最聪明的科技投资人，感受资本的风在往哪吹', 'album22.jpg', 'album23.jpg', 'album24.jpg', '', '投资人'),
('图片', 1, 'http://geekview.baijia.baidu.com/article/381157', 'text', 29, '一个能让「盖茨」和「马斯克」都羡慕嫉妒恨的人', 'album25.jpg', 'album26.jpg', 'album27.jpg', '', 'nintendo'),
('图片', 1, 'http://qijunjie.baijia.baidu.com/article/380817', '', 30, '用一招解决高库存和高房价的火寒之毒', 'album28.jpg', 'album29.jpg', 'album30.jpg', '', ''),
('图片', 1, 'http://aadongman.baijia.baidu.com/article/380816', 'text', 31, 'AA国际动漫网罗神级Cosplay锦集', 'album31.jpg', 'album32.jpg', 'album33.jpg', '', '动漫'),
('推荐', 1, 'http://news.ifeng.com/a/20160331/48287351_0.shtml', '', 118, '互联网+时代的新经济 打造企业生态圈', '', '', '', '第七届易观电商峰会今天在北京举行，互联网大佬悉数登场，探讨在资本寒冬中，企业发展的新趋势。', ''),
('推荐', 1, 'http://36kr.com/p/5045338.html', '', 119, '人工智能：这么近，那么远', 'VM7A3165.jpg', '', '', '圆桌嘉宾：RokidCEODan；SenseTime联合创始人、徐冰；浙江大学CAD实验室、教...', ''),
('推荐', 1, 'http://www.leiphone.com/news/201603/uU028ozYH9tisfpu.html', 'hot', 120, '微软CEO纳德拉：我们下注智能对话机器人 买定离手', '56fc9d63a0a80.jpg', '', '', '今天他宣布了新兴的平台，并希望其能实现微软的野心：对话平台，也称为机器人程序。', '网易要闻'),
('百家', 1, 'http://qiuyuanjuner.baijia.baidu.com/article/386917', 'text', 121, '疾行的京东金融，命门在哪里？', 'cefc1e178a82b9019e83de8d748da9773912ef66.jpg', '', '', '疾行的京东金融，面临的第二个命门是如何协调好利益相关者及相关的“政策监管风险”。', 'B2C'),
('百家', 1, 'http://yanjuyang.baijia.baidu.com/article/386696', 'text', 122, '阿里棋局下如何估值平台化转型的银泰商业？', '9922720e0cf3d7ca0540b6cbf51fbe096a63a9dd.jpg', '', '', '获取更多零售电商原创文章可微信搜索公众号“商业观察家”。', 'BATM'),
('百家', 1, 'http://mediachanged.baijia.baidu.com/article/374514', '', 123, '已经来临的全球“宫斗”年代', 'b812c8fcc3cec3fd506d8ac0d188d43f87942737.jpg', '', '', '新世纪以来，以国家文化软实力为表征的意识形态竞争，已经成为全球文化产业竞争的基本模式。', ''),
('本地', 1, 'http://m.dzwww.com/baidunews-eco/news/14082726.html', 'text', 124, '践行精准扶贫：中国孕婴童行业慈善助学活动将举行', '', '', '', '“中国孕婴童行业慈善助学活动”是援助孤儿成长教育、成才教育的公益活动，其重头戏为“暖童计划”。', '慈善'),
('本地', 1, 'http://www.bbtnews.com.cn/2016/0331/143906.shtml', 'text', 125, '向大众市场突围的茶叶街', '1459429619387.png', '', '', '作为曾享誉全国的“茶叶一条街”，目前，马连道茶叶市场正经历震荡期，向大众市场转型升级。', '大众'),
('本地', 1, 'http://www.thepaper.cn/baidu.jsp?contid=1451016', '', 126, '北京市委原副书记李志坚逝世，曾任国家体育总局党组书记', '441.jpg', '', '', '中国共产党的优秀党员、忠诚的共产主义战士，中共第十五届、第十六届中央候补委员，国家体育总局原党...', ''),
('图片', 1, 'http://auto.sohu.com/20160331/n443018875.shtml', '', 127, '未来的汽车是汽车，Or只是个大硬件？', 'ba09affa0ee84ba0a65c6bbc32420fc6_th.jpg', '2df018fc3eec4f64bec3aabc20b868df_th.jpg', 'ba4acdb3974b42528cbd3d2202044753_th.jpg', '', ''),
('图片', 1, 'http://3g.k.sohu.com/t/n125466487', 'hot', 128, '日上将担忧中国军力增强 称日本不会建造航母', '145941144611529397_720_1000.JPEG', '145940896986526556_720_1000.JPEG', '145940897020701889_720_1000.JPEG', '', '搜狐头条'),
('图片', 1, 'http://c.mofang.com/guonei/122-613439-1.html', 'info', 130, 'Cocos创始人王哲：VR有风险入市请谨慎', 'fghdfghmnyui.jpg', 'wepirouqw.jpg', 'zpvzxoc.jpg', '', '猜你喜欢'),
('娱乐', 1, 'http://ent.sina.cn/newbd/j_baidu.d.html?docId=fxqxcnr5052640&wm=3170_9999', '', 131, '《不朽的时光》发第三款预告', '4ht1-fxqxcnz8926472.jpg', '', '', '这款预告片以四季为主题，揭开了这场“青春盛宴”的序曲，加之入围电影节的喜讯传来，本片的前景似乎...', ''),
('娱乐', 1, 'http://ent.163.com/16/0331/13/BJG74P2H00031H2L.html', '', 132, '炮哥焦俊艳自恋转粉 再吊威亚技术进步', '20160331133836e9e2b.jpg', '', '', '还坚守在剧组的炮哥焦俊艳就在某社交平台上表示，今天威亚吊的不错，对自己路人转粉。', ''),
('娱乐', 1, 'http://group.mtime.com/filmov/discussion/3797336', '', 133, '缺席的政府 发展中国家之痛——《撤侨》观后感', '213404.48319090.jpg', '213608.18583100.jpg', '213633.45202677.jpg', '', ''),
('社会', 1, 'http://www.chinanews.com/sh/2016/03-31/7819200.shtml', '', 134, '如何兼顾事业与家庭？二孩父亲的两难境地 ', 'U242P4T8D7819200F107DT20160331154951.jpg', '', '', '心理专家认为，母亲着重于孩子的生活照料，而孩子的教育和陪伴更多依靠父亲。', ''),
('社会', 1, 'http://world.chinadaily.com.cn/2016-03/31/content_24198116.htm', 'text', 135, '刘延东会见以色列前总统佩雷斯', '180373d28730186682d53a.jpg', '', '', '阁下是杰出的战略家、政治家，是中国人民的老朋友，长期以来为推动中以关系发展作出了重要贡献。', '刘延东'),
('社会', 1, 'http://hb.qq.com/a/20160331/022543.htm', 'text', 136, '妙龄女独自爬山遇害 被发现时尸体半裸疑遭性侵', '132999748.jpg', '', '', '天马刑侦大队民警在光明路的一家按摩店内，将男子张某抓获。', '爬山');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
