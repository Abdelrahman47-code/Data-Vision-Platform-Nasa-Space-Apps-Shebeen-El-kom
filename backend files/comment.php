<?php

	require 'db.php';
	session_start();
	$text = $_POST["text"];
	$post = $_POST["post"];
	$user = $_SESSION["id"];
	$time = strtotime("now");
	
	$sql = "INSERT INTO community ('text','user','time','post') VALUES ('{$text}','{$user}','{$time}',{$post})";
	if(mysqli_query($conn,$sql)){
		echo "done !";
	}