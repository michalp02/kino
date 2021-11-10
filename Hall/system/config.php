<?php
/*

Kino Nierodka
Konfiguracja podczęści systemowej kina
by M. Pasierbski, J. Siodłak, P. Paszek

*/

// Konfiguracja bazy danych
$config['db_host'] = 'localhost';
$config['db_user'] = 'root';
$config['db_pass'] = '';
$config['db_name'] = 'kino';

// Nie zmieniaj kodu poniżej

$db = @new MySQLi($config['db_host'], $config['db_user'], $config['db_pass'], $config['db_name']);

if($db->errno)
    die("Wystąpił błąd połączenia z bazą danych. Przepraszamy za niedogodność");

?>