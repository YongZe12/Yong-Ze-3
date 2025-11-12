<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && !empty($_POST["feedback"])) {
    $feedback = trim($_POST["feedback"]);
    
    // Example: Save to file (append)
    $file = fopen("feedbacks.txt", "a");
    fwrite($file, date("Y-m-d H:i:s") . " | " . $feedback . "\n");
    fclose($file);
    
    // You may also send email, save to database, etc.
    echo "<h2>Thank you for your feedback!</h2>";
    echo "<a href='index.html'>Back to site</a>";
} else {
    echo "<h2>Feedback not received. Please go back and try again.</h2>";
    echo "<a href='index.html'>Back to site</a>";
}
?>