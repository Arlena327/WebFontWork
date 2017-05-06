<?php
	header("Content-type:application/json;charset=utf-8");

	$link = mysqli_connect('localhost','yqh','437929','baidunews');

	if ($link) {
		// 插入新闻
		$newstitle = $_POST['newstitle'];
		$newstype = $_POST['newstype'];
		$newsimg = $_POST['newsimg'];
		$newssrc = $_POST['newssrc'];
		$newstime = $_POST['newstime'];

		$sql = "INSERT INTO news (newstype,newstitle,newimg,newstime,newssrc) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";

		mysqli_query($link,"SET NAMES utf8");
		$result = mysqli_query($link,$sql);

		echo json_encode(array('success' => 'ok'));
	}
	else{
		echo json_encode(array('success' => 'fail'));
	}
?>