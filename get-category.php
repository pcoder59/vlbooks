<?php
include("connect-sql.php");

$category = $_POST["category"];

$stmt = $conn->prepare("select bookid, bookname, author, categories from books where categories like %?%");
$stmt->bind_param("s", $category);
$result = $stmt->execute();