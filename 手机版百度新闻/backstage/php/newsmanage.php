<?php

	header("Content-type:application/json;charset=utf-8");
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	require_once('config.php');
	if(isset($_REQUEST['handle'])){	
		switch($_REQUEST['handle']){
			case 'publish':
				publish($con);
				break;
			case 'del':
				del($con);
				break;
			case 'update':
				update($con);
				break;
		};
	};
	if(isset($_POST['name'])){
		res($_POST['name'],$con);
	};
	function publish($con){
		$displayBox = init($_REQUEST['displayBox']);
		$displayType = init($_REQUEST['displayType']);
		$displayUrl = init($_REQUEST['displayUrl']);
		$newsType = init($_REQUEST['newsType']);
		$newsTitle = init($_REQUEST['newsTitle']);
		$newsImg1 = init($_REQUEST['newsImg1']);
		$newsImg2 = init($_REQUEST['newsImg2']);
		$newsImg3 = init($_REQUEST['newsImg3']);
		$newsContent = init($_REQUEST['newsContent']);
		$tip = init($_REQUEST['tip']);
		$sql = "insert into `news`(`displayBox`, `displayType`, `displayUrl`, `newsType`, `newsTitle`, `newsImg1`, `newsImg2`, `newsImg3`, `newsContent`, `tip`) value ('".$displayBox."', '".$displayType."', '".$displayUrl."', '".$newsType."', '".$newsTitle."', '".$newsImg1."', '".$newsImg2."', '".$newsImg3."', '".$newsContent."', '".$tip."')";
		mysql_query("set names utf8");
		$result = mysql_query($sql,$con);
		if (!$result) {
			die('Error:'.mysql_error());
		}else{
			echo json_encode('发布成功');
		};
	};

	function del($con){
		$newsId = $_REQUEST['newsId'];
		$sql = "delete from `news` where newsId=".$newsId;
		mysql_query("set names utf8");
		$result = mysql_query($sql,$con);
		if (!$result) {
			die('Error:'.mysql_error());
		}else{
			echo json_encode('删除成功');
		};
	};

	function update($con){
		$displayBox = init($_REQUEST['displayBox']);
		$displayType = init($_REQUEST['displayType']);
		$displayUrl = init($_REQUEST['displayUrl']);
		$newsType = init($_REQUEST['newsType']);
		$newsTitle = init($_REQUEST['newsTitle']);
		$newsImg1 = init($_REQUEST['newsImg1']);
		$newsImg2 = init($_REQUEST['newsImg2']);
		$newsImg3 = init($_REQUEST['newsImg3']);
		$newsContent = init($_REQUEST['newsContent']);
		$tip = init($_REQUEST['tip']);
		$newsId = init($_REQUEST['newsId']);
		$sql = "update `news` set `displayBox`='".$displayBox."',`displayType`='".$displayType."',`displayUrl`='".$displayUrl."',`newsType`='".$newsType."',`newsTitle`='".$newsTitle."',`newsImg1`='".$newsImg1."',`newsImg2`='".$newsImg2."',`newsImg3`='".$newsImg3."',`newsContent`='".$newsContent."',`tip`='".$tip."' WHERE newsId=".$newsId;
		mysql_query("set names utf8");
		$result = mysql_query($sql,$con);
		if (!$result) {
			die('Error:'.mysql_error());
		}else{
			echo json_encode('更新成功');
		};
	};
	function res($tag,$con){
		$sql = "select * from `news` where `displayBox`= '".$tag."'";
		mysql_query("set names utf8");
		$result = mysql_query($sql,$con);
		$arr = array();
		while($row = mysql_fetch_array($result,MYSQL_ASSOC)){
			array_push($arr,array('displayBox'=>$row['displayBox'],'displayType'=>$row['displayType'],'displayUrl'=>$row['displayUrl'],'newsType'=>$row['newsType'],'newsId'=>$row['newsId'],'newsTitle'=>$row['newsTitle'],'newsImg1'=>$row['newsImg1'],'newsImg2'=>$row['newsImg2'],'newsImg3'=>$row['newsImg3'],'newsContent'=>$row['newsContent'],'tip'=>$row['tip']));
		}
		echo json_encode($arr);
		mysql_close($con);
	};	
	//初始化数据，转义字符，替换script标签，防止xss
	function init($str){
		return preg_replace("/<[^><]*script[^><]*>/i","",addslashes($str));
	};
?>