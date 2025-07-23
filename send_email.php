<?php
/*if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем и проверяем данные
    $name = trim(htmlspecialchars($_POST['name']));
    $email = trim(htmlspecialchars($_POST['email']));
    
    if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: contact.php?status=invalid');
        exit;
    }

    // Сохраняем в БД
    $db = new mysqli('localhost', 'root', '', 'cooking_courses');
    if ($db->connect_error) {
        file_put_contents('email_errors.log', "DB Error: " . $db->connect_error . "\n", FILE_APPEND);
    } else {
        $name_db = $db->real_escape_string($name);
        $email_db = $db->real_escape_string($email);
        $sql = "INSERT INTO `contacts` (`name`, `email`) VALUES ('$name_db', '$email_db')";
        $db->query($sql);
        $db->close();
    }

    // Настройки письма
    $to = $email;
    $subject = 'Спасибо за обращение!';
    $message = "Привет, $name!\n\nМы получили ваши данные. Это автоматическое письмо. Не расстраивайтесь, когда-нибудь вы обязательно научитесь готовить!";
    $headers = "From: no-reply@allhusky.ru\r\n";
    $headers .= "Reply-To: no-reply@allhusky.ru\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Логирование перед отправкой
    file_put_contents('email_attempts.log', "Attempting to send to: $email\n", FILE_APPEND);

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        file_put_contents('email_success.log', "Sent to: $email\n", FILE_APPEND);
        header('Location: contact.php?status=success');
    } else {
        $last_error = error_get_last();
        file_put_contents('email_errors.log', "Failed to send to $email. Error: " . print_r($last_error, true) . "\n", FILE_APPEND);
        header('Location: contact.php?status=error');
    }
    exit;
}*/
?>