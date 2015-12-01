<?php
$connection = mysql_connect("localhost", "root", ""); // Establishing connection with server..
$db = mysql_select_db("college", $connection); // Selecting Database.
$email=$_POST['email1']; // Fetching Values from URL.
$password= sha1($_POST['password1']); // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not
$carbon=$_POST['carbon1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "Invalid Email.......";
}else{
// Matching user input email and password with stored email and password in database.
    $result = mysql_query("SELECT * FROM registration WHERE email='$email' AND password='$password'");
    $data = mysql_num_rows($result);


    if($data==1){
        $query = mysql_query("insert into registration(carbon) values ('$carbon') WHERE email='$email'");
        $id = mysql_result(mysql_query("SELECT carbon FROM registration WHERE email='$email' LIMIT 1"),0);
        echo "Your current carbon emissions are: " . $id ;
    }else{
        echo "Email or Password is wrong...!!!!";
    }
}
mysql_close ($connection); // Connection Closed.
?>