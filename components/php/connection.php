<?php header('Access-Control-Allow-Origin: *');
	$db_json = file_get_contents("../../config/config.json");
	$db_data = json_decode($db_json);
    $server = $db_data->development->host;
	$username = $db_data->development->username;
	$pass = $db_data->development->password;
	$db = $db_data->development->database;

	//If connection failed returns error, else returns nothing
	$conn = new mysqli($server, $username, $pass, $db);
	if ($conn->connect_error) {
 	 die("Connection failed: " . $conn->connect_error);
	}

	function inserirUsuario($nome, $email, $telefone, $senha, $status, $cpf, $cep, $id_servico, $nivel){
		$query = "SELECT * FROM tb_usuarios WHERE email = '$email'";
		$return = $GLOBALS['conn']->query($query);
		if($return->num_rows == 0){
			$dataAtual = new DateTime();
			$query = "INSERT INTO tb_usuarios VALUES (null, '$nome', '$email', '$telefone', '$senha', '$status', '$cpf', '$cep', $id_servico, $nivel, '".$dataAtual->format('Y-m-d H:i:s')."', '".$dataAtual->format('Y-m-d H:i:s')."')";
			if($GLOBALS['conn']->query($query)){
				echo "Usuario Inserido";
			}
			else{
				echo "Error!!";
			}
		}
		else if($return->num_rows == 1){
			$usuario = mysqli_fetch_assoc($return);
			if($usuario['status'] != 1){
				echo "Usuario já existente porém não verificado!";
			}
			else{
				echo "Usuario já existente e verificado!";
			}
		}
	}
?>