<?php

$connect = mysql_connect("localhost","root","");

mysql_select_db("quiz",$connect);


$q = mysql_query("SELECT * FROM ques ");
$numrows = mysql_num_rows($q);

while($row = mysql_num_rows($q)){

	$ques = $row['question'];
	$op1 = $row['op1'];
	$op2 = $row['op2'];


}

echo "<p>".$ques."</p>";
echo  "<p>".$op1."</p>";
echo "<p>".$op2."</p>";






















?>