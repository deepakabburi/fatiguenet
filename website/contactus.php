<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>contact us</title>
</head>

<body>

<form method="post">
  Email:&nbsp;&nbsp;&nbsp;<input name="email" type="text" />
<br />
<br/>
  Subject: <input name="subject" type="text" /><br />
</br>
  Message:<br />
  <textarea name="comment" rows="15" cols="40"></textarea><br />
  <input type="submit" value="Submit" />
  </form>
  

<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "contact@fatiguenet.com";
$admin_email1 = "spcreddy@gmail.com";
$admin_email2 = "daniel.kujawski@wmich.edu";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];
  
  //send email
  mail($admin_email, "$subject", $comment, "From:" . $email);
mail($admin_email1, "Someone is contated you on fatiguenet.com ", "you have new mail at your inbox in contact@fatiguenet.com ", "From:" . "fatiguenet@gmail.com");
mail($admin_email2, "Someone is contated you on fatiguenet.com ", "you have new mail at your inbox in contact@fatiguenet.com ", "From:" . "fatiguenet@gmail.com");
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
?>

 
<?php
  }
?>
</body>
</html>