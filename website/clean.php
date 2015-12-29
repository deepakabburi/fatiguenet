 <html>
 <head>
<meta charset="utf-8">
 <title> Clean Up</title>
 <script  src="mycleanup.js">
 </script>
 </head>
<body>
<div align="center" style="background-color: #F0F0F0; color:#F02020" border="0">
<p>Spectrum Analysis Educational version allows up to 100 points to clean up</p>
</div>
<div id="main" style="opacity:1">
<table style="border-radius:10px" height="430px" width="920px" border="0" margin="0" cellpadding="0" cellspacing="0">
<tr height="200">
<td valign="top" width="200">
<br>
<input type="radio" name="ip" id="inp1" value="1" Checked>  Raw Data File<br>
<input type="radio" name="ip" id="inp2" value="2"  > Cleaned file <img src="info1.png" onclick="myhelp1()"><br>
<br>
<input type="file" id="file1" accept=".Txt" onchange="myupload()"></input> <br>
<a href="spectrum.txt" download>Download sample file</a>
<br>
<br>
<input type="checkbox" onclick="myclick()" id="myCheck">Remove Turning Points<img src="info1.png" onclick="myhelp2()"> <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Delta;<sub>th</sub> Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" id="th" Size="10" maxlength="10" disabled="disabled"><br>
</td>
<td width="150" valign="top">

<div id="out1" style="
margin: 0; padding: 0; border-collapse: collapse; width: 140px; height: 180px; overflow: hidden; border: 1px solid black;"
>
           <table id="headout1" style="
margin: 0; padding: 0; border-collapse: collapse; color: black; width: 120px; height: 20px; text-align: left; background-color:#ccccff"
>
             <colgroup>
             <col
width="15px"
/>
             <col
width="40px"
/>
<col
width="20px"
/>
             </colgroup>
             <tbody>
               <tr  align="center" style="
margin: 0; padding: 0; border-collapse: collapse;"
>
                 <th align="center"   style="
margin: 0; padding: 0; border-collapse: collapse;"
> S.No </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
> Peaks </th>

                 <th style="
margin: 0; padding: 0; border-collapse: collapse;"
> </th>
               </tr>
             </tbody>
           </table>
           <div style="
margin: 0; padding: 0; border-collapse: collapse; width:140px; height: 150px; overflow: auto;"
>
             <table id="output1" align="center" style="
margin: 0; padding: 0; border-collapse: collapse; width: 120px;"
>
               <colgroup>
               <col align="center"
width="15px"
/>
               <col  align="center"
width="40px"
/>
               <col align="center"
width="20px"
/>

               </colgroup>
               <tbody align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>
               </tbody>
             </table>
           </div>
         </div> 
 
 
 
</td>
<td valign="top" >
<p align="center"><span align="center" id="head1"></span>&nbsp;&nbsp;<span align="center" id="head3"></span></p>


 <canvas id="mycanvas1" height="150" width="500"   style="border:3px  solid #d3d3d;" > </canvas>
</td>
</tr>
<tr height="200">
<td valign="top">
<input type="checkbox"onclick="myclick1()" id="myCheck1">Clipping<img src="info1.png" onclick="myhelp3()"> <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clipping Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="cl" maxlength="10" size="10" disabled="disabled" >
<br>
<br>
<input type="checkbox" onclick="myclick2()" id="myCheck2">Truncation<img src="info1.png" onclick="myhelp4()"> <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Truncating Value&nbsp;<input type="text" id="tr" maxlength="10" size="10" disabled="disabled" >
<br>
<br>
<div style="position:relative;vertical-align:middle;text-align:center;">
   <button align="center" onclick="myapply()" >Apply</button><br>
</div>​
<br>
<div style="position:relative;vertical-align:middle;text-align:center;">
<button onclick="mysave()">Save File</button>
</div>​
</td>
<td valign="top">
<div id="out1" style="
margin: 0; padding: 0; border-collapse: collapse; width: 140px; height: 180px; overflow: hidden; border: 1px solid black;"
>
           <table id="headout1" style="
margin: 0; padding: 0; border-collapse: collapse; color: black; width: 120px; height: 20px; text-align: left; background-color:#ccccff"
>
             <colgroup>
             <col
width="15px"
/>
             <col
width="40px"
/>
<col
width="20px"
/>
             </colgroup>
             <tbody>
               <tr  align="center" style="
margin: 0; padding: 0; border-collapse: collapse;"
>
                 <th align="center"   style="
margin: 0; padding: 0; border-collapse: collapse;"
> S.No </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
> Peaks </th>

                 <th style="
margin: 0; padding: 0; border-collapse: collapse;"
> </th>
               </tr>
             </tbody>
           </table>
           <div style="
margin: 0; padding: 0; border-collapse: collapse; width:140px; height: 150px; overflow: auto;"
>
             <table id="output12" align="center" style="
margin: 0; padding: 0; border-collapse: collapse; width: 120px;"
>
               <colgroup>
               <col align="center"
width="15px"
/>
               <col  align="center"
width="40px"
/>
               <col align="center"
width="20px"
/>

               </colgroup>
               <tbody align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>
               </tbody>
             </table>
           </div>
         </div>
</td>
<td valign="top">
<p align="center"><span align="center" id="head2"></span>&nbsp;&nbsp;<span align="center" id="head4"></span></p>

 <canvas id="mycanvas2" height="150" width="500"   style="border:3px  solid #d3d3d;" > </canvas>
</td>
</tr>
</table>
</div>

<div id="help" style=" position: absolute; left: 00px; top:20px;; width:750; Height:420; opacity:0; " hidden>
<img style="float:right" src="close.png" onclick="myclosehelp()">
<div  style="overflow:auto; width:700; Height:400; opacity:1; ">

<h3 id="help1">Clean up</h3> 
 <video width="600" height="350" controls>
  <source src="1Clean-up(version 5).mp4" type="video/mp4">
 
  Your browser does not support the video tag.
</video>
 <h3 id="help2">Removing Peaks</h3>
<video width="600" height="350" controls>
  <source src="2Removing peaks(version 5).mp4" type="video/mp4">
 
  Your browser does not support the video tag.
</video>
 
<h3 id="help3">Cliping</h3>
<video width="600" height="350" controls>
  <source src="3Clipping(version 5).mp4" type="video/mp4">
 
  Your browser does not support the video tag.
</video>



<h3 id="help4">Truncation</h3>

<video width="600" height="350" controls>
  <source src="4Truncation (version 5).mp4" type="video/mp4">
 
  Your browser does not support the video tag.
</video>
</div>
</div>


</body>
</html>
<?php
  
?>