<?php
include("../connect-sql.php");

$bookid = $_POST["bookid"];

$stmt = $conn->prepare("select bookname, author, categories, article, published, publisher from book where bookid = ?");
$stmt->bind_param("s",$bookid);
$stmt->execute();

$return_arr = array();

$result = $stmt->get_result();

if($result->num_rows == 0) {
    echo "0";
    die();
}

while($row = $result->fetch_assoc()) {
    $bookname = $row['bookname'];
    $author = $row['author'];
    $categories = $row['categories'];
    $article = $row["article"];
    $publisher = $row["publisher"];
    $published = $row["published"];
    $categories = explode(",", $categories);

    $return_arr[] = array("bookname" => $bookname,
                        "author" => $author,
                        "categories" => $categories,
                        "article" => $article,
                        "publisher" => $publisher,
                        "published" => $published);
}

echo json_encode($return_arr);