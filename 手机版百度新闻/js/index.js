$(function() {
    var last; //存储导航选项
    var m = 0;
    var n = 4;
    //页面加载调用一次request函数
    request('推荐', 0, 4, frontShow);
    //遍历添加点击调用request函数，发送ajax请求 
    $('#index_view_navigator .content td').each(function(index, value) {
        $(value).click(function() {
            $('.cur').removeClass('cur');
            $(this).find('span').addClass('cur');
            //点击选项不同时发送请求，重复点击不发送请求
            if (last !== $(this).find('span').text()) {
                //清空显示区内容
                m = 0;
                $('#index_view_sections .index-list').empty();
                request($(this).find('span').text(), 0, 4, frontShow);
            }
        })
    })

    $('.ui-refresh').click(function() {
        m += n;
        request(last, m, n, frontShow);
    })
    // ajax请求函数
    function request(tag, m, n, func) {

        last = tag;
        $.ajax({
            type: 'POST',
            url: 'php/newsreport.php',
            data: {
                name: last,
                startItem: m,
                showNum: n
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
                func(data); //调用func函数
            },
            error: function() {
                console.log('错误');
            }
        });
    }

    //请求成功回调函数
    function frontShow(data) {

        //遍历显示后端服务器返回数据
        $(data).each(function(index, value) {
            //定义变量
            var $listItem = $('<div>').addClass('index-list-item');
            var $listMain = $('<div>').addClass('index-list-main')
            var $listImg = $('<div>').addClass('index-list-image');
            var $listMainText = $('<div>').addClass('index-list-main-text');
            var $listItemTitle = $('<div>').addClass('index-list-main-title');
            var $listItemAbs = $('<div>').addClass('index-list-main-abs');
            var $listAlbumCon = $('<div>').addClass('index-list-album-container');
            var $listBottom = $('<div>').addClass('index-list-bottom');
            var $listMainTime = $('<div>').addClass('index-list-main-time');
            var $ivideoplay = $('<i>').addClass('ivideoplay');
            var $tip = $('<b>');
            //组合DOM
            $listItem.data('id', $(value).attr('newsId'));
            $listItem.data('title', $(value).attr('newsTitle'));
            $listItem.data('type', $(value).attr('newsType'));
            $listItem.data('dislaytype', $(value).attr('displayType'));
            $listItem.data('dislayurl', $(value).attr('displayUrl'));
            $listItem.appendTo('#index_view_sections .index-list');
            $listMain.appendTo($listItem);
            $listMainText.append($listItemTitle).appendTo($listMain);
            $listBottom.appendTo($listMain);
            $listMainTime.appendTo($listBottom);
            $ivideoplay.appendTo($listImg);
            $('<img>').attr('src', 'img/' + $(value).attr('newsImg1')).appendTo($listImg);
            $tip.text($(value).attr('tip')).appendTo($listMainTime);
            $('<b>').addClass('index-list-main-site').appendTo($listMainTime);
            $('<b>').addClass('tip-time').text('10分钟前').appendTo($listMainTime);
            $listItemTitle.text($(value).attr('newsTitle'));

            //判断图片张数，不同之处分别组合
            if ($(value).attr('newsImg1') && !$(value).attr('newsImg2')) { //只有一张图
                $listImg.prependTo($listMain);
                $listItemAbs.text($(value).attr('newsContent')).appendTo($listMainText);
            } else if ($(value).attr('newsImg1') && $(value).attr('newsImg2')) { //有两张图以上
                $listMainText.after($listAlbumCon);
                for (var i = 0; i < 3; i++) {
                    var $listAlbum = $('<div>').addClass('index-list-album');
                    var $listAlbumWrap = $('<div>').addClass('index-list-album-wrapper');
                    var $img = $('<img>').attr('src', 'img/' + $(value).attr('newsImg' + (i + 1)));
                    switch (i) {
                        case 0:
                            $listAlbumWrap.addClass('one');
                            break;
                        case 1:
                            $listAlbumWrap.addClass('two');
                            break;
                        case 2:
                            $listAlbumWrap.addClass('three');
                            break;
                    }
                    $listAlbumWrap.append($img).appendTo($listAlbum);
                    $listAlbum.appendTo($listAlbumCon);
                }
            } else { //没有图片 
                $listItemAbs.text($(value).attr('newsContent')).appendTo($listMainText);
            };
            //根据$listItem.data('type')为$tip添加不同类
            switch ($listItem.data('type')) {
                case 'hot':
                    $tip.addClass('tip-hot tip-fillred');
                    break;
                case 'recommend':
                    $tip.addClass('tip-reason tip-fillblue');
                    break;
                case 'text':
                    $tip.addClass('tip-tag tip-strokeblue');
            }
        });
    }

})
