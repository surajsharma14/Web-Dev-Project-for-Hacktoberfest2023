<?php
session_start();

?>

<html>
    <head><h1 align="center"><u><marquee>Welcome In Online Voting System /evote-electronic voting for increasing voting rate of voting </marquee></u> </head>
    <body bgcolor='lightblue'>
<img src="matdan.jpg" height="700" width="800" align="right">
        <table colspan="2">
            
            <tr>
   <td> <img src="elephant.jpg" height="220" width="240" align="left"></td>
  
<td><input type="submit" name="button1"class="button" value="Active" /> </td>
</tr></br>
<tr>

<td>
    <img src="bjp.jpg" height="220" width="240" align="left">
</td>
<td>  <input type="submit" name="button2"class="button" value="Active" /> 
</td>
</tr>
<tr>
<td>
    <img src="congress.jpg" height="200" width="240" align="left">
</td>
<td><input type="submit"  name="button3" class="button" value="Active"></td>
</tr>


</table>




    </body>
    </html>

    <?php

if(isset($_POST['button2']))
{
   
    $con=mysqli_connect("localhost","root","","evote");
    $r=mysqli_query($con,"select *from voting");
   $a="Congress";
 
    $r=mysqli_query($con,"insert into voting values('$a')");
    echo("<script>alert('record save')</script>");
    
  echo"your vote is done";

    
}
if(array_key_exists('button1', $_POST)) { 

    button1(); 

} 

else if(array_key_exists('button2', $_POST)) { 

    button2(); 

} 
else if(array_key_exists('button3', $_POST)) { 

    button3(); 

} 
function button1() { 

    echo "This is Button1 that is selected"; 

} 

function button2() { 

    echo "This is Button2 that is selected"; 

}
function button3() { 

    echo "This is Button3 that is selected"; 

}
?>