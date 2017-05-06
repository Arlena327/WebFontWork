// 图片瀑布流JS
// 

window.onload = function(){
	getImgLocation("content","list");
}


// 1.计算页面宽度 可以摆放的图片列数
function getImgLocation(parent,clsName){
	var cparent = document.getElementById(parent);
	var clist = getDiv(cparent,clsName);
	console.log(clist);
	var imgwidth = $(clist).eq(0).width();
	console.log(imgwidth);
}
// 封装
function getDiv(parent,clsName){
	var contentArr = new Array();
	var alllist = parent.getElementsByTagName("*");
	for (var i = 0; i < alllist.length; i++) {
		if (alllist[i].className == clsName) {
			contentArr.push(alllist[i]);
		}
	}
	return contentArr;
}