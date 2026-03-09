<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "nesimigashi09@gmail.com";   

$subject = "Neue Nachricht von deiner Website";

$text = "Name: " . $name . "\n";
$text .= "Email: " . $email . "\n\n";
$text .= "Nachricht:\n" . $message;

mail($to, $subject, $text);

echo "Danke für deine Nachricht!";

?>
