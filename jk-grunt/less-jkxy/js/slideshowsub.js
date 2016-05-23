define(['js/lib/jquery-2.2.0.min.js', 'js/lib/jquery.transit.js'], function(){

	// 合作院校
	function university(){
	var a=$("#university .swiper-car-box");
	var b=$("#university .swiper-wrapper");
	var c=7;
	var d=$("#banner-left2");
	var e=$("#banner-right2");
	slide(a,b,c,d,e);
	};
    university();
    //合作企业
    function company(){
	var a=$("#enterprise .strategy");
	var b=$("#enterprise .swiper-wrapper");
	var c=6;
	var d=$("#banner-left3");
	var e=$("#banner-right3");
	slide(a,b,c,d,e);
	};
    company();
    // 媒体报道
    function media(){
	var a=$(".strategy2");
	var b=$(".strategy2 .swiper-wrapper");
	var c=6;
	var d=$("#banner-left4");
	var e=$("#banner-right4");
	slide(a,b,c,d,e);
	};
    media();
    // 点击滑动函数
	function slide(a,b,c,d,e){
	var showBox=a;
	var showList=b;
	var showImgNum=c;
	var arrowLeft=d;
	var arrowRight=e;
	var showItemW=showBox.width()/showImgNum;
	for(var j=0;j<showImgNum;j++){
		showList.children().eq(j).clone().appendTo(showList);
	}
	var imgNum=showList.children().length;
	showList.css('width', showItemW*imgNum+'px');
	showList.children().css('width', showItemW+'px');
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
	showBox.mouseenter(function(){
		arrowLeft.css({display: 'block'}).stop().animate({
			opacity: 1
		});
		arrowRight.css({display: 'block'}).stop().animate({
			opacity: 1
		});
	});
	showBox.mouseleave(function(){
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
	});
    };

});