/**
 * 计算器
 */

var num=0;
var result=0;
var operator;
var triresult;


/********退格******/
function backspace()
{
    var txt = document.getElementById('count-sreen');
    txt.value = txt.value.substring(0,txt.value.length - 1);
    if (txt.value=="") {txt.value="0";}
}

/********清除******/
function clearAll(){
    document.getElementById("count-sreen").value="0";
    operator="";
    result="";
}

/*********小数点*********/
function point(){
    var str=String(document.getElementById('count-sreen').value);
    for(i=0; i<=str.length;i++){ //判断是否已经有一个点号
        if(str.substr(i,1)==".") return false; //如果有则不再插入
    }
    str=str + "."; 
    document.getElementById('count-sreen').value=str;
}

/*********将按钮上的数字显示在输入框中**********/
function count(num){
    var str=String(document.getElementById("count-sreen").value);/***获取输入框的值****/
    str=str + String(num);/***给输入框添加字符****/
    document.getElementById("count-sreen").value=Number(str);/***将字符串转换为数字显示在输入框中****/
} 

function trifunc(trifuncsymbol){
    tri=trifuncsymbol.id;
    trinum=Number(document.getElementById("count-sreen").value);
    switch(tri){
        case "a5":triresult = Math.sin(trinum);break;
        case "a6":triresult = Math.cos(trinum);break;
        case "a7":triresult = Math.tan(trinum);break;
        case "a8":triresult = 1/trinum;break;
        case "a9":triresult = trinum/100;break;
        case "a10":triresult = Math.sqrt(trinum);break;
    }
    document.getElementById("count-sreen").value=String(triresult);
}

/******运算符*******/
function calculation(fsigal){
    operator=fsigal.id;/******获取运算符******/
    numshow=document.getElementById("count-sreen").value;
    no1=Number(numshow);
    document.getElementById("count-sreen").value=""; 
}

 /******等于*******/
function equal(){
    var no2=Number(document.getElementById("count-sreen").value);
    switch(operator){
        case "a1":result = no1+no2;break;
        case "a2":result = no1-no2;break;
        case "a3":result = no1*no2;break;
        case "a4":if(Number(no2)!=0){result=no1/no2;}else{result="除数不能为零！";} break;
    }
    document.getElementById("count-sreen").value=String(result);
}
