<?php

class Kino {

    protected $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function uzytkownik($uid = nul) {
        $uid = (($uid==null)?intval($_SESSION['uid']):intval($uid));
    }

    public function czyZalogowano() {
        return isset($_SESSION['uid']);
    }

    public function zaloguj($login, $haslo) {
        $login = $this->db->real_escape_string($login);
        $tmp = $this->db->query("SELECT id, password FROM users WHERE login = '$login'");
        if (!$tmp->num_rows)
            return false;
        $userData = $tmp->fetch_assoc();
        if($password==md5(sha1($userData['password']))) {
            $_SESSION['uid'] = $userData['id'];
            return true;
        } else
            return false;
    }

    public function sanitize($string) {
        return $this->db->real_escape_string($string);
    }

}
