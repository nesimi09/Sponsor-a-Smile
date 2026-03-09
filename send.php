<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "deine@email.de";
$subject = "Neue Nachricht von der Website";

$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Nachricht:\n$message";

mail($to, $subject, $body);

echo "Danke für deine Nachricht!";
?>
