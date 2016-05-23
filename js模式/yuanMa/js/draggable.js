$(function() {
	// 这是右侧更多产品的导航jq代码
    $(".s_bri").stop().on("mouseenter", function() {
        $(".s_bdbri").css({
            "opacity": "0",
            "display": "block"
        }).animate({
            opacity: 1
        }, 100)
        $(this).trigger("scroll");
        $(this).trigger("resize");
    })
    $(".s_bdbri").stop().mouseleave(function() {
        $(this).animate({
            opacity: 0
        }, 100, function() {
            $(this).css({
                "display": "none",
                "opacity": "1"
            })
        })
    })
    //换肤拖动改变透明度
    $("#s_bg_ajust_btn").draggable({
        axis: 'x', //只允许在x轴上拖动
        containment: 'parent', //只能在父元素内拖动
        grid: [3, 3], //每次拖动3px
        drag: function() { //拖动函数
            var Left = parseInt($(this).css("left")); //获取拖块距离左边的长度
            var scrollW = $("#s_bg_ajust_bar").width() - $("#s_bg_ajust_btn").outerWidth(true); //获取可拖动长度
            var opaVal = Math.floor(Left / scrollW * 100); //计算拖动百分比
            $("#s_bg_ajust_txt").text(opaVal + '%');
            for (var i = 0; i <= 100; i++) { //移除其他透明度类
                $("#head").removeClass("s-opacity-" + i);
            };
            $("#head").addClass("s-opacity-" + opaVal); //添加新透明度类
        }
    })
    $(".s_bdbriscroll-slider").draggable({
    	axis: 'y', //只允许在x轴上拖动
        containment: 'parent', //只能在父元素内拖动
        drag: function(){
        	var wrapH = $(window).height() - 42;  //导航区高度
            var pathway = wrapH - 12; //滚动条滑到高度
        	var hanTop = parseInt($(this).css("top"));
        	var scrollH = pathway - $(this).outerHeight(true); //获取可拖动长度
        	var conTop=hanTop/scrollH*(507-11-wrapH);
        	$(".s_bdbriwrapper").css({
        		top: -conTop+'px'
        	})
        }
    })
    //更多产品侧边导航自定义滚动条
    $(window).resize(function() {
        var wrapH = $(window).height() - 42;
        var pathway = wrapH - 12;
        var handler = Math.floor(pathway / (507 - 11) * pathway);
        $(".s_briscrollwrapper").height(wrapH);
        $(".s_bdbriscroll-ctrl-scroll").height(pathway);
        $(".s_bdbriscroll-axis").height(pathway);
        $(".s_bdbriscroll-slider").height(handler);
    })
    //监听滚动事件
    $(window).scroll(function() {
        var i = parseInt($(".s_bdbriwrapper").css("top"));
        //下面是mousewheel.js区块内禁止浏览器滚动插件的调用，t表示滚动方向
        $(".s_briscrollwrapperContainer").mousewheel(function(event, t) {
		var wrapH = $(window).height() - 42;
        var pathway = wrapH - 12;
    	var scrollH = pathway - $(".s_bdbriscroll-slider").outerHeight(true); //获取可拖动长度
    	var hanTop = parseInt(i/(507-11-wrapH)*scrollH);
            if (t > 0) { //向上滚动
                if (i + 25 < 0) {
                    i += 25;
                    $(".s_bdbriwrapper").css({
                        top: i + 'px'
                    })
                    $(".s_bdbriscroll-slider").css({
                    	top: -hanTop+'px'
                    })
                } else {
                    $(".s_bdbriwrapper").css({
                        top: '0px'
                    })
                    $(".s_bdbriscroll-slider").css({
                    	top: '0px'
                    })
                }
            } else { //向下滚动
                var wrapH = $(window).height() - 42;
                var pathway = wrapH - 12;
                if (i - 25 > -496 + pathway) {
                    i -= 25;
                    $(".s_bdbriwrapper").css({
                        top: i + 'px'
                    })
                    $(".s_bdbriscroll-slider").css({
                    	top: -hanTop+'px'
                    })
                } else {
                    $(".s_bdbriwrapper").css({
                        top: (-496 + pathway) + 'px'
                    })
                    $(".s_bdbriscroll-slider").css({
                    	top: scrollH+'px'
                    })
                }
            }
            return false;  //插件调用returnfalse
        })
    })
})
