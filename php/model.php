<?php
$conn = new mysqli("LocalHost", "root", "", "c4");
$add_person = "INSERT INTO `people`(`firstname`, `lastname`, `street`, `housenumber`, `postalcode`, `residency`, `phonenumber`) VALUES ";
function alt_data($data){
    return "UPDATE ` people` SET `firstname`='".$data['firstname']."', `lastname`='".$data['lastname']."', `street`='".$data['street']."', `housenumber`='".$data['housenumber']."', `postalcode`='".$data['postalcode']."', `residency`='".$data['residency']."', `phonenumber`='".$data['phonenumber']."'";
}