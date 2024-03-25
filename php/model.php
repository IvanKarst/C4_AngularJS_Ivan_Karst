<?php
$conn = new mysqli("LocalHost", "root", "", "c4");

function sql_load($sql, $cn = null){
    if ($cn === null){
        global $conn;
        $cn = $conn;
    }
    if ($cn->query($sql) === TRUE) {
        return true;
    } else {
        return json_encode("Error: " . $sql . "<br>" . $cn->error);
    }
}
function add_person($data) {
    $sql = "INSERT INTO `people`(`firstname`, `lastname`, `street`, `housenumber`, `postalcode`, `residency`, `phonenumber`) VALUES ('".$data['firstname']."', '".$data['lastname']."', '".$data['street']."', '".$data['housenumber']."', '".$data['postalcode']."', '".$data['residency']."', '".$data['phonenumber']."')";
    sql_load($sql);
}
function alt_data($data){
    $sql = "UPDATE ` people` SET `firstname`='".$data['firstname']."', `lastname`='".$data['lastname']."', `street`='".$data['street']."', `housenumber`='".$data['housenumber']."', `postalcode`='".$data['postalcode']."', `residency`='".$data['residency']."', `phonenumber`='".$data['phonenumber']."'";
    sql_load($sql);
}
function create_table(){
    $sql = 'CREATE TABLE `people` (
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
    COMMIT;';
    sql_load($sql);
}