$(function(){$(".s_bri").stop().on("mouseenter",function(){$(".s_bdbri").css({opacity:"0",display:"block"}).animate({opacity:1},100),$(this).trigger("scroll"),$(this).trigger("resize")}),$(".s_bdbri").stop().mouseleave(function(){$(this).animate({opacity:0},100,function(){$(this).css({display:"none",opacity:"1"})})}),$("#s_bg_ajust_btn").draggable({axis:"x",containment:"parent",grid:[3,3],drag:function(){var s=parseInt($(this).css("left")),r=$("#s_bg_ajust_bar").width()-$("#s_bg_ajust_btn").outerWidth(!0),i=Math.floor(s/r*100);$("#s_bg_ajust_txt").text(i+"%");for(var t=0;100>=t;t++)$("#head").removeClass("s-opacity-"+t);$("#head").addClass("s-opacity-"+i)}}),$(".s_bdbriscroll-slider").draggable({axis:"y",containment:"parent",drag:function(){var s=$(window).height()-42,r=s-12,i=parseInt($(this).css("top")),t=r-$(this).outerHeight(!0),e=i/t*(496-s);$(".s_bdbriwrapper").css({top:-e+"px"})}}),$(window).resize(function(){var s=$(window).height()-42,r=s-12,i=Math.floor(r/496*r);$(".s_briscrollwrapper").height(s),$(".s_bdbriscroll-ctrl-scroll").height(r),$(".s_bdbriscroll-axis").height(r),$(".s_bdbriscroll-slider").height(i)}),$(window).scroll(function(){var s=parseInt($(".s_bdbriwrapper").css("top"));$(".s_briscrollwrapperContainer").mousewheel(function(r,i){var t=$(window).height()-42,e=t-12,o=e-$(".s_bdbriscroll-slider").outerHeight(!0),a=parseInt(s/(496-t)*o);if(i>0)0>s+25?(s+=25,$(".s_bdbriwrapper").css({top:s+"px"}),$(".s_bdbriscroll-slider").css({top:-a+"px"})):($(".s_bdbriwrapper").css({top:"0px"}),$(".s_bdbriscroll-slider").css({top:"0px"}));else{var t=$(window).height()-42,e=t-12;s-25>-496+e?(s-=25,$(".s_bdbriwrapper").css({top:s+"px"}),$(".s_bdbriscroll-slider").css({top:-a+"px"})):($(".s_bdbriwrapper").css({top:-496+e+"px"}),$(".s_bdbriscroll-slider").css({top:o+"px"}))}return!1})})});