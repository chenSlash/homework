$(function () {
    $("#sidebar").on("mouseover", function() {
    	$(".bdbri.bdbriimg").slideToggle(1000);
    })
    $(".bdbri").on("mousemove", function() {
    	$(this).css("display", "block")
    })
    $(".bdbri").on("mouseout", function() {
    	$(this).css("display", "none")
    })
});