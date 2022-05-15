<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->IsHTML(true);

$mail->setFrom('igorvippzone@mail.ru', 'nadpro');

$mail->addAddress('igorvippzone@gmail.com')

$mail->Subject = 'Feedback'

if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>'
}

if(trim(!empty($_POST['email']))){
  $body.='<p><strong>E-mail: </strong> '.$_POST['email'].'</p>'
}

if(trim(!empty($_POST['phone']))){
  $body.='<p><strong>Телефон: </strong> '.$_POST['phone'].'</p>'
}

$mail->Body = $body;

if (!$mail->send()) {
  $message = 'Ошибка';
}else{
  $message = 'Данные отправлены!'
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>