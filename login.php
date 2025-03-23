<?php
include 'db.php';
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) { 
        // User exists, check password
        $stmt->bind_result($id, $hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $id;
            echo "<script>alert('Login successfully!'); window.location.href='index.html';</script>";
            exit();
        } else {
            echo "<script>alert('Incorrect password!'); window.location.href='log-in.html';</script>";
            exit();
        }
    } else {
        // User is not registered
        echo "<script>alert('You are not registered! Please sign up first.'); window.location.href='sign-up.html';</script>";
        exit();
    }
    $stmt->close();
}
$conn->close();
?>
