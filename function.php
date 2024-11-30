<?php
session_start();
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'support@hrmark.me';                     //SMTP username
    $mail->Password   = 'Ayoub@1234';
    $mail->CharSet = 'UTF-8';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('support@hrmark.me',$_POST['email']);
    $mail->addAddress('ceo@hrmark.me',$_POST['email']);     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "زبون يريد شراء";
  	$mail->Body = "<div dir='rtl' style='text-align: right;'><h1>رسالة من أجل اختيار باقة </h1></br><ul style='font-size: 18px; '>
	<li><b>اسم: </b>".$_POST['nom']." </li>
	<li><b>اسم الشركة: </b>".$_POST['nomentreprise']." </li>
  <li><b>بريد الالكتروني: </b>".$_POST['email']." </li>
  <li><b>الباقة: </b>".$_POST['ra']." </li>
  <li><b> رقم الهاتف: </b>".$_POST['subject']." </li>
  <li><b>الرسالة : </b>".$_POST['message']." </li>
	</ul> </div>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

     $mail->send();
	$_SESSION['statu']="تم إرسال طلبك بنجاح";
		header("Location:index.php");


} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}




?>





//Finally send email sifat 

//Closing smtp connection
	//$mail->smtpClose();