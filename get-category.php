<?php
include("connect-sql.php");

$category = $_POST["category"];

$stmt = $conn->prepare("select bookid, bookname, author, categories from books where categories like %?%");
$stmt->bind_param("s", $category);
$stmt->execute();

$return_arr = array();

$result = $stmt->get_result();

if($result->num_rows == 0) {

}

while($row = $result->fetch_assoc()) {
    $bookid = $row['bookid'];
    $bookname = $row['bookname'];
    $author = $row['author'];
    $categories = $row['categories'];
    $categories = $categories.split(',');

    $return_arr = array("bookid" => $id,
                        "bookname" => $bookname,
                        "author" => $author,
                        "categories" => $categories);
}

echo json_encode($return_arr);