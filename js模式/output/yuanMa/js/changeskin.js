$(function() {
    //应用单例模式
    var changeSkin = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var $this = this;
            $this.show = $("#s_icons .s-skin");
            $this.hide = $("#s_skin_layer_cell .s-skin-up");
            $this.skinImg = $(".skin-img-item-img");
            $this.skinBox = $("#s_skin_img_content");
            $this.change = $(".s-skin-nav .skin-nav");
            $this.origin = $(".s-skin-set");
        },
        bind:function(){
            var $this = this;
            $this.show.on("click", function() {
                $("#s_skin_layer").animate({
                    top: '0px',
                    opacity: 1
                }, 500);
                $("#head").addClass("s-show-skin")
            });
            $this.hide.bind("click", function() {
                $("#s_skin_layer").animate({
                    top: '-325px',
                    opacity: 0
                }, 500);
                $("#head").removeClass("s-show-skin")
            })
            $this.skinImg.hover(function() {
                var preImg = $(this).attr("src");
                $("#s_skin_preview_skin").attr({
                    src: preImg
                })
                $("#s_skin_preview_view").removeClass("preview-nobg").addClass("preview-whitelogo")
            })
            $this.skinBox.mouseleave(function(){
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
            // 点击皮肤nav添加choose-nav类
            $this.change.click(function(){
                $(this).addClass("choose-nav").siblings().removeClass("choose-nav")
            });
            $this.origin.hover(function(){
                $(this).addClass("ishover");
            },function(){
                $(this).removeClass("ishover");
            })
            $this.origin.click(function(){  //点击“不使用皮肤”
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
                    src: 'images/bd_logo1.png'
                })
            })

            //点击皮肤项弹出背景透明度调节，改变背景
            $this.skinImg.click(function(){
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
            })
        }
    }
    changeSkin.init();
})
