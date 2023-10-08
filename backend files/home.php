<?php
session_start();
require 'db.php';
$finaljson="";
$name="";
$latests="";
$recommended="";
if(isset($_SESSION["id"]) || isset($_COOKIE["id"])){
    $id = $_SESSION["id"] || $_COOKIE["id"];
    $sql1="SELECT username FROM users WHERE id={$id}";
    $q1=mysqli_query($conn,$sql1);
    $name=mysqli_fetch_assoc($q1)["name"];
    $sql2="SELECT * FROM intersts WHERE id={$id}";
    $q2=mysqli_query($conn,$sql2);
    $int=mysqli_fetch_assoc($q2);
    $keywordList = "'" . implode("', '", $int) . "'";
    $sql3 = "SELECT research, COUNT(*) AS keyword_count
        FROM keywords
        WHERE word IN ($keywordList)
        GROUP BY research
        ORDER BY keyword_count DESC
        LIMIT 6";
    $result = mysqli_query($conn, $sql3);
    if ($result) {
        $recommended .="[";
        while ($row = mysqli_fetch_assoc($result)) {
            $research = $row['research'];
            $researchInfoQuery = "SELECT image, link, title
                                  FROM researchs
                                  WHERE research = '$research'";
    
            $researchInfoResult = mysqli_query($conn, $researchInfoQuery);
    
            if ($researchInfoResult && mysqli_num_rows($researchInfoResult) > 0) {
                $researchInfoRow = mysqli_fetch_assoc($researchInfoResult);
                $recommended .="{
                    \'title'\ : \'{$researchInfoRow['title']}\',
                    \'image'\ : \'{$researchInfoRow['image']}\',
                    \'link'\ : \'{$researchInfoRow['link']}\',
                },";
            }
        }
        $recommended .="]";
    }
}else{
    $name= null;
    $sql="SELECT image, link, title FROM researchs ORDER BY rate DESC LIMIT 6";
    $query=mysqli_query($conn,$sql);
    if ($query && mysqli_num_rows($query) > 0) {
        $rec = mysqli_fetch_assoc($query);
        $recommended .="[";
        while($d = mysqli_fetch_assoc($rec)){
            $recommended .="{
                \'title'\ : \'{$d['title']}\',
                \'image'\ : \'{$d['image']}\',
                \'link'\ : \'{$d['link']}\',
            },";
        }
        $recommended .="]";
    }
}

$sqlv="SELECT image, link, title FROM researchs ORDER BY sec DESC LIMIT 6";
$queryv=mysqli_query($conn,$sqlv);
if ($queryv && mysqli_num_rows($queryv) > 0) {
    $las = mysqli_fetch_assoc($queryv);
    $latests .="[";
    while($l = mysqli_fetch_assoc($las)){
        $latests .="{
            \'title'\ : \'{$l['title']}\',
            \'image'\ : \'{$l['image']}\',
            \'link'\ : \'{$l['link']}\',
        },";
    }
    $latests .="]";
}

$finaljson = "{
    \'name'\ : {$name},
    \'recommended'\ : {$recommended},
    \'latests'\ : {$latests}
}";

mysqli_close($conn);

die($finaljson);