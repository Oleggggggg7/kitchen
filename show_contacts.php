<?php
$db = new mysqli('localhost', 'root', '', 'cooking_courses');

if ($db->connect_error) {
    echo "<p>Ошибка подключения к базе данных</p>";
    exit;
}

$result = $db->query("SELECT * FROM `contacts` ORDER BY `created_at` DESC LIMIT 5");

if ($result->num_rows > 0) {
    echo "<ul>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>" . htmlspecialchars($row['name']) . " (" . htmlspecialchars($row['email']) . ") — " . $row['created_at'] . "</li>";
    }
    echo "</ul>";
} else {
    echo "<p>Нет записей.</p>";
}

$db->close();
?>