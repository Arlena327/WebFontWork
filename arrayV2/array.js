/**
 * 数组判断
 */

var arr = ["a","x","b","d","m","a","k","m","p","j","a"];//定义数组
var list = {};
arr.forEach(function(item){
	if(!list[item]){
		list[item] = 1;
	}else{
		list[item] ++;
    }
});

//遍历数组中出现最多的字符
var maxCount = 0;
var max;
for(var i in list){
	if(list[i] > maxCount){
		maxCount = list[i];
		max = i;
	}
}

//出现的位置
var address = [];
while(arr.indexOf(max) >= 0){
	address.push(arr.indexOf(max)+1);
	arr[arr.indexOf(max)] = null;
}
alert("出现最多的字母" + max + ",出现" + maxCount + "次，分别在第" + address.join("、") + "位置.");

