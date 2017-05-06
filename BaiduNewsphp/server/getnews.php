<?php
	header("Content-type:application/json;charset=utf-8");

	// $arr = array(
	// 				'newtype' => '百家',
	// 				'newimg' => '../images/news3.jpg',
	// 				'newtime' => '2016-02-28',
	// 				'newsrc' => '新浪网',
	// 				'newtitle' => '测试动态获取新闻标题',
	// 			);
	// echo json_encode($arr);
	$link = mysqli_connect('localhost','yqh','437929','baidunews');
	if ($link) {
		//执行成功的过程
		//
			$sql = 'SELECT * FROM news';

			mysqli_query($link,"SET NAMES utf8");
			$result = mysqli_query($link,$sql);

			$senddata = array();
			while ($row = mysqli_fetch_assoc($result)) {
				array_push($senddata,array(
											'id' =>$row['id'],
											'newstype' => $row['newstype'],
											'newsimg' => $row['newimg'],
											'newstime' => $row['newstime'],
											'newssrc' => $row['newssrc'],
											'newstitle' => $row['newstitle']
					));
			}
			echo json_encode($senddata);
		}
	else{
		echo json_encode(array('连接信息' => '连接失败'));
	}

	mysqli_close($link);

	
?>