<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$suggestion = $_POST['suggestion'];



// Database connection
$conn = new mysqli('127.0.0.1:3306', 'u579474593_port', 'Port@123456789', 'u579474593_port');
if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into formdata(firstName, lastName, email, suggestion) values(?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $suggestion);
    $execval = $stmt->execute();
    echo $execval;
    echo 'registration successful';
    header("Location: http://www.toshankanwar.in/contact");
    $stmt->close();
    $conn->close();
}
?>