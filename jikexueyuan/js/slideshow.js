define(['js/lib/jquery-2.2.0.min.js', 'js/lib/jquery.transit.js'], function(){

	//热门行业课程
	var arrowLeft=$("#work-left");
	var arrowRight=$("#work-right");
	var showImgNum=3;
	var showBox=$(".focuswork-wrap");
	var showList=$(".lesson-list.swiper-wrapper");
	var showItemW=showList.children().first().width();
	for(var j=0;j<showImgNum;j++){
		showList.children().eq(j).clone().appendTo(showList);
	}
	var imgNum=showList.children().length;
	var i=0;
	arrowLeft.bind('click', function(){
		i++;
		move(showImgNum,imgNum,showList,showItemW);
	});
	arrowRight.bind('click', function(){
		i--;
		move(showImgNum,imgNum,showList,showItemW);
	});
	function move(vn,sn,sl,iw){	
		//从第一张向左切换到最后一张
		if (i==1) {
			sl.css({
				transform: "translate3d("+(vn-sn)*showItemW+"px, 0px, 0px)"
			})
			i=vn+1-sn;
		}
		//从最后一张向右切换到第一张
		if (i==vn-1-sn) {
			sl.css({
				transform: "translate3d(0px, 0px, 0px)"
			})
			i=-1;
		}
		//这里的transition()方法是因为引入了jquery.transit.js动画插件,否则不能用。
		sl.stop().transition({
			transform: "translate3d("+i*iw+"px, 0px, 0px)"
		},300)
	}

	//左右切换按钮的显示隐藏
	showBox.hover(function(){
		arrowLeft.css({display: 'block'}).stop().animate({
			opacity: 1
		});
		arrowRight.css({display: 'block'}).stop().animate({
			opacity: 1
		});
	}, function(){
		arrowLeft.stop().animate({
			opacity: 0
		}, function(){
			$(this).css({display: 'none'})
		})
		arrowRight.stop().animate({
			opacity: 0
		}, function(){
			$(this).css({display: 'none'})
		})
	})
	//鼠标进入左右切换按钮加深背景
	arrowLeft.hover(function(){
		$(this).removeClass("arrow-left").addClass("arrow-left2");
	}, function(){
		$(this).removeClass("arrow-left2").addClass("arrow-left");
	})
	arrowRight.hover(function(){
		$(this).removeClass("arrow-right").addClass("arrow-right2");
	}, function(){
		$(this).removeClass("arrow-right2").addClass("arrow-right");
	});

});