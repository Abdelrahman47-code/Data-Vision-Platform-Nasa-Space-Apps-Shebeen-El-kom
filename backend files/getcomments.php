<?php
	require 'db.php';
	$posts = array();
	
	$sql = "SELECT * FROM comments WHERE post = '{$_POST['post']} ORDER BY time DESC'";
	if($query=mysqli_query($conn,$sql)){
		while($row = mysqli_fetch_assoc($query)){
			$username = mysqli_fetch_assoc(mysqli_query($conn,"SELECT fname, lname FROM users WHERE id = {$row['user']}"));
			$posts[] = [
				'text': $row['text'],
				'username': $username['fname'].' '.$username['lname']
			];
		}
	}
echo json_encode($posts);