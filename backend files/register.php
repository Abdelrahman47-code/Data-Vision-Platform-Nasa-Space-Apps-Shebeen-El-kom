<?php
require 'db.php';
$em = $_POST["email"];
$pw = $_POST["password"];
$fn = $_POST["fname"];
$ln = $_POST["lname"];
$sql = "SELECT * FROM users WHERE email = {$em}";
$query = mysqli_query($conn,$sql);
if(mysqli_num_rows($query) > 0){
    die("this email is already taken");
}
$sql2 = "INSERT INTO users ('email','password','fname','lname') VALUES ('{$em}','{$pw}','{$fn}','{$ln}')";
if(mysqli_query($conn,$sql2)){
    die("done !");
}