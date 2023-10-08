<?php
require 'db.php';
$sql = "SELECT word FROM keywords ORDER BY word";
if(!$query=mysqli_query($conn,$sql))
    die("error");
$keywords = array();
while($row = mysqli_fetch_assoc($query))
    $keywords[] = $row["word"];

$final = array();
for($i=0;$i<count($keywords);$i++)
    if(strstr($keywords[$i], $_POST["word"]))
        $final[] = $keywords[$i];

echo implode(",",$final);