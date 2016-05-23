define(['js/lib/jquery-2.2.0.min.js', 'js/lib/jquery.transit.js'], function(){


	//职业路径图，知识体系图，精品系列课程，Wiki标题后问号鼠标经过
	$(".index-public-title .way").hover(function(){
		$(this).siblings(".way-infor").animate({
			marginLeft: 0,
			opacity: 1
		}, 500);
	}, function(){
		$(this).siblings(".way-infor").stop().animate({
			marginLeft: '-5px',
			opacity: 0
		}, 500);
	});
	//职业路径图鼠标经过边框变色
	var learnCard=$("#learn-way .learn-card a");
	learnCard.each(function(index){
		$(this).hover(function(){
			$(this).css('border-color', '#35b558');
			if(index<4){
				learnCard.eq(index+1).css('border-left-color', '#35b558');
			}else if(index>4){
				learnCard.eq(index+1).css('border-left-color', '#35b558');
				learnCard.eq(index-5).css('border-bottom-color', '#35b558');
			}
			
		}, function(){
			$(this).css('border-color', '#e4e4e4');
			if(index<4){
				learnCard.eq(index+1).css('border-left-color', '#e4e4e4');
			}else if(index>4){
				learnCard.eq(index+1).css('border-left-color', '#e4e4e4');
				learnCard.eq(index-5).css('border-bottom-color', '#e4e4e4');
			}
		});
	});
	//Wiki鼠标经过边框变色
	var oneWiki=$(".wikibox .one-wiki");
	$(".wikibox .one-wiki").each(function(index){
		$(this).hover(function(){
			$(this).css('border-color', '#35b558');
			if (index>0) {
				oneWiki.eq(index-1).css('border-right-color', '#35b558');
			};
		}, function(){
			$(this).css('border-color', '#e4e4e4');
			if (index>0) {
				oneWiki.eq(index-1).css('border-right-color', '#e4e4e4');
			};
		});
	});

});