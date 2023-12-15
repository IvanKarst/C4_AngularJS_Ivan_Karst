<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');


$outp = array();
$conn = new mysqli('localhost', 'root', '', 'C4');

if($conn->connect_error){
	die('Connection failed.<br/> Error: '. $conn->connect_error);
}

$result = $conn->query('SELECT * FROM Customers');

if(!$result){
	die('Query failed.<br/> Error: '.$conn->error);
}

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	$outp[] = $rs;
}

$conn->close();

echo json_encode(array("records" => $outp));