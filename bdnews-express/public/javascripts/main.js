$(function(){
	//遍历添加点击调用request函数，发送ajax请求 
    $('#index_view_navigator .content td').each(function(index, value) {
        $(value).click(function() {
            $('.cur').removeClass('cur');
            $(this).find('span').addClass('cur');
            location.href = 'http://localhost:3000/'+$(this).find('span').data('box');
        })
    })
})