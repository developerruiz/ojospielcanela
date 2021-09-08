<?php

$destinatario = 'iruiz@frasancolors.com';
// esto es al correo al que se enviara el mensaje

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$header = "enviado desde la pagina fransanco";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nEmail: " . $email . "\nTelefono" . $telefono;

mail($destinatario, $telefono, $mensajeCompleto, $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='contacto.html'\",1000)</script>";
?>