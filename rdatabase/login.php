<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Database connection
    $servername = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbName = "registration_system"; // Replace with your database name

    $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Add your login logic here
    // For example, you can run a SELECT query to check if the provided username and password match in your database.

    // For demonstration purposes, let's assume user authentication is successful.
    $user_authenticated = true;

    if ($user_authenticated) {
        // User is authenticated, set up the session and redirect to the welcome page
        session_start(); // Start the PHP session
        $_SESSION['username'] = $username; // Store the username in the session
        header("Location: welcome.html");
        exit();
    } else {
        echo "Invalid username or password. Please try again.";
    }

    $conn->close();
}
?>
