<?php

session_start();
?>
<html>  
    <head>  
    <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
       <meta charset = "utf-8">  
       <meta name = "viewport" content = "width = device-width, initial-scale = 1, shrink-to-fit = no">  
       <link rel = "stylesheet"   
          href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"  
          integrity = "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"   
          crossorigin = "anonymous">         
       <title> Bootstrap 4 Registration Form Example </title>  
    <style>  
  .note  
 {  
     text-align: center;  
     height: 80px;  
     background: -webkit-linear-gradient(left, #0072ff, #8811c5);  
     color: #fff;  
     font-weight: bold;  
     line-height: 80px;  
 }  
 body {  
   margin: 0;  
   font-family: 'Lato', sans-serif;  
   font-size: 12px;  
   line-height: 1.8em;  
   text-transform: none;  
   letter-spacing: .075em;  
   font-weight: bold;  
   font-style: normal;  
   text-decoration: none;  
   color: #e7bd74;  
   background-color: rgba(34,28,28);  
   display: block;  
 }  
 .title {  
   margin-top: 2rem;  
   margin-bottom: 1rem;  
 }  
 .form-content  
 {  
     padding: 5%;  
     border: 1px solid #ced4da;  
     margin-bottom: 2%;  
 }  
 .form-control {  
     border-radius: 1.5rem;  
 }  
 .btnSubmit  
 {  
     border: none;  
     border-radius: 1.5rem;  
     padding: 1%;  
     width: 20%;  
     cursor: pointer;  
     background: #0062cc;  
     color: #fff;  
 }  
 h1 {  
     font-family: sans-serif;  
   display: block;  
   font-size: 1rem;  
   font-weight: bold;  
   text-align: center;  
   letter-spacing: 3px;  
   color: rgb(105, 255, 215);  
  text-transform: uppercase;  
 padding-top: 20px;  
 }  
 a {  
   text-decoration: none;  
   color: #fff;  
 }  
 a:hover {  
   text-decoration: none;  
   color: #fff;  
 }  
   
       </style>  
    </head>  
    <body>  
    <div class="topnav">
  <a class="active" href="index.html">Home</a>
  <a href="Login.php">LOGIN</a>
  <a href="Register.php">Register</a>
  <a href="about.php">About</a>
</div>
 <div class="container login-form">  
   <form method="POST">
             <div class="form">  
                 <div class="note">  
                     <h1> Online voting Login Form </h1>  
                 </div>  
                 <div class="form-content">  
                     <div class="row">  
                         <div class="col-md-10">  
                             <div class="form-group">  
                                 
      
           
             </div> <div class="row align-items-center mt-4">  
             <div class="col">  
               <input type="text" class="form-control"  name="username" placeholder="Username *" value=""/>  
             </div>  
           </div> 
           <div class="row align-items-center mt-4">  
             <div class="col">  
             <input type="password" class="form-control" name="password" placeholder=" Password *" value=""/>  
             </div>  
           </div> 
           
          
     <div class="row justify-content-start mt-4">  
             <div class="col">  
    
                     

                     <button type="button" class="btnsubmit"><a href="welcome.php">Login</a></button>
                  
                 </div>  
                
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
             </div>  
         </div>  
         <div>
           <a href="Register.php">Register here</a>
</div>
</form>
 </body>  
 </html>  

 <?php 
$con=mysqli_connect("localhost","root","","evote");
 
    if(isset($_POST['bt1']))
    {
       if(empty($_POST['username']) && empty($_POST['password']))
       {
          echo"<script>alert('Invalid User')</script>";
       }
       else
       {
            $query="select * from userdata where username='".$_POST['username']."' and password='".$_POST['password']."'";
            $result=mysqli_query($con,$query);

            if(mysqli_fetch_assoc($result))
            {
                $_SESSION['User']=$_POST['username'];
                header('location:welcome.php');
            }
            else
            {
                echo"<script>alert('Invalid User')</script>";
            }
       }
       header('location:C:\xampp\htdocs\evote\partial\welcome.php');
      }
    
    

?>
