<?php
$uploadDir = 'images/';
$title = $_POST['title'];
$link = $_POST['link'];
$relatives = $_POST['relatives'];
$keywords = explode(",",strtolower($_POST['keywords']));

require 'db.php';

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    $charLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charLength - 1)];
    }

    return $randomString;
}

if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $fileName = $_FILES['image']['name'];
    $tempFilePath = $_FILES['image']['tmp_name'];

    $uniqueFilename = $uploadDir . uniqid('image_', true) . '_' . $fileName;

    if (move_uploaded_file($tempFilePath, $uniqueFilename)) {
        echo "Image uploaded successfully.";
        $key = generateRandomString();
        if(mysqli_query($conn,"INSERT INTO researches ('title','link','image','key','relatives') VALUES ('{$title}','{$link}','{$uniqueFilename}'),'{$key}','{$relatives}'")){
            $lastid = mysqli_insert_id($conn);
            for($i=0;$i<count($keywords);$i++){
                mysqli_query($conn,"INSERT INTO keywords ('research','word') VALUES ('{$lastid}','{$$keywords[$i]}'");
            }
        }
    } else {
        echo "Error uploading image.";
    }
} else {
    echo "Invalid file or file upload error.";
}
?>
