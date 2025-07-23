<?php
$db = new mysqli('localhost', 'root', '', 'cooking_courses');

if ($db->connect_error) {
    die("Ошибка подключения: " . $db->connect_error);
}

$name = $db->real_escape_string($_POST['name']);
$email = $db->real_escape_string($_POST['email']);

$sql = "INSERT INTO `contacts` (`name`, `email`) VALUES ('$name', '$email')";

if ($db->query($sql)) {
    header("Location: contact.php?status=success");
} else {
    header("Location: contact.php?status=error");
}

$db->close();
?>