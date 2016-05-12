<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="style.css">
</head>

<body>

<?php
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$age=$_POST['age'];
$occupation=$_POST['occupation'];
$email=$_POST['email'];
?>

<p>You answered:</p>

<?php
echo $firstname.'First name<br>';
echo $lastname. 'Last name<br>';
echo $age. 'Age<br>';
echo $occupation. 'Occupation<br>';
echo $email. "Email<br>";
?>
</body>
</html>





