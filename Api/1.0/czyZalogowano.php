<?php

header("Content-type: text/plain");
require '../sys/sys.php';
if($kino->czyZalogowano())
echo '{
    "success": true
}';
else 
echo '{
    "success": false
}';

?>