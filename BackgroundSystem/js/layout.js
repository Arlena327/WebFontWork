/*!
 *
 */
/*响应式导航*/
$(function(){
	$('.toggle-menu').click(function(){
		var lside = $(".left-side");
		if(lside.css("display")=="none"){
			lside.css("display","block");
			$('.main-content').css('margin-left','240px');
			$('.header-section').css('left','240px');
		}
		else{
			lside.css("display","none");
			$('.main-content').css('margin-left','0');
			$('.header-section').css('left','0');
		}
	})
	
});