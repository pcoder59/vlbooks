<?php
$category = $_POST["category"];

$sql = "select bookid, bookname, author, categories from books where categories like %$category%";