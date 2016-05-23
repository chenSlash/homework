define(['js/lib/jquery-2.2.0.min.js', 'js/lib/jquery.transit.js'], function(){

//标签切换内容的所有js


	//recommmend部分的标签切换js
	var startList=$('.start-list[node-type="recommend-start-list"]');
	var eventTab=$('li[node-type="recommend-move-event"]');
	var moveList=$('.move-list[node-type="recommend-move-list"]');
	var moveTab=$('li[node-type="recommend-tab-item"]');
	var tabContent=$('.tab-content[node-type="recommend-tab-content"]');
	eventTab.each(function(index){
		$(this).on('mouseenter', function(){
			startList.css({display: 'none'});
			moveList.css({display: 'block'});
			moveTab.eq(index).addClass("active").siblings().removeClass("active");
			tabContent.css({display: "none"});
			tabContent.eq(index).css({display: 'block'});
		})
	});
	moveTab.each(function(index){
		$(this).on('mouseenter', function(){
			$(this).addClass("active").siblings().removeClass("active");
			tabContent.css({display: "none"});
			tabContent.eq(index).css({display: 'block'});
		});
	});
	moveList.on('mouseleave', function(){
		startList.css({display: 'block'});
		moveList.css({display: 'none'});
	})

	//livelesson部分的标签切换js
	$("#livelesson .livebox-week-day").eq(0).addClass("weekactive");
	$(".livebox-lesson-list").eq(0).addClass("lessonshow");
	$("#livelesson .livebox-week-day").each(function(index){
		$(this).on('mouseenter', function(){
			$(this).addClass("weekactive").siblings().removeClass("weekactive");
			$(".livebox-lesson-list").eq(index).addClass("lessonshow").siblings().removeClass("lessonshow");
		})
	})

	//hot-lesson部分的标签切换js
	var lessonTab=$("#recommendName ul li");
	var lessonList=$("#hot-lessonbox .lesson-list");
	lessonTab.eq(0).addClass('on');
	lessonList.css({display: 'none'});
	lessonList.eq(0).css({display: 'block'});
	lessonTab.each(function(index){
		$(this).on('mouseenter', function(){
			$(this).addClass('on').siblings().removeClass('on');
			lessonList.css({display: 'none'});
			lessonList.eq(index).css({display: 'block'});
		});
	});
	//每个课程块鼠标经过动画
	$("#hot-lessonbox .lesson-list ul li").hover(function(){
		$(this).find('.lessonplay').stop().transition({opacity: 1},400);
		$(this).find('.lesson-infor').stop().transition({height: '175px'},400, 'out');
		$(this).find('.lesson-infor p').css('display', 'block').stop().transition({
			height: '52px',
			opacity: 1,
			marginBottom: '10px'
		},400);
		$(this).find('.lesson-infor .zhongji').css('display', 'block');
		$(this).find('.lesson-infor .learn-number').css('display', 'block');
		$(this).find('.lesson-infor .lessonicon-box').css('bottom', '-2px');
	}, function(){
		$(this).find('.lessonplay').stop().transition({opacity: 0},400);
		$(this).find('.lesson-infor').stop().transition({height: '88px'},400, 'out');
		$(this).find('.lesson-infor p').stop().transition({
			height: '0px',
			opacity: 0,
			marginBottom: 0
		},400, function(){
			$(this).css('display', 'none');
		});
		$(this).find('.lesson-infor .zhongji').css('display', 'none');
		$(this).find('.lesson-infor .learn-number').css('display', 'none');
		$(this).find('.lesson-infor .lessonicon-box').css('bottom', '4px');
	});


});