$(function() {
    var last; //存储导航选项
    var m = 0;
    var n = 4;
    //页面加载调用一次request函数
    request('推荐');
    //遍历添加点击调用request函数，发送ajax请求 
    $('#index_view_navigator .content td').each(function(index, value) {
        $(value).click(function() {
            $('.cur').removeClass('cur');
            $(this).find('span').addClass('cur');
            location.href = 'http://localhost:3000/'+$(this).find('span').data('box');
        })
    })

    $('.ui-refresh').click(function() {
        m += n;
        request(last, m, n, frontShow);
    })
    // ajax请求函数 
    function request(tag) {

        last = tag;
        $.ajax({
            type: 'GET',
            url: '/',
            data: {
                name: last
            },
            datatype: 'json',
            beforeSend: function() {
                if (m == 0) {
                    $('.index-view-subpage.wait').css('display', 'block');
                    $('.index-view-subpage-chosen').css('display', 'none');
                } else {
                    $('.ui-refresh').text('').append('<div class="ui-refresh-anim"></div><div class="ui-refresh-text">加载中...</div>');
                };
            },
            success: function(data) {
                if (m == 0) {
                    $('.index-view-subpage.wait').css('display', 'none');
                    $('.index-view-subpage-chosen').css('display', 'block');
                } else {
                    $('.ui-refresh').empty().text('点击加载更多');
                };
                //func(data); //调用func函数
                // console.log(data);
            },
            error: function() {
                console.log('错误');
            }
        });
    }
})
