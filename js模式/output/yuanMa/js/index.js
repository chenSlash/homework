$(function() {
    //部分应用了单例模式


    // 这是中部标签切换jq代码
    var wrapNav = $("#s_wrap .s-menu-item"); //布局中的导航子项
    var topNav = $("#s_top_wrap .s-menu-item"); //滑动显示导航子项
    wrapNav.each(changeMenu);
    topNav.each(changeMenu);
    //遍历fixed菜单,当点击选项时回到菜单头部
    topNav.each(function(index) {
        $(this).click(function() {
            var Tomenu = setInterval(function() {
                var locat = $(window).scrollTop() - 219;
                var speed = locat - locat / 4;
                $(window).scrollTop(speed + 219);
                if (locat == 0) {
                    clearInterval(Tomenu);
                };
            }, 20)
        })
    })
        //定义遍历调用函数
    function changeMenu(index) {
        $(this).click(function() {
            wrapNav.removeClass("current");
            topNav.removeClass("current");
            $(".s-content").css({
                "display": "none"
            })
            wrapNav.eq(index).addClass("current");
            topNav.eq(index).addClass("current");
            $(".s-content").eq(index).css({
                "display": "block"
            })
        })
    }
    // 滚动一定位置，百度搜索框固定
    $(window).scroll(function() {
        if ($(window).scrollTop() > $("#lg").height() - 17) {
            $("#s_top_wrap").addClass("s-down")
            $("#head_wrapper").addClass("s-down")
            $("#s_menu_gurd").addClass("s-down")
            $("#s_wrap").addClass("s-down")
            $("#s_wrap").css({
                "padding-top": "293px"
            })
        } else {
            $("#s_top_wrap").removeClass("s-down")
            $("#head_wrapper").removeClass("s-down")
            $("#s_menu_gurd").removeClass("s-down")
            $("#s_wrap").removeClass("s-down")
            $("#s_wrap").css({
                    "padding-top": "0px"
                })
                //当百度搜索框固定后，调整窗口大小，再向上滚动至固定搜索框消失，
                //清空left值,否则会出现搜索框排版问题
            $("#head_wrapper").css({
                "left": ""
            })
        };
        // "回到顶部"的显示和隐藏
        if ($(window).scrollTop() > 0) {
            $("#s_top_feed").css({
                "visibility": "visible"
            })
            $("#s_top_feed .to-top").mouseover(function() {
                $(this).addClass("icon-over")
            }).mouseleave(function() {
                $(this).removeClass("icon-over")
            })
        } else {
            $("#s_top_feed").css({
                "visibility": "hidden"
            })
        };
        // 当刷新页面是，固定搜索框依然出现
        $(window).load(function() {
            $(this).trigger("scroll");
        })

        //这是判断上下滚动方向，显示隐藏“我的关注”部分导航
        // var divide = parseInt($("#head_wrapper").height()) - 74
        var beforeScrollTop = $(window).scrollTop();
        $(window).scroll(function() {
            var afterScrollTop = $(this).scrollTop();
            var direction = beforeScrollTop - afterScrollTop;
            if (afterScrollTop > 219 && beforeScrollTop > 219) { //219是193-74
                if (direction > 0) { //向上滚动
                    $(".s-top-wrap.s-down .s-top-nav").css({
                        "display": "block"
                    });
                    $("#s_menu_gurd").stop().animate({
                        marginTop: "0px"
                    }, 150)
                } else if (direction < 0) { //向下滚动
                    $("#s_menu_gurd").stop().animate({
                        marginTop: "-39px"
                    }, 150, function() {
                        $(".s-top-wrap.s-down .s-top-nav").css({
                            "display": "none"
                        });
                    })
                };
            } else {
                $(".s-top-nav").css({
                    "display": "none"
                });
            };
        })

    })

    // 调整窗口大小小于min-width时,让搜索框left值固定
    $(window).resize(function() {
        var bodyMinWidth = parseInt($("body").css("min-width"));
        var boxWidth = parseInt($(".s-center-box").width()) / 2 + "px";
        if ($(window).width() <= bodyMinWidth) {
            $(".head_wrapper.s-down").css({
                "left": "500px"
            })
        } else {
            $(".head_wrapper.s-down").css({
                "left": boxWidth
            })
        }
    })

    // 点击“回到顶部”js
    // $(".to-top").click(function() {
    //     var Totop = setInterval(function() {
    //         var locat = $(window).scrollTop();
    //         var speed = locat - locat / 4
    //         $(window).scrollTop(speed)
    //         if (locat == 0) {
    //             clearInterval(Totop);
    //         };
    //     }, 20)
    // })

    var totop = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var $this = this;
            $this.btn = $(".to-top");
        },
        bind:function(){
            var $this = this;
            $this.btn.click(function() {
                var Totop = setInterval(function() {
                    var locat = $(window).scrollTop();
                    var speed = locat - locat / 4
                    $(window).scrollTop(speed)
                    if (locat == 0) {
                        clearInterval(Totop);
                    };
                }, 20)
            })
        }
    }
    totop.init();

    //账号经过出现二级选项

    // $("#s_username_top").hover(function(){
    //     $("#s_user_name_menu").show()
    // }, function(){
    //     $("#s_user_name_menu").hide()
    // })
    // $("#s_user_name_menu").hover(function(){
    //     $(this).show()
    // }, function(){
    //     $(this).hide()
    // })

    var showsec = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var $this = this;
            $this.ID = $("#s_username_top");
            $this.menu = $("#s_user_name_menu");
        },
        bind:function(){
            var $this = this;
            $this.ID.hover(function(){
                $this.menu.show()
            }, function(){
                $this.menu.hide()
            })
            $this.menu.hover(function(){
                $(this).show()
            }, function(){
                $(this).hide()
            })
        }
    }
    showsec.init();

    //设置经过显示菜单

    // $("#s_usersetting_top").hover(function(){
    //     $("#s_user_setting_menu").show()
    // }, function(){
    //     $("#s_user_setting_menu").hide()
    // })
    // $("#s_user_setting_menu").hover(function(){
    //     $(this).show()
    // }, function(){
    //     $(this).hide()
    // })

    var shownav = {
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var $this = this;
            $this.set = $("#s_usersetting_top");
            $this.menu = $("#s_user_setting_menu");
        },
        bind:function(){
            var $this = this;
            $this.set.hover(function(){
                $this.menu.show()
            }, function(){
                $this.menu.hide()
            })
            $this.menu.hover(function(){
                $(this).show()
            }, function(){
                $(this).hide()
            })
        }
    }
    shownav.init();
})
