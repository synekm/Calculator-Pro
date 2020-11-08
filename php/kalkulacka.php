<?php

require_once "config.php";

$db = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

if(isset($_GET["cislice"]))
{
    $cislice = $_GET["cislice"];

    mysqli_query($db, "UPDATE 3ep_kalkulacka SET pocet = pocet + 1 WHERE cislice = '$cislice'");
}
else
{
    mysqli_query($db, "UPDATE 3ep_kalkulacka SET pocet = 0");
}

$tabulka = mysqli_query($db, "SELECT cislice, pocet FROM 3ep_kalkulacka ORDER BY cislice ASC");

while($radek = mysqli_fetch_assoc($tabulka))
    $data[] = $radek;

echo json_encode($data);
