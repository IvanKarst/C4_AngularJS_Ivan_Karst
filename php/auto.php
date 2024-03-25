<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
require('model.php');

if($conn->connect_error){
    die('Connection failed.<br/> Error: '. $conn->connect_error);
}

try {
    $result = $conn->query("SELECT 1 FROM `people` LIMIT 1");
} catch (Exception $e){
	create_table();
    $created = 'table \'personen\' created';
}

$result = $conn->query('SELECT * FROM `people`');
if(!$result){
    die('Query failed.<br/> Error: '.$conn->error);
}
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    $outp[] = $rs;
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $decoded = json_decode(file_get_contents('php://input'), true);

    switch($decoded['form_action']){
        case 'alter_data': 
            alt_data($decoded);
            echo json_encode(array("result" => "success"));
            break;
        case 'add_person':
            add_person($decoded);
            echo json_encode(array("result" => "success"));
            break;
		default:
			echo json_encode(array("error" => "no recognized form"));
			break;
    }
} else {
    echo json_encode(array("records" => $outp));
}
?>
