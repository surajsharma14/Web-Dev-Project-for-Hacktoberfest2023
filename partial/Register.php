<html lang = "en">  
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
  <a class="active" href="">Home</a>
  <a href="Login.php">LOGIN</a>
  <a href="Register.php">Register</a>
  <a href="about.php">About</a>
</div>
 <div class=container register-form >  
             <div class="form ">  
                 <div class="note">  
                     <h1> Online voting Regisration Form </h1>  
                 </div>  
                 <div class="form-content"> 
                   <form action ="registration.php" method="POST" enctype="multipart/form-data"> 
                     <div class="row align-items-center mt-4">  
                         <div class="col">  
                             <div class="form-group">  
                                 <input type="text" class="form-control" name="username" placeholder=" Enter UserName *" value="" required/>  
                             </div>  
                             <div class="row align-items-center mt-4">         
                         <div class="col">  
                     <div class="form-group">  
                                 <input type="text" class="form-control"  name="mobile" placeholder=" Adhar No.*" value=""required/> 
                                  
                             </div>  
                         </div> 
                      </div>
                             <div class="row align-items-center mt-4">         
                         <div class="col">  
                             <div class="form-group">  
                                 <input type="password" class="form-control"  name="password" placeholder=" Password *" value=""required/>  
                             </div> 
                             <div class="row align-items-center mt-4"> 
                             <div class="col">
                             <div class="form-group">  
                                 <input type="password" class="form-control"  name="cpassword" placeholder="Confirm Password *" value=""required/>  
                             </div>  
                         </div>  
                     </div> 
     
           
           <div class="row align-items-center mt-4">  
             <div class="col"> 
             <div class="form-group"> 
               <select name="standard" class="form-control w-100  m-auto"  >
                 <option value="group">Group</option>
                 <option value="voter">Voter</option>
              </select>  
             </div>  
           </div>  
        </div>
     <div class="row justify-content-start mt-4">  
             <div class="col">  
              
                     <button type="submit" class="btnSubmit" name="btn1"> Submit </button>  
                 </div>  
             </div>  
         </div>  
 </body>  
 </html>  

 