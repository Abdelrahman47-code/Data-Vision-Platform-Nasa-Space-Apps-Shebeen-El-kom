<?php
session_start();
if(isset($_SESSION["id"]) || isset($_COOKIE["id"])){
    header(/*main url*/);
    exit();
}

$em=$_POST["email"];
$pw=$_POST["password"];

$sql="SELECT * FROM users WHERE email = {$em} AND pw = {$pw}";
$q=mysqli_query($conn,$sql);
$f=mysqli_fetch_assoc($q);
if(count($f) == 0){
    die("user not found");
}

cookie_set("id",$f["id"],"+1 weak");
session_set("id",$f["id"]);

header(/*main url*/);
exit();