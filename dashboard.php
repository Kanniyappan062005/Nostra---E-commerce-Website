<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: log-in.html");
    exit();
}
echo "Welcome! You are logged in.";
?>
<a href="logout.php">Logout</a>
