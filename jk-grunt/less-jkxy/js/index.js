define(['js/lib/jquery-2.2.0.min.js', 'js/lib/jquery.transit.js'], function(){

	//搜索框聚焦和失焦时的事件
	$("#web_search_header").focusin(function(){
		$(".search-btn").addClass("search-btn2");
		$(".hot-words").css('display', 'none');
	}).focusout(function(){
		$(".search-btn").removeClass("search-btn2");
		$(".hot-words").css('display', 'inline-block');
	});
	//鼠标经过导航条显示二级菜单
	$("#navbox .nav .navbox").hover(function(){
		$(".navpanel").show();
	},function(){
		$(".navpanel").hide();
	});
	$(".nav .navbox>a[node-type]").each(function(index){
		$(this).hover(function(){
			$(".navpanel .panel-item").eq(index).css('background-color', 'rgb(247,247,247)').children(".angle").css('display', 'block');
		},function(){
			$(".navpanel .panel-item").eq(index).css('background-color', '').children(".angle").css('display', 'none');
		});
	});

	//回到顶部js
	$(window).on('scroll', function(){
		if ($(this).stop().scrollTop()>0) {
			$("#gototop .top").css('display', 'block').stop().animate({opacity: 1}, 500);
		}else{
			$("#gototop .top").stop().animate({opacity: 0}, 500,function(){
				$(this).css('display', 'none');
			});
		};
	});
	$(window).load(function(){
		$(this).trigger('scroll');
	});
	// 点击回到顶部
	$("#gototop .top").on('click', function(){
		var toTop=setInterval(function(){
			var locat=$(window).scrollTop();
			var speed=locat-locat/5;
			$(window).scrollTop(speed);
			if (locat==0) {
				clearInterval(toTop);
			};
		}, 20)
	})

});