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
?>