<?php
$servername = "localhost";
$username = "vlbooks";
$password = "pvlbooksrrPs123@rr";
$database = "vlbooks";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";