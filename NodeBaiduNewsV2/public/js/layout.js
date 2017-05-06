/*!
 *
 */

$(document).ready(function(){
    refreshNews('推荐');

    $('.view-nav ul li a').click(function(e){
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    })

});

function refreshNews(type){
    var newsdiv = $('.tab-news');
    newsdiv.empty();


    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data){

            data.forEach(function(item,index,array){
                var $list = $('<div></div>').addClass('news-item newsinfo').prependTo(newsdiv);
                var newsimg = $('<div></div>').addClass('news-imginline').appendTo($list);
                var $img = $('<img>').attr('src', item.newimg).appendTo(newsimg);
                var newscontent = $('<div></div>').addClass('newsinfo-right').appendTo($list);
                var $h2 = $('<h2></h2>').html(item.newstitle).appendTo(newscontent);
                var newsinfo = $('<div></div>').addClass('news-from').appendTo(newscontent);
                var newsSrc = $('<span></span>').addClass('news-net').html(item.newssrc).appendTo(newsinfo);
                var newsTime = $('<span></span>').addClass('news-time').html(item.newstime).appendTo(newsinfo);
                var newsHot = $('<span></span>').addClass('news-iconhot').html('热点').appendTo(newsinfo);
            })
        },
        error:function(){
            console.log('123');
        }
    })


}
// 点击返回页面顶部
$(document).ready(function() {
    $("#scroll-top").hide();

    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
              $("#scroll-top").fadeIn(1000);
            } else {
              $("#scroll-top").fadeOut(1000);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#scroll-top").click(function() {
            $('body,html').animate({
              scrollTop: 0
            },
            1000);
            return false;
        });
    });
});