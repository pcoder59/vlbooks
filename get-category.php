<?php
include("connect-sql.php");

$category = $_POST["category"];

try {
    $stmt = $conn->prepare("select bookid, bookname, author, categories from books where categories like %?%");
    $stmt->bind_param("s", $category);
    $stmt->execute();

    $return_arr = array();

    $result = $stmt->get_result();
    
    if($result->num_rows == 0) {

    }

    while($row = $result->fetch_assoc()) {
        
    }
}

