<?php 
if($_SERVER['REMOTE_ADDR'] == "::1")
    phpinfo();
else
    echo "<h1>403 Forbidden</h1>you thought bozo";    
?>