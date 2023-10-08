<?php

	session_start();
	$text = $_POST["text"];
	$header = $_POST["header"];
	$media = $_POST["media"];
	$user = $_SESSION["id"];
	$sec = strtotime();
	$username = $_SESSION["username"];
	require 'db.php';

	$sql = "INSERT INTO community ('text','user','media','type','sec','header','username') VALUES ('{$text}','{$user}','{$media}','0','{$sec}','{$header}','{$username}')";
	if(mysqli_query($conn,$sql))
		echo "done !";