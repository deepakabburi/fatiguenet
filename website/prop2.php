<?php
$q = intval($_GET['q']);

 $con=mysql_connect("localhost","trail","trail");
             mysql_select_db("mytest",$con) ;                     
             $rat="UPDATE input SET num = '".$q."' WHERE 1";
             mysql_query($rat,$con);
             $rat="SELECT * FROM material WHERE num = '".$q."'";
             $result=mysql_query($rat,$con);
             while($row = mysql_fetch_array($result)) {
              echo $row['so'] ;
              echo "\n";
              echo $row['su'];
               echo "\n";
              echo $row['E'];
               echo "\n";
              echo $row['H'];
               echo "\n";
              echo $row['n'];
               echo "\n";
              echo $row['sf'];
               echo "\n";
              echo $row['b'];
               echo "\n";
              echo $row['ef'];
               echo "\n";
              echo $row['c'];
             echo "\n";
              echo $row['gamma'];
             
             }
              mysql_close($con);  
?>
