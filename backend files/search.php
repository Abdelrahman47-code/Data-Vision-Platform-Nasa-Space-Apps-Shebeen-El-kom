<?php

require 'db.php';


$sql = "SELECT research
FROM keywords
WHERE word IN ($_POST['keywords'])
GROUP BY research
ORDER BY keyword_count DESC";

$res = array();

if(!$query = mysqli_query($conn,$sql)){
    while($row = mysqli_fetch_assoc($query)){
        for($i=0;$i<mysqli_num_rows($query);$i++){
            $res[] = "{
				'title': '{$row['title']}',
				'image': '{$row['image']}',
				'link': '{$row['link']}'
			}";
        }
    }
}

echo implode(",",$res);