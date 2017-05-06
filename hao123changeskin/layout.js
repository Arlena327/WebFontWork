/**
 * 换肤
 */
function gel(id) {
    return document.getElementById(id);
}

//设置cookie
function setcookie(name,value){
    var Days = 30;
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + expdate.toGMTString(); 
}

//读取cookie
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

//取出cookie
var css = localStorage.getItem('css') || getCookie('css'); //当浏览器不支持cookie时 使用localStorage
if (css) {
    gel("mylink").href = css;
}

window.onload = function() {
//更换css文件 
    var lis = gel("uL ist").childNodes;
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].nodeType == 1) {
            lis[i].onclick = function (name,value) {
                var skin=this.className;
                var stylesheet=gel("mylink").href = "css/" + skin + ".css";
                //将当前皮肤存到cookie
                //document.cookie="stylesheet="+escape(stylesheet);
                localStorage.setItem("css",stylesheet); //当浏览器不支持cookie时localStorage
                setcookie("css",stylesheet);

            };
        }
    }
};

 