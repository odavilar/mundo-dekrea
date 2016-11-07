<?php

header('Content-type: text/html; charset=utf-8');
$nombre = $_POST["nombre"];
$tel = $_POST["celular"];
$correo = $_POST["correo"];
$answer = $_POST["answer"];

$nameErr = "";
$emailErr = "";

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if (empty($nombre)) {
    $nameErr = "Nombre es requerido";
} else {
    $nombre = test_input($nombre);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $nameErr = "Solo letras y espacios son permitidos en el nombre";
        echo "Solo letras y espacios son permitidos en el nombre.";
		exit;
    }
}

if (empty($correo)) {
    $emailErr = "Email es requerido";
} else {
    $correo = test_input($correo);
    // check if e-mail address is well-formed
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Formato de email inválido";
        echo "Formato de email inválido.";
		exit;
    }
}

if ($answer == 0) {
    $comentario = "
	Tu resultado del Diagnóstico Administrativo: Excelente<br><br>

	Retroalimentación<br>
	¡Felicidades! Has hecho un buen trabajo al escoger los servicios para tu consulta.<br>
	Si deseas tener una integración de tus servicios y contar con un aliado que te ayude a crecer y liberar tiempo, no dudes en contactarnos.<br><br>
	Para más información contáctanos a info@grupoaevitas.com o responde a este mensaje.
	";
} else if ($answer == 1) {
    $comentario = "
	Tu resultado del Diagnóstico Administrativo: Aceptable<br><br>

	Retroalimentación<br>
	Hemos detectado varias áreas de mejora en la administración de tu consultorio.<br>
	Si estás buscando un aliado que te ayude a mejorar la administración y crecer tu consulta, no dudes en contactarnos.<br><br>
	Para más información contáctanos a info@grupoaevitas.com o responde a este mensaje.
	";
} else if ($answer == 2) {
    $comentario = "
	Tu resultado del Diagnóstico Administrativo: Malo<br><br>
	
	Retroalimentación<br>
	Hemos detectado varias áreas de riesgo en la administración de tu consultorio que requieren atención.<br>
	Si estás buscando un aliado que te ayude a mejorar la administración y crecer tu consulta, no dudes en contactarnos.<br><br>
	Para más información contáctanos a info@grupoaevitas.com o responde a este mensaje.
	";
} else {
    $comentario = "";
}

if ($emailErr == "" && $nameErr == "") {
    $mensaje = "Nombre: " . $nombre . "<br><br>Teléfono :" . $tel . "<br><br>Email: " . $correo . "<br><br>Mensaje:" . $comentario . "<br>";

    $cabecera = 'From: info@xxx.com' . "\r\n" .
            'Reply-To: info@xxx.com' . "\r\n" .
			'Bcc: info@xxx.com' . "\r\n" . 
            'Content-type: text/html;charset=utf8' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();


    if ($nombre != "" && $tel != "" && $correo != "" && $comentario != "") {
        if (mail($correo, "Diagnóstico Administrativo", $mensaje, $cabecera)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Su mensaje ha sido enviado.";
        } else {
            echo "Su mensaje no se pudo enviar, porfavor intente de nuevo.";
        }
    } else {
        echo "Debe llenar todos los campos.";
    }
}
?>
