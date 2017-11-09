 <?php 
 
 $name = $_POST["first_name"];
 $email = $_POST["email"];
 $message = $_POST["comments"];
 $subject = "New Message";
 mail("kawaiikid47@gmail.com",$subject,$message);
 ?>