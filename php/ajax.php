<?php
$jmeno = $_GET["jmeno"];
$heslo = $_POST["heslo"];

$hash = password_hash($heslo, PASSWORD_DEFAULT);

echo "<p>Jméno: ".$jmeno."</p>";
echo "<p>Heslo: ".$heslo."</p>";
echo "<p>Hash: ".$hash."</p>";
