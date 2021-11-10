<?php
/*

Kino Nierodka
Część systemowa back-endu
by M. Pasierbski, J. Siodłak, P. Paszek

*/

require 'config.php';

$db = @new MySQLi($config['db_host'], $config['db_user'], $config['db_pass'], $config['db_name']);

if($db->errno)
    die("Wystąpił błąd połączenia z bazą danych. Przepraszamy za niedogodność");

 
?>