/*!
 *
 */
/*顶部菜单 JS*/
	var ddd = document.getElementById("hidemenu");
    var more = document.getElementById("morepro");
    function show(){
        ddd.style.display="block";
    }
    function hide(){
        ddd.style.display="none";
    }
    function moreshow(){
        var wh = document.body.scrollHeight;
        more.style.height = wh+"px";
        more.style.display="block";
    }
    function morehide(){
        more.style.display="none";
    }


/*我的导航关注 JS*/
    $(function(){

        /*******天气********/
        $("#weathermore").hover(
            function () {
                $(".weather-shield").show();
            },
            function () {
                $(".weather-shield").hide();
        });

        /*导航编辑 JS*/
        $(".icon-up").click(function () {
            $(".weather-shield").hide();
            $(".weather-outline").show();
            $(".weather").style.position="absolute";
        });
        $(".icon-down").click(function () {
            $(".weather-shield").show();
            $(".weather-outline").hide();
            $(".weather").style.position="relative";
        });

        $(".icon-edit").click(function(){
            if ($(this).next("ul").css("display") === "none" ) {
                $(this).next("ul").show();
            } else {
                $(this).next("ul").hide();
            }
        });

        $(".phone-navs .navs-more").click(function(){
            if ($(this).nextAll("a").css("display") === "none" ) {
                $(this).nextAll("a").show();
            } else {
                $(this).nextAll("a").hide();
            }
        });

        $(".edit-title").hide();
        $(".edit-act").click(function () {
            $(".edit-title").show();
            $(".normal-title").hide();
            $(this).parents(".plus").addClass("edit");
        });

        $(".icon-navdelect").click(function () {
            $(this).parent("a").remove();
        });

        $(function(del){
            $(".parent-close").click(function () {
                $(this).parents(".plus").hide();
            });

        });

        /*生活方式 JS*/
        $(".plus-more").click(function(){
            var l=$('.life-list').children('li').length;
            for (var i = 8; i < l; i++) {
                if ($(".life-list li").eq(i).css("display") === "none" ) {
                    $(".life-list li").eq(i).show();

                    $(".plus-more").children("span").html("拉起");
                    $(".plus-more").children("i").addClass("icon-arrowup");
                } else {
                   $(".life-list li").eq(i).hide();

                   $(".plus-more").children("span").html("展开全部");
                   $(".plus-more").children("i").addClass("icon-arrowup");
                }
            }
        });

        $(".menu-list span").click(function () {
            $(".menu-list span").removeClass("curren");
            $(this).addClass("curren");
        });
        $(".menu-list span").eq(0).click(function(){
            $(".center-content").hide();
            $("#center-content0").show();
        });
        $(".menu-list span").eq(1).click(function(){
            $(".center-content").hide();
            $("#center-content1").show();
        });
        $(".menu-list span").eq(2).click(function(){
            $(".center-content").hide();
            $("#center-content2").show();
        });

        /***********换肤JS*************/
        $("#c_skin").click(function(event){
            $(".c_skin-layer").show();
            event.stopPropagation();    //阻止冒泡事件 使document事件对换肤按钮无效
        })
        $(".c_skin-layer").click(function(event){
            event.stopPropagation();
        })
        $(".c_skin-up").click(function(){
            $(".c_skin-layer").hide();
        })
        $(document).click(function(){
            $(".c_skin-layer").hide();

        });


        /***********换肤tab*************/
        var skinnav = $(".c_skin-nav li");
        for(var i=0;i<skinnav.length;i++){ 
            skinnav[i].onclick=changeTab; 
        } 
        function changeTab(){ 
            var skincon = $(".c_skin-content div");
            skinnav.removeClass("select");
            $(this).addClass("select");
            for (var i = 0; i < skinnav.length; i++) {
                if (skinnav[i] == this) {
                    // alert(skincon[i].className);
                    skincon.removeClass("select");
                    skincon.eq(i).addClass("select");
                }
            }
        }

        /*******替换背景图*******/
        $(".c_skin-type ul li img").each( function () {
            $(".c_skin-type ul li img").click(function(){
                var skin = $(this).attr("src");
                //console.log(skin);
                $(".bgskin").css("background-image", 'url(' + skin + ')');
                $(".header").addClass("skin-headhasbg");
                $(".logoDIV img").attr("src","images/logo_white.png");
            });
        });



    });

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