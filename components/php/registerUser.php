<?php header('Access-Control-Allow-Origin: *');
    include('connection.php');
    inserirUsuario($_POST['nome'], $_POST['email'], $_POST['telefone'], $_POST['senha'], md5(1), $_POST['cpf'], $_POST['cep'], $_POST['id_servico'], $_POST['nivel']);
?>