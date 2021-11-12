<?php

class Kino {

    // zmienna przechowująca połączenie z bazą danych
    protected $db;

    // przypisanie przekazanego połączenia z bazą w celu uniknięcia zmiennych globalnych
    public function __construct($db) {
        $this->db = $db;
    }

    // zwraca informacje o danym użytkowniku, a jeśli nie jest zalogowany i nie podano ID, zwraca fałsz
    public function uzytkownik($uid = null) {
        if(!isset($_SESSION['uid']) && $uid==null)
            return false;
        $uid = (($uid==null)?intval($_SESSION['uid']):intval($uid));
        
    }

    // sprawdza, czy użytkownik jest zalogowany
    public function czyZalogowano() {
        return isset($_SESSION['uid']);
    }

    // loguje użytkownika
    public function zaloguj($login, $haslo) {
        $login = $this->sanitize($login);
        $tmp = $this->db->query("SELECT id, password FROM users WHERE login = '$login'");
        if (!$tmp->num_rows)
            return false;
        $userData = $tmp->fetch_assoc();
        if(md5(sha1($haslo))==$userData['password']) {
            $_SESSION['uid'] = $userData['id'];
            return true;
        } else
            return false;
    }

    // oczyszcza stringa w celu uniknięcia SQL Injection
    public function sanitize($string) {
        return $this->db->real_escape_string($string);
    }

    // wylogowuje użytkownika lub niszczy sesję
    public function wyloguj($zniszcz_sesje = false) {
        if($zniszcz_sesje) {
            session_destroy();
            session_start();
        } else
            unset($_SESSION['uid']);
        return true;
    }



}
