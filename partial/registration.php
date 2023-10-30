<?php

$con=mysqli_connect("localhost","root","","evote");
$r=mysqli_query($con,"select *from userdata");
if (isset($_POST['btn1']))
{
$username=$_POST['username'];
$mobile=$_POST['mobile'];
$password=$_POST['password'];
$cpassword=$_POST['cpassword'];
$standard=$_POST['standard'];
$r=mysqli_query($con,"insert into userdata(username,mobile,password,cpassword,standard) values('$username','$mobile','$password','$cpassword','$standard')");
echo("<script>alert('record save')</script>");
}
?>
