<?php header('Access-Control-Allow-Origin: *');
    include('connection.php');
    logarUsuario($_POST['email'], $_POST['senha']);
?>