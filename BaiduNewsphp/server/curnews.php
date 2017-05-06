<?php
	header("Content-type:application/json;charset=utf-8");

	$link = mysqli_connect('localhost','yqh','437929','baidunews');

	if ($link) {
		$newsid = $_GET['newsid'];

		mysqli_query($link,"SET NAMES utf8");
		$sql = "SELECT * FROM news WHERE id = {$newsid}";

		$result = mysqli_query($link,$sql);
		$senddata = array();
		while ($row = mysqli_fetch_assoc($result)) {
			array_push($senddata,array(
										'id' =>$row['id'],
										'newstype' => $row['newstype'],
										'newimg' => $row['newimg'],
										'newstime' => $row['newstime'],
										'newssrc' => $row['newssrc'],
										'newstitle' => $row['newstitle']
				));
		}
		echo json_encode($senddata);
	}
	mysqli_close();

?>