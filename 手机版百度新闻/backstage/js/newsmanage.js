$(function() {
    // var last; //存储导航选项
    //页面加载调用一次request函数
    request('推荐', backShow);
    //‘分类’点击事件
    $('.icn_edit_article ul li a').click(function(){
        $('#sidebar ul li.icn_edit_article>a').trigger('click');
        $(this).css('color','#1E8C0F');
        $(this).parent().siblings().children().css('color','#666666');
        // if (last !== $(this).text()) {
            request($(this).text(), backShow);
        // }
    })
    //左侧栏‘发布新闻’点击事件
    $('#sidebar ul li.icn_new_article a').click(function() {
        $('#header .section_title').text('发布新闻');
        $('#main .width_full').css('display', 'block');
        $('#main .width_3_quarter').css('display', 'none');
        $(this).css('color','#DC6317');
        $(this).parent().siblings().children().css('color','#666666');
        $('#publish').css('display','inline-block');
        $('#update').css('display','none');
        $('#reset').trigger('click');
    })
    //左侧栏‘管理新闻’点击事件
    $('#sidebar ul li.icn_edit_article>a').click(function() {
        $('#header .section_title').text('管理新闻');
        $('#main .width_full').css('display', 'none');
        $('#main .width_3_quarter').css('display', 'block');
        $(this).css('color','#DC6317');
        $(this).parent().siblings().children().css('color','#666666');
    })
    //‘全选/全不选’点击事件
    $('#all-select').click(function(){
        $('#tab1 tbody .checkbox').each(function(index,value){
            $(this).trigger('click');
        })
    })
    //‘删除选中项’点击事件
    $('#del').click(function(){
        $('#tab1 tbody .checkbox').each(function(index,value){
            if ($(value).is(':checked')) {
                $(this).parent().siblings('.newsId').text();
                $(this).parent().siblings('.handle').children('.delete').trigger('click');
            };
            
        })
    })
    //选项的更改图标点击事件，跳到更新页面
    $('.update').each(function(index, value){
        $(value).on('click', function(){
            var brother = $(this).parents('.item').children('td');
            var newsIdtd = $(this).parent().siblings('.newsId');
            $('#header .section_title').text('更新新闻');
            $('#main .width_full').css('display', 'block');
            $('#main .width_3_quarter').css('display', 'none');
            $('#publish').css('display','none');
            $('#update').css('display','inline-block');
            $('#newsTitle').val(brother.eq(2).text());
            $('#newsContent').val(brother.eq(3).text());
            $('#displayBox').val(newsIdtd.data('displayBox'));
            $('#displayType').val(newsIdtd.data('displayType'));
            $('#newsType').val(brother.eq(1).text());
            $('#tip').val(brother.eq(4).text());
            $('#displayUrl').val(newsIdtd.data('displayUrl'));
            $('#newsImg1').val(newsIdtd.data('newsImg1'));
            $('#newsImg2').val(newsIdtd.data('newsImg2'));
            $('#newsImg3').val(newsIdtd.data('newsImg3'));
            $('#update').data('newsId',newsIdtd.text());
        })
    })
     //‘重置’按钮点击事件，清空发布表单
    $('#reset').click(function() {
        $('#displayUrl').val('');
        $('#newsTitle').val('');
        $('#newsImg1').val('');
        $('#newsImg2').val('');
        $('#newsImg3').val('');
        $('#newsContent').val('');
        $('#tip').val('');
    })
    // ‘发布’按钮，点击发送发布请求
    $('#publish').on('click', function() {
        var pubData = {
            handle: 'publish',
            displayBox: $('#displayBox').val(),
            displayType: $('#displayType').val(),
            displayUrl: $('#displayUrl').val(),
            newsType: $('#newsType').val(),
            newsTitle: $('#newsTitle').val(),
            newsImg1: $('#newsImg1').val(),
            newsImg2: $('#newsImg2').val(),
            newsImg3: $('#newsImg3').val(),
            newsContent: $('#newsContent').val(),
            tip: $('#tip').val()
        };
        manageReq('发布',pubData); 
        $('#reset').trigger('click');
     })
    //选项的删除图标点击事件，发送删除请求
    $('.delete').on('click', function() {
        //涉及到新建元素事件绑定问题，所以采取clone()方式新建元素解决，参考文章：http://www.cnblogs.com/linzheng/archive/2010/10/17/1853568.html
        var $delbtn = $(this);
        var $newsId = $(this).parent().siblings('.newsId').text();
        var delData = {
                handle: 'del',
                newsId: $newsId,
            };
        function removeItem(){
            $delbtn.parents('.item').remove();
        }
        manageReq('删除',delData,removeItem());
    })
    //‘更新’按钮点击事件，发送更新请求
    $('#update').on('click', function(){
        var backToPage = $('#displayBox').val();
        var $newsId = $(this).data('newsId');
        var updData = {
            handle: 'update',
            newsId: $newsId,
            displayBox: $('#displayBox').val(),
            displayType: $('#displayType').val(),
            displayUrl: $('#displayUrl').val(),
            newsType: $('#newsType').val(),
            newsTitle: $('#newsTitle').val(),
            newsImg1: $('#newsImg1').val(),
            newsImg2: $('#newsImg2').val(),
            newsImg3: $('#newsImg3').val(),
            newsContent: $('#newsContent').val(),
            tip: $('#tip').val()
        };
        function backTo(){
            $('.icn_edit_article ul li a').each(function(index,value){
                if ($(value).text()==backToPage) {
                    $(value).trigger('click');
                };
            })
        }
        manageReq('更新',updData,backTo());
    })  
    // 页面显示ajax请求函数
    function request(tag, func) {
        last = tag;
        $.ajax({
            type: 'POST',
            url: 'backstage/php/newsmanage.php',
            data: {
                name: last
            },
            datatype: 'json',
            beforeSend: function(){
                $('.shade').css('display','block');
            },
            success: function(data) {
                func(data); //调用func函数
                $('.shade').css('display','none');
            },
            error: function() {
                console.log('显示错误');
            }
        })
    }
    //增删改查请求函数
    function manageReq(handle,sendData,successFn){
        $.ajax({
            type: 'POST',
            url: 'backstage/php/newsmanage.php',
            datatype: 'json',
            data: sendData,
            success: function(data) {
                successFn;
                alert(data);
            },
            error: function() {
                alert(handle+'失败');
            }
        })
    }
    //后台页面显示函数
    function backShow(data) {
        var $container = $('#tab1 .tablesorter tbody');
        $container.empty();
        $(data).each(function(index,value){
            var clone = $('.hidden-templete').clone(true);
            clone.removeClass('hidden-templete').addClass('item').appendTo('#tab1 tbody');
            clone.children('.handle').before("<td>"+value['newsType']+"</td><td>"+value['newsTitle']+"</td><td>"+value['newsContent']+"</td><td>"+value['tip']+"</td>");
            var newsIdtd = $("<td class='newsId'>"+value['newsId']+"</td>").insertBefore(clone.children('.handle'));
            newsIdtd.data('displayBox',value['displayBox']);
            newsIdtd.data('displayType',value['displayType']);
            newsIdtd.data('displayUrl',value['displayUrl']);
            newsIdtd.data('newsImg1',value['newsImg1']);
            newsIdtd.data('newsImg2',value['newsImg2']);
            newsIdtd.data('newsImg3',value['newsImg3']);
            // for(i in value){
            //     $('<td>').text(value[i]).appendTo($tr);
            // }
        })
    }
})
