<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
include('model.php');

if($conn->connect_error){
	die('Connection failed.<br/> Error: '. $conn->connect_error);
}

function get_data($items, $table){
	global $conn;
	$result = $conn->query('SELECT '.$items.' FROM '. $table);

	if(!$result){
		die('Query failed.<br/> Error: '.$conn->error);
	}

	while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
		$outp[] = $rs;
	}

	$conn->close();

	echo json_encode(array("records" => $outp));
}