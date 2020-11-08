<?php
$data = json_decode($_POST["data"]);

$data->hash = password_hash($data->heslo, PASSWORD_DEFAULT);

echo json_encode($data);
