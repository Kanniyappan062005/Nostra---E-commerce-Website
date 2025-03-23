<?php
include 'db.php';

// Sanitize and validate form inputs
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$msg = trim($_POST['msg']);

if (!preg_match("/^[a-zA-Z\s]+$/", $name)) {
    die("Invalid name format.");
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
}
if (empty($msg)) {
    die("Message cannot be empty.");
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $msg);

if ($stmt->execute()) {
    echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
