<?php
header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json; charset=UTF-8');
include('model.php');

if($conn->connect_error){
	die('Connection failed.<br/> Error: '. $conn->connect_error);
}

try {
	$result = $conn->query("SELECT 1 FROM `people` LIMIT 1");
} catch (Exception $e){
	$conn->multi_query('
		CREATE TABLE `people` (
			`id` int(255) NOT NULL,
			`firstname` varchar(30) NOT NULL,
			`lastname` varchar(30) NOT NULL,
			`street` varchar(50) NOT NULL,
			`housenumber` varchar(5) NOT NULL,
			`postalcode` varchar(6) NOT NULL,
			`residency` varchar(30) NOT NULL,
			`phonenumber` int(10) NOT NULL,
			`timeadded` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
	
		ALTER TABLE `people` ADD PRIMARY KEY (`id`);
	
		ALTER TABLE `people` MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
		COMMIT;
	');
	$created = 'table \'personen\' created';
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