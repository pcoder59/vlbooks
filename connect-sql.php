<?php
$servername = "localhost";
$username = "vlbooks";
$password = "pvlbooksrrPs123@rr";
$database = "vlbooks";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected Successfully";
} catch(PDOException $e) {
    echo "Connection Failed: ".$e->getMessage();
}