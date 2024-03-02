<?php
?firstname = $_POST["Name"];
?email = $_POST["Email"];
?number = $_POST["Number"];
?message = $_POST["Your message"];
 $conn = mysqli_connect("portfolio", "root", "", "portfolio_details") or die("connection failed");
 $sql = "INSERT INTO portfolio(Name, Email, Number, Your message) VALUES ('{$Name}','{$Email}','{$Number}','{$Your message}' )";
 
 $result =mysqli_query($conn, $sql) or die("Query Failed");

?>