define(['js/lib/jquery-2.2.0.min.js'], function(){

	// 自动轮播焦点图
	var i=0;
	//克隆第一张图，并插入序列尾部
	var cloneimg=$(".banner-box .swiper-wrapper>a").eq(0).clone().appendTo($(".banner-box .swiper-wrapper"));
	//获取轮播图片数量（包含了克隆的图片）
	var imgNum=$(".banner-box .swiper-wrapper>a").length;
	//获取每张图的宽度
	var imgW=$(".banner-box .swiper-wrapper>a").first().width();
	//创建等量的焦点按钮
	for(var j=0;j<imgNum-1;j++){
		$("<span>").addClass("swiper-pagination-switch").appendTo(".pagination");
	}
	//为初始第一个按钮添加active类
	$(".swiper-pagination-switch").eq(0).addClass("swiper-active-switch");
	//点击焦点按钮切换
	$(".swiper-pagination-switch").click(function(){
		var index=$(this).index();
		$(".banner-box .swiper-wrapper").stop().animate({
				left: -index*imgW
			},500);
			$(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
	})
	//自动轮播
	var t=setInterval(function(){
		i--;  //自动向右轮播
		move();
	}, 4000);
	//鼠标划入停止自动轮播
	$(".banner-box").hover(function(){
		clearInterval(t);
	}, function(){
		t=setInterval(function(){
			i--;
			move();
		}, 4000);
	})
	$("#banner-left").on('click', function(){
		i++;  //向左切换
		move();
	});
	$("#banner-right").on('click', function(){
		i--;  //向右切换
		move();		
	});
	//定义运动函数
	function move(){	
		//从第一张向左切换到最后一张
		if (i==1) {
			$(".banner-box .swiper-wrapper").css({
				left: (1-imgNum)*imgW
			})
			i=-(imgNum-2);
		}
		//从最后一张向右切换到第一张
		if (i==-(imgNum)) {
			$(".banner-box .swiper-wrapper").css({
				left: 0
			})
			i=-1;
		}
		$(".banner-box .swiper-wrapper").stop().animate({
			left: i*imgW
		},500);
		if (i == -(imgNum - 1)) {
			$(".swiper-pagination-switch").eq(0).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
		}else{
			$(".swiper-pagination-switch").eq(-i).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
		};
	}
	//自动轮播焦点图结束


	//鼠标进入轮播图区域显示左右切换按钮
	$(".banner-box").hover(function(){
		$("#banner-left").css('display','block').stop().animate({
			opacity: 1
		})
		$("#banner-right").css('display','block').stop().animate({
			opacity: 1
		})
	},function(){
		$("#banner-left").stop().animate({
			opacity: 0
		},function(){
			$(this).css('display','none')
		});
		$("#banner-right").stop().animate({
			opacity: 0
		},function(){
			$(this).css('display','none')
		});
	})
	//鼠标经过左右切换按钮加深背景
	$("#banner-left").hover(function(){
		$(this).removeClass("arrow-left").addClass("arrow-left2");
	},function(){
		$(this).removeClass("arrow-left2").addClass("arrow-left");
	});
	$("#banner-right").hover(function(){
		$(this).removeClass("arrow-right").addClass("arrow-right2");
	},function(){
		$(this).removeClass("arrow-right2").addClass("arrow-right");
	});

});