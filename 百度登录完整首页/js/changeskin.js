$(function() {
    //点击换肤弹出换肤页面
    $("#s_icons .s-skin").on("click", function() {
        $("#s_skin_layer").animate({
            top: '0px',
            opacity: 1
        }, 500);
        $("#head").addClass("s-show-skin")
    });
    //点击收起隐藏换肤界面
    $("#s_skin_layer_cell .s-skin-up").bind("click", function() {
        $("#s_skin_layer").animate({
            top: '-325px',
            opacity: 0
        }, 500);
        $("#head").removeClass("s-show-skin")
    })

    // 鼠标滑过皮肤项，预览
    $(".skin-img-item-img").hover(function() {
        var preImg = $(this).attr("src");
        $("#s_skin_preview_skin").attr({
            src: preImg
        })
        $("#s_skin_preview_view").removeClass("preview-nobg").addClass("preview-whitelogo")
    })
    $("#s_skin_img_content").mouseleave(function(){
        var selectI=$(".skin-img-item").hasClass("choose-li");
        if(selectI){
            var selectImg = $(".skin-img-item.choose-li .skin-img-item-img").attr("src");
            $("#s_skin_preview_skin").attr({
                src: selectImg
            });
        }else{
            setTimeout(function(){
            $("#s_skin_preview_skin").attr({
                src: ""
            });
            $("#s_skin_preview_view").removeClass("preview-whitelogo").addClass("preview-nobg")   
            },500)
        }
    })
    //点击皮肤项弹出背景透明度调节，改变背景
    $(".skin-img-item-img").click(function(){
    	$("#s_skin_opacity_set .bg-hideOrShowAjax").css({
    		"visibility": "visible"
    	});
    	$(".s-skin-set").css({
    		"display": "block"
    	}).addClass("skin-has-bg");
    	$(this).parent().addClass("choose-li").siblings().removeClass("choose-li");
    	$("#head").addClass("s-skin-hasbg white-logo s-opacity-100");
    	//更换皮肤背景
    	var bgImg=$(this).attr("src").split("/").pop();
    	$(".s-skin-container").css({
    		"background-color": "#404040",
    		"background-image": "url('images/skin/"+bgImg+"')"
    	})
    	//更换logo
    	$("#s_lg_img").attr({
    		src: "images/logo_white.png"
    	})
    });
    $(".s-skin-set").click(function(){  //点击“不使用皮肤”
        $("#s_skin_preview_view").removeClass("preview-whitelogo").addClass("preview-nobg");
    	//隐藏透明度调节和“不使用皮肤”，移除skin-has-bg类
    	$("#s_skin_opacity_set .bg-hideOrShowAjax").css({
    		"visibility": "hidden"
    	});
    	$(".s-skin-set").css({
    		"display": "none"
    	}).removeClass("skin-has-bg");
    	$(".skin-img-item-img").parent().removeClass("choose-li");
    	$("#head").removeClass("s-skin-hasbg white-logo s-opacity-100");
    	//移除皮肤容器的样式
    	$(".s-skin-container").css({
    		"background-color": "",
    		"background-image": ""
    	})
    	//还原默认logo图
    	$("#s_lg_img").attr({
    		src: "images/bd_logo1.png"
    	})
    })
    // 点击皮肤nav添加choose-nav类
    $(".s-skin-nav .skin-nav").click(function(){
    	$(this).addClass("choose-nav").siblings().removeClass("choose-nav")
    });
    $(".s-skin-set").hover(function(){
    	$(this).addClass("ishover");
    },function(){
    	$(this).removeClass("ishover");
    })
})
