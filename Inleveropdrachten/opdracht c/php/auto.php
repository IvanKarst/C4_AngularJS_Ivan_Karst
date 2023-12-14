<?php
include('model.php');
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");



$result = $conn->query("SELECT * FROM Customers");

$outp = array();
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    Array_Push($outp, $rs);
}

return $outp;
?> 