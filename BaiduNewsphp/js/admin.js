//打开后台页面 发送请求 刷新列表
//
$(document).ready(function(){
	var $newstable = $('#newsTable tbody');
	refreshNews();

	//添加新闻
	$('#newsSubmit').click(function(e){
		

		//输入判断
		if($('#newstitle').val()==="" || $('#newsimg').val()==="" || $('#newssrc').val()==="" || $('#newstime').val()===""){
			if ($('#newstitle').val()==="") {
				$('#newstitle').parent().addClass('has-error');
			}else{
				$('#newstitle').parent().removeClass('has-error');
			}
			if ($('#newsimg').val()==="") {
				$('#newsimg').parent().addClass('has-error');
			}else{
				$('#newsimg').parent().removeClass('has-error');
			}
			if ($('#newssrc').val()==="") {
				$('#newssrc').parent().addClass('has-error');
			}else{
				$('#newssrc').parent().removeClass('has-error');
			}
			if ($('#newstime').val()==="") {
				$('#newstime').parent().addClass('has-error');
			}else{
				$('#newstime').parent().removeClass('has-error');
			}
		}
		else{

			var jsonNews = {
				newstitle:$('#newstitle').val(),
				newstype:$('#newstype').val(),
				newsimg:$('#newsimg').val(),
				newssrc:$('#newssrc').val(),
				newstime:$('#newstime').val()
			}
			// console.log(jsonNews);
			//提交添加
			$.ajax({
				url: '../server/insert.php',
		        type: 'post',
		        data: jsonNews,
		        datatype: 'json',
		        success: function(data){
		        	console.log("data");
		        	refreshNews();
		        }
			});
		}
	});

	//删除新闻功能
	var deleteID = null;
	$newstable.on('click','.btn-danger',function(e){
		$('#deleteModal').modal('show');
		deleteID = $(this).parent().prevAll().eq(4).html();
	});
	$('#deleteModal #comfirmDelete').click(function(e){
		if (deleteID) {
			$.ajax({
				url:'../server/delete.php',
				type:'post',
				data:{newsid:deleteID},
				success:function(data){
					console.log('删除成功');
					$('#deleteModal').modal('hide');
					refreshNews();
				}
			});
		}
	});

	//修改新闻功能
	var updateID = null;
	$newstable.on('click','.btn-primary',function(e){
		$('#updateModal').modal('show');
		updateID = $(this).parent().prevAll().eq(4).html();

		$.ajax({
			url:'../server/curnews.php',
			type:'get',
			datatype:'json',
			data:{newsid:updateID},
			success:function(data){
				$('#upnewstitle').val(data[0].newstitle);
				$('#newstype').val(data[0].newstype);
				$('#upnewsimg').val(data[0].newimg);
				$('#upnewssrc').val(data[0].newssrc);
				var utime = data[0].newstime.split('')[0]; //取时间
				$('#upnewstime').val(utime);
			}
		});
	});
	$('#updateModal #comfirmUpdate').click(function(e){
		$.ajax({
			url:'../server/update.php',
			type:'post',
			data:{
				newstitle:$('#upnewstitle').val(),
				newstype:$('#newstype').val(),
				newimg:$('#upnewsimg').val(),
				newssrc:$('#upnewssrc').val(),
				newstime:$('#upnewstime').val(),
				id:updateID
			},
			success:function(data){
				$('#updateModal').modal('hide');
				refreshNews();
			}
		});
	});

	function refreshNews(type){
		//empty table
		$newstable.empty();

		$.ajax({
			type:'get',
			url:'../server/getnews.php',
			datatype:'json',
			success:function(data){
				console.log(data);
				data.forEach(function(item,index,array){
					var $tdid = $('<td>').html(item.id);
					var $tdtype = $('<td>').html(item.newstype);
					var $tdtitle = $('<td>').html(item.newstitle);
					var $tdimg = $('<td>').html(item.newimg);
					var $tdtime =  $('<td>').html(item.newstime);
					var $tdctrl =  $('<td>')
					var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
					var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
					$tdctrl.append($btnupdate,$btndelete);
					var $tRow = $('<tr>');
					$tRow.append($tdid,$tdtype,$tdtitle,$tdimg,$tdtime,$tdctrl);
					$newstable.append($tRow);
				})
			}
		})
	}

});