<?php
$conn = new mysqli("LocalHost", "root", "", "c4");
function add_person($data) {
    return "INSERT INTO `people`(`firstname`, `lastname`, `street`, `housenumber`, `postalcode`, `residency`, `phonenumber`) VALUES (".$data['firstname'].",".$data['lastname'].",".$data['street']."".$data['housenumber'].",".$data['postalcode'].",".$data['residency'].", ".$data['phonenumber'].")";
}
function alt_data($data){
    include($conn);
    $conn->query("UPDATE ` people` SET `firstname`='".$data['firstname']."', `lastname`='".$data['lastname']."', `street`='".$data['street']."', `housenumber`='".$data['housenumber']."', `postalcode`='".$data['postalcode']."', `residency`='".$data['residency']."', `phonenumber`='".$data['phonenumber']."'");
}