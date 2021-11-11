<?php

header("Content-type: text/plain");
require '../sys/sys.php';
if(isset($_POST['login']) && isset($_POST['haslo'])) {
$login = $kino->db->real_escape_string($_POST['login']);
if($kino->czyZalogowano())
echo '{
    "success": false,
    "error_msg": "Użytkownik jest już zalogowany"
}';
else if($kino->zaloguj($login, $haslo))
echo '{
    "success": true
}';
else
echo '{
    "success": false,
    "error_msg": "Niepoprawny login lub hasło"
}';
} else
echo '{
    "success": false,
    "error_msg": "Błąd wewnętrzny: brak parametru 'login' lub 'haslo'"
}';
?>