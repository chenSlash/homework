<?php
	header("Content-type:application/json;charset=utf-8");
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	require_once('../backstage/php/config.php');
	if (isset($_POST['name'],$_POST['startItem'],$_POST['showNum'])) {
		loadMore($_POST['name'],$_POST['startItem'],$_POST['showNum'],$con);
	};	
	function loadMore($tag,$startItem,$showNum,$con){
		$sql = "select * from `news` where `displayBox`= '".$tag."' limit ".$startItem.", ".$showNum;
		mysql_query("set names utf8");
		$result = mysql_query($sql,$con);
		$arr = array();
		while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
			array_push($arr,array('displayBox'=>$row['displayBox'],'displayType'=>$row['displayType'],'displayUrl'=>$row['displayUrl'],'newsType'=>$row['newsType'],'newsId'=>$row['newsId'],'newsTitle'=>$row['newsTitle'],'newsImg1'=>$row['newsImg1'],'newsImg2'=>$row['newsImg2'],'newsImg3'=>$row['newsImg3'],'newsContent'=>$row['newsContent'],'tip'=>$row['tip']));
		};	
		echo json_encode($arr);
		mysql_close($con);
	};
?>