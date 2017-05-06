// JavaScript Document
// 
// left bar隐藏展示效果
$(function(){
	$(".detailed_list").hide();
	$(".leftBar>ul>li").hover(
	  function () {
	    $(this).find('.detailed_list').show();
	  },
	  function () {
	    $(this).find(".detailed_list").hide();
	  }
	);
});

//*********************banner*******************************
$(function() {
	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",1).mouseover(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");

	//上一页、下一页按钮透明度处理
	$("#focus .preNext").css("opacity",1).hover(function() {
		$(this).stop(true,false).animate({"opacity":"1"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.7"},300);
	});

	//上一页按钮
	$("#focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//下一页按钮
	$("#focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus .preNext").hide();
	$("#focus").hover(function() {
		clearInterval(picTimer);
		$("#focus .preNext").fadeIn(500);
	},function() {
		$("#focus .preNext").fadeOut(500);
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}
});
//*********************************banner end********************************

//focus work
$(function() {
	var sWidth = $("#focuslist ul li").width(); //获取焦点图的宽度（显示面积）

	var len = $("#focuslist ul li").length; //获取焦点图个数

	var index = 0;

	//上一页、下一页按钮
	$("#focuslist .listpre").hover(function() {
		$(this).css("background-position","0 -40px");
	},function() {
		$(this).css("background-position","0 0");
	});
	$("#focuslist .listnext").hover(function() {
		$(this).css("background-position","-24px -40px");
	},function() {
		$(this).css("background-position","-24px 0");
	});

	//上一个
	$("#focuslist .listpre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		tranlateli(index);
	});

	//下一个
	$("#focuslist .listnext").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		tranlateli(index);
	});

	$("#focuslist").hover(function() {
		$("#focuslist .listarrow").fadeIn(500);
	},function() {
		$("#focuslist .listarrow").fadeOut(500);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focuslist ul").css("width",sWidth * (len));
	function tranlateli(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focuslist ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	}
});


//*********************************banner end********************************
$(".remonlist").hide();
$(function() {
	$(".rehover").hover(function() {
		$(".remonlist").show();
		$(".frontrecon").hide();
		$(".remoncon").hide();
		$("#queans").show();
	});
	$(".remonlist").hover(function() {
		$(".remonlist").show();
		$(".frontrecon").hide();
	},function() {
		$(".remonlist").hide();
		$(".frontrecon").show();
	});
	$(".remontab li").hover(function() {
		$(".remontab li").removeClass("active");
		$(this).addClass("active");
	});
	$(".remontab li").eq(0).hover(function() {
		$(".remoncon").hide();
		$("#queans").show();
	});
	$(".remontab li").eq(1).hover(function() {
		$(".remoncon").hide();
		$("#remonwiki").show();
	});
	$(".remontab li").eq(2).hover(function() {
		$(".remoncon").hide();
		$("#remonlesson").show();
	});
	$(".remontab li").eq(3).hover(function() {
		$(".remoncon").hide();
		$("#remonsec").show();
	});

//*****************************
	$(".tab_con ul").hide();
	$(".tab_con ul").eq(0).show();
	$(".tab_label a").hover(function() {
		$(".tab_label a").removeClass("active");
		$(this).addClass("active");
	});
	$(".tab_label a").eq(0).hover(function() {
		$(".tab_con ul").hide();
		$(".tab_con ul").eq(0).show();
	});
	$(".tab_label a").eq(1).hover(function() {
		$(".tab_con ul").hide();
		$(".tab_con ul").eq(1).show();
	});
	$(".tab_label a").eq(2).hover(function() {
		$(".tab_con ul").hide();
		$(".tab_con ul").eq(2).show();
	});

//*****************************
	$(".career_path ul li").hover(function() {
		$(this).css("border-color","#35b558");
		$(this).prevAll().eq(4).css("border-bottom-color","#35b558");

		if($(this).index()!=4){
			$(this).next().css("border-left-color","#35b558");
		}
	},function(){
		$(".career_path ul li").css("border-color","#e4e4e4");
	});
});
