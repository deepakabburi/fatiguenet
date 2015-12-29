 <html>
 <head>
<meta charset="utf-8">
 <title> Analysis</title>
 <script  src="myscript.js">
 </script>
 
 


</head>

<body onload="startfcn()">
<div id="main" style="opacity:1">
<table style="border-radius:10px" valign="top"  width="920" bgcolor="#f9f9f9" cellpadding="0" cellspacing="0" >
<tr height="460">
<td width="350">
<div align="center" style=" border-radius:10px; margin: 0; padding: 0;  border-collapse:collapse; width: 330px;  ">
Step 1:<a href="step1.pdf" target="_blank" >Select Material<img src="info.png" > </a>
 <table id="tb1" width="310" height="250" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td>
 &nbsp;&nbsp; <select  name="Select_Material" id="Select_Material" onChange="matchangefcn()" style="border-radius:5px">
               <option id="select_mat">Choose Material </option>
                    <?php  
             $con=mysql_connect("localhost","trail","trail");
             mysql_select_db("mytest",$con) ;                     
              $rat="UPDATE input SET num = 1,kt=2,input=1,speciman=2,analysis=1,life=1 WHERE 1";
             mysql_query($rat,$con);
             $rat="SELECT num,material_name FROM material";
             $result=mysql_query($rat,$con);

             while ($row=mysql_fetch_array($result)) {
             echo "<option value=\"" . $row['num'] ."\">". $row['material_name'] ."</option>";
             
                    }
             mysql_close($con);         
    ?>
                  </select>
    &nbsp;               <select name="Select_units"  id="Select_units" onChange="unitchangefcn()" >
                  <option value="1">Units: SI</option>
                   <option value="2">English</option>
                </select>

          
 <table width="280" height="200" border="0"  >
            <tr>
              <td width="40" height="40" align="center">&sigma;<sub>o</sub> &nbsp;</td>
              <td width="40"><p align="center" id="p1"></p></td>
              <td width="30"><p align="center" id="u1"></p></td>
              <td width="30" align="center">n<sup>'</sup>&nbsp;</td>
              <td width="60"><p align="center" id="p5"></p></td>
            </tr>
            <tr>
              <td align="center" height="40">&sigma;<sub>u</sub>&nbsp;</td>
              <td><p align="center" id="p2"></p></td>
              <td ><p align="center" id="u2"></p></td>
              <td align="center">b</td>
              <td><p align="center" id="p7"></p></td>
            </tr>
            <tr>
              <td align="center" height="40">E&nbsp;</td>
              <td><p align="center" id="p3"></p></td>
              <td ><p align="center" id="u3"></p></td>
              <td align="center">&epsilon;<sup>'</sup><sub>f</sub>&nbsp;</td>
              <td><p align="center" id="p8"></p></td>
            </tr>
            <tr>
              <td align="center" height="40">H<sup>'</sup>&nbsp;</td>
              <td><p align="center" id="p4"></p></td>
              <td ><p align="center" id="u4"></p></td>
              <td align="center">c</td>
              <td><p align="center" id="p9"></p></td>
            </tr>
            <tr>
              <td height="40" align="center">&sigma;<sup>'</sup><sub>f</sub>&nbsp;</td>
              <td><p align="center" id="p6"></p></td>
              <td ><p align="center" id="u5"></p></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table>
          </td></tr>
 
          </table>
   <img align="center" id="img2"  src="arrow.png"><br>
Step 2: <a href="step2.pdf" target="_blank">Specimen Type <img src="info.png" > </a>
 <table id="tb2" width="310" height="250" style="border-color: gray;  border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td>
   <div  id="divspecimantype" style=" margin: 0; padding: 0; border-collapse: collapse; width: 290px; height: 250px; overflow: auto;" disabled="disabled">
    
             <table width="280" height="228" border="0">
            <tr>
              <td width="20" height="30">&nbsp;</td>
              <td width="120" align="center" ><input  type="radio"  id="speciman1" name="speciman_type" value="1" onClick="myspeciman()" disabled="disabled" >
                Smooth</td>
              <td width="120" align="center"><input type="radio" id="speciman2" onClick="myspeciman()" name="speciman_type" value="2" disabled="disabled" >
                Notched</td>
              
            </tr>
            <tr>
              <td height="190">&nbsp;</td>
              <td align='center'><img  src="smooth.jpg" onClick="myimgfcn()"></td>
              <td align="center"><img  src="notch.jpg" onClick="myimgfcn1()"> </td>
                          </tr>
          </table>
  </div>               
 </td>
 </tr>
 </table>
<img align="center" id="img3"  src="arrow.png" ><br>

Step 3:  <a href="step3.pdf" target="_blank" >Input Type <img src="info.png" ></a>
 <table id="tb3" width="310" height="80" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td>
 <div id="diviptype1" style="margin: 0; padding: 0; border-collapse: collapse; width: 300px; height: 30px; overflow: auto;">
  <input type="radio" name="input_type" onClick="myinput()" id="input1" value="1"  disabled> Nominal Stress
  <input type="radio" onClick="myinput()" name="input_type" id="input3" value="3" disabled="disabled">Gross Norm. Stress
 <div id="diviparea" style="margin: 0; padding: 0; border-collapse: collapse; width: 290px; height: 0px; overflow: auto;">  
 Gross Area:<input type="text" id="ga" value="10" size="5" >&nbsp;Nominal Area:<input type="text" id="na" value="10" size="5" >
 </div> 
 </div> 
 <div id="diviptype2" style="margin: 0; padding: 0; border-collapse: collapse; width: 290px; height: 0px; overflow: auto;">
   &nbsp;&nbsp; <input type="radio" name="input_type" onClick="myinput()" id="input2" value="2" >  Stress,&sigma;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="radio" onClick="myinput()" name="input_type" id="input4" value="4"  > Strain, &epsilon;
 </div> 
 </td>
 </tr>
  </table>
<img align="center" id="img4"  src="arrow.png" ><br>
 Step 4 : <a href="step4.pdf" target="_blank" >Loading Type <img src="info.png" ></a>
  <table id="tb4" width="310" height="100" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td>
<div id="divanalysis" style="margin: 0; padding: 0; border-collapse: collapse; width: 300px; height: 80px; overflow: auto;">
 &nbsp;&nbsp; <input type="radio" name="analysis_type" onClick="myanalysis()" id="analysis1" value="1"  disabled="disabled">Constant Amplitude Loading<br>
 &nbsp;&nbsp; <input type="radio" name="analysis_type" onClick="myanalysis()" id="analysis3" value="3" disabled >Block Loading<br>
 &nbsp;&nbsp; <input type="radio" name="analysis_type" onClick="myanalysis()" id="analysis2" value="2" disabled > Spectrum Loading</p>
 </div> 
 </td>
 </tr>
 </table>
<img align="center" id="img5"  src="arrow.png" ><br>
 Step 5:<a href="step5.pdf" target="_blank" >Input Data <img src="info.png" ></a>
 <table id="tb5" width="310" height="300" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td valign="top">
 <br>
<div style="position:relative;vertical-align:middle;text-align:center;">
 <select  id="typeanalysis" onchange="mytype()" disabled="disabled" >
           <option id="1" value="1">Neuber's Analysis</option>
            <option id="2" value="2">Deviatoric Neuber's Analysis</option>
 </select> 
</div>
<br>
 <div id="divipca" style="margin: 0; padding: 0; border-collapse: collapse; width: 280px; height: 100px; overflow: auto;">
  <table width="250" height="60" border="0">
        <tr>
               <td width=80>k<sub>t</sub>(or) k<sub>f</sub> </td>
               <td><input id="ktca" type="text" value="2" disabled="disabled" size=3></input></td>
             </tr>
             <tr>
               <td><p id="ip1">Level1</p></td>
               <td><input id="level1" type="text" disabled="disabled" size=8></input><br></td>
             </tr>
             <tr>
               <td><p id="ip2">Level2</p></td>
               <td><input type="text" id="level2" onkeydown="mykeyfcn()" disabled="disabled" size=8></input><br></td>
             </tr>
           </table> 
 
 </div>
<div  align="center" id="divipva" style="margin: 0; padding: 0; border-collapse: collapse; width: 300px; height: 0px; overflow: auto;">
 <table width="280" height="120" border="0">
        <tr>
               <td width="40">k<sub>t</sub></td>
               <td width="235"><input id="ktva" value="2" type="text" disabled size ="3"></input> </td>
             </tr>

<tr>
<td>
<input type="checkbox" onclick="myclickn()" id="myCheck">
</td>
<td>Normalized</td>

</tr>
<tr>
               <td width="40">N</sub></td>
               <td width="235"><input id="mulp" value="2" type="text" disabled size ="10" disabled></input> </td>
             </tr>
                         <tr>
               <td height="38"></td>
               <td><input type="file" id="file" disabled ></input> 
<a href="test3.txt" download>Download sample file</a>
</td>
             </tr>
           </table> 
 </div>
<div style="position:relative;vertical-align:middle;text-align:center;">
 <button id="analyze" onclick="myanalyze()" disabled="disabled" >  Analyze</button>
 </div>
           </td>
</tr>
</table>
<img align="center" id="img6"  src="arrow.png" ><br>
Step 6:<a href="step6.pdf" target="_blank">Hysteresis <img src="info.png" ></a>
<table id="tb6" align="center" width="310" height="60" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td  align="center">

<button id="hyst" onclick="myhyst()" disabled="disabled" >Hysteresis</button>
</td>
</tr>
</table>
<img align="center" id="img7"  src="arrow.png" ><br>
Step 7: <a href="step7.pdf" target="_blank">Life Prediction Methods <img src="info.png" ></a>
<table id="tb7" width="310" height="120" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td align="center">
  <select id="life1" onChange="mylifechangefcn1()" disabled>
           <option value="1"> Stress Based</option>
           <option value="2"> Strain Based</option>
           <option value="3"> Stress-Strain Based</option>
           <option value="4" disabled> Energy Based</option>
           <option value="5" disabled> Critical Plane Based</option>
            </select>
           <select id="life2" onChange="mylifechangefcn2()" disabled="disabled">
            <option value="1"> Basquin/Morrow</option>
           <option value="2"> SWT</option>
           </select></br>
<button id="life" onclick="mylife()" disabled="disabled">Life prediction</button>
</td>
</tr>
</table>
Output
 <table width="310" height="250" style="border-color:gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td> 
 <div id="divopca" style="margin: 0; padding: 0; border-collapse: collapse; width: 280px; height: 200px; overflow: auto;">
 <h3>OUTPUT:</h3>

       
   <table id="optable" width="280" height="120" border="0">
           <tr>
<td width="10"></td>

             <td width="40">&sigma;<sub>level1</sub></td>
             <td width="40"><p id="op1" ></p></td>
              <td width="30"><p id="opu1" ></p></td>
<td width="20"></td>
             <td width="80">&epsilon;<sub>level1</sub>(%)</td>
             <td width="60"><p id="op6" ></p></td>
           </tr>
           <tr>
<td width="10"></td>
             <td>&sigma;<sub>level2</sub></td>
             <td><p id="op2" ></p></td>
             <td><p id="opu2"></p></td>
<td width="20"></td>
             <td>&epsilon;<sub>level2</sub>(%)</td>
             <td><p id="op7" ></p></td>
           </tr>
           <tr>
<td width="10"></td>
             <td>&sigma;<sub>m</sub></td>
             <td><p id="op3" ></p></td>
              <td><p id="opu3" ></p></td>
<td width="20"></td>
             <td>&epsilon;<sub>m</sub>(%)</td>
             <td><p id="op8" ></p></td>
           </tr>
           <tr>
<td width="10"></td>
             <td>&sigma;<sub>a</sub></td>
             <td><p id="op4" ></p></td>
<td ><p id="opu4" ></p></td>
<td width="20"></td>
             <td>&epsilon;<sub>a</sub>(%)</td>
             <td><p id="op9" ></p></td>
           </tr>
           <tr>
<td width="10"></td>
             <td>S<sub>a</sub></td>
             <td><p id="op5" ></p></td>
            <td><p id="opu5" ></p></td>
<td width="20"></td>
             <td id="nf">N<sub>f</sub> (Cycles)</td>
             <td><p id="op10" ></p></td>
           </tr>
</table>
 
 </div>
 <div id="divopva" style="margin: 0; padding: 0; border-collapse: collapse; width: 280px; height: 0px; overflow: auto;">
<div id="divoutput" style="
margin: 0; padding: 0; border-collapse: collapse; width: 280px; height: 350px; overflow: hidden; border: 1px solid black;"
>
           <table id="headoutput" style="
margin: 0; padding: 0; border-collapse: collapse; color: black; width: 280px; height: 20px; text-align: left; background-color:#ccccff"
>
             <colgroup>
             <col
width="30px"
/>
             <col
width="70px"
/>
             <col
width="70px"
/>
             <col
width="90px"
/>
             <col
width="16px"
/>
             </colgroup>
             <tbody>
               <tr  align="center" style="
margin: 0; padding: 0; border-collapse: collapse;"
>
                 <th align="center"   style="
margin: 0; padding: 0; border-collapse: collapse;"
> S.no </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
> S </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
> &sigma; </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>&epsilon; </th>
                 <th style="
margin: 0; padding: 0; border-collapse: collapse;"
> </th>
               </tr>
             </tbody>
           </table>
           <div style="
margin: 0; padding: 0; border-collapse: collapse; width:280px; height: 300px; overflow: auto;"
>
             <table id="output" align="center" style="
margin: 0; padding: 0; border-collapse: collapse; width: 280px;"
>
               <colgroup>
               <col align="center"
width="20px"
/>
               <col  align="center"
width="60px"
/>
               <col align="center"
width="60px"
/>
<col align="center"
width="80px"
/>
               </colgroup>
               <tbody align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>
               </tbody>
             </table>
           </div>
         </div> 
 
 
 </div>
 </td>
 </tr>
 </table>
</div>

</td>

<td valign="bottom" width="580" bgcolor="white">
<div  style="margin: 0; padding: 0; border-collapse: collapse; width: 580px; ">
 <div id="mydiv1" style="margin: 0; padding: 0; border-collapse: collapse; width: 560px; height: 460px; overflow: auto;">
 <canvas id="mycanvas1" height="440" width="540"  onclick="mycanvasfcn()" style="border:2px  solid #d3d3d;" > </canvas>

</div>
<br/>
<br/>
<br/>
<br/>
<br/>
 <div id="mydiv2" style="margin: 0; padding: 0; border-collapse: collapse; width: 560px; height: 0px; overflow: auto;">
 <canvas id="mycanvas2" height="440" width="540"   style="border:2px  solid #d3d3d;" > </canvas>

</div>
<br/>
<br/>
<br/>
<br/>
<br/>
 <div id="mydiv3" style="margin: 0; padding: 0; border-collapse: collapse; width: 560px; height: 0px; overflow: auto;">
 <canvas id="mycanvas3" height="440" width="540"   style="border:2px  solid #d3d3d;" > </canvas>
   <div id="divlife" style="
margin: 0; padding: 0; border-collapse: collapse; width: 500px; height: 0px; overflow: hidden; border: 0px solid black;"
>
           <table id="headlife" border="1" style="
margin: 0; padding: 0; border-collapse: collapse; color: black; width: 500px; height: 20px; text-align: left; background-color:white"
>
             <colgroup>
             <col
width="80px"
/>
             <col
width="80px"
/>
             <col
width="40px"
/>
             <col
width="80px"
/>
 <col
width="100px"
/>
             <col
width="100px"
/>
             <col
width="15px"
/>
             </colgroup>
             <tbody>
               <tr  align="center" style="
margin: 0; padding: 0; border-collapse: collapse;"
>
                 <th align="center"   style="
margin: 0; padding: 0; border-collapse: collapse;"
> &sigma;<sub>max</sub> </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>  &sigma;<sub>min</sub> </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
> N<sub>j</sub> </th>
                 <th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>&sigma;<sub>a</sub> </th>
<th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>N<sub>fj</sub> </th>
<th align="center"  style="
margin: 0; padding: 0; border-collapse: collapse;"
>N<sub>j</sub>/N<sub>fj</sub> </th>
                 <th style="
margin: 0; padding: 0; border-collapse: collapse;"
> </th>
               </tr>
             </tbody>
           </table>
           <div style="
margin: 0; padding: 0; border-collapse: collapse; width:500px; height: 200px; overflow:auto ;"
>
             <table id="olife" border=1 style="
margin: 0; padding: 0; border-collapse: collapse; width: 500px;"
>
               <colgroup>
                <col
width="80px"
/>
             <col
width="80px"
/>
             <col
width="40px"
/>
             <col
width="80px"
/>
 <col
width="100px"
/>
             <col
width="115px"
/>
               </colgroup>
               <tbody align="center" style="
margin: 0; padding: 0; border-collapse: collapse;"
>
               </tbody>
             </table>
           </div>
         
         </div>
  <p valign="bottom" id="lifeoutput" align="left"  ></p>                
 
</div>
<p id="comphead" name="comphead" align="center"><b>Comparision Table</b></p>
 <select name="Select_Material" class="style3" id="Select_Material1" onFocus="myaddrowfcn()" onChange="myaddrowfcn()">
                  <?php  
             $con=mysql_connect("localhost","trail","trail");
             mysql_select_db("mytest",$con) ;                     
              $rat="UPDATE input SET num = 1,kt=2,input=1,speciman=2,analysis=1,life=1 WHERE 1";
             mysql_query($rat,$con);
             $rat="SELECT num,material_name FROM material";
             $result=mysql_query($rat,$con);

             while ($row=mysql_fetch_array($result)) {
             echo "<option value=\"" . $row['num'] ."\">". $row['material_name'] ."</option>";
             
                    }
             mysql_close($con);         
    ?>
            </select><button id="clear" onClick="cleartablefcn()"> Clear Table</button><br>
                  
        <div id="divcompare" style="
margin: 0; padding: 0; border-collapse: collapse; width: 519px; height: 200px; overflow: hidden; border: 0px solid black;"
>
<table id="headcompare" style="
margin: 0; padding: 0; border-collapse: collapse; color: black; width: 517px; height: 20px; text-align: left; background-color:#ccccff"
>
<colgroup>
<col
width="180px"
/>
<col
width="200px"
/>
<col
width="100px"
/>
<col
width="16px"
/>
</colgroup>
<tbody>
<tr style="
margin: 0; padding: 0; border-collapse: collapse;"
>
<th  style="
margin: 0; padding: 0; border-collapse: collapse;"
>
Material Name
</th>
<th style="
margin: 0; padding: 0; border-collapse: collapse;"
>
Fatigur Limit(1E+7)(estimated)(Stress or Strain)
</th>
<th style="
margin: 0; padding: 0; border-collapse: collapse;" align ="center"
>
Life (Cycles)
</th>
<th style="
margin: 0; padding: 0; border-collapse: collapse;"
>
 
</th>
</tr>
</tbody>
</table>
<div style="
margin: 0; padding: 0; border-collapse: collapse; width: 500px; height: 150px; overflow: auto;"
>
<table id="compare" style="
margin: 0; padding: 0; border-collapse: collapse; width: 500px;"
>
<colgroup>
<col
width="180px"
/>
<col
width="150px"
/>
<col
width="150px"
/>
</colgroup>
<tbody style="
margin: 0; padding: 0; border-collapse: collapse;  text-align: center"
>
</tbody>
</table>
</div>
</div>
<div id="divcompare1" style="
margin: 0; padding: 0; border-collapse: collapse; width: 519px; height:200px; overflow: hidden; border: 0px solid black;"
>

<table id="headcompare1" style="
margin: 0; padding: 0; border-collapse: collapse; color: black; width: 517px; height: 20px; text-align: left; background-color:#ccccff"
>
<colgroup>
<col
width="200px"
/>
<col
width="300px"
/>
<col
width="16px"
/>
</colgroup>
<tbody>
<tr style="
margin: 0; padding: 0; border-collapse: collapse;"
>
<th  style="
margin: 0; padding: 0; border-collapse: collapse;"
>
Material Name
</th>
<th style="
margin: 0; padding: 0; border-collapse: collapse;" align ="center"
>
Life (No of repetitions)
</th>
<th style="
margin: 0; padding: 0; border-collapse: collapse;"
>
 
</th>
</tr>
</tbody>
</table>
<div style="
margin: 0; padding: 0; border-collapse: collapse; width: 500px; height: 150px; overflow: auto;"
>
<table id="compare1" style="
margin: 0; padding: 0; border-collapse: collapse; width: 500px;"
>
<colgroup>
<col
width="200px"
/>
<col
width="300px"
/>

</colgroup>
<tbody style="
margin: 0; padding: 0; border-collapse: collapse;  text-align: center"
>
</tbody>
</table>
</div>

</div>

</td>


</tr>


</table>
</div>

<p id="dhelp1" style="position: absolute; top:50px; left:400px; color:green;"><b>Select Material</b><br><br> Selection of four different materials are available for educational version.<br> Select SI unit or English unit.
</p>
<p  id="dhelp2" style="position: absolute; top:400px; left:400px;color:green;"><b> Smooth</b><br>
Select input force, stress or strain.<br>

<b>Notched</b><br>

Select Nominal stress or Gross. Nom. Stress<br>
 If Gross. Nom. Stress is selected, user will be asked to input gross area and nominal area.
</p>
<p  id="dhelp3" style="position: absolute; top:850px; left:400px; color:green;"><b> Analysis Type</b><br>
 Three analysis type are available for selection<br>
1. Constant Amplitude Loading<br>
2. Block Loading<br>
3. Spectrum Loading<br>
<b>Smooth and Constant Amplitude </b><br>
 K<sub>t</sub> = 1, is set as default for smooth specimen, and cannot be changed.<br>
Input S<sub>level 1</sub> and S<sub>level 2</sub> <br>
<b>Notched and Constant Amplitude</b><br>
 K<sub>t </sub>= 2, is set as default for notched specimen, and can be changed accordingly.<br>
 Input S<sub>level 1</sub> and S<sub>level 2 </sub><br>
<b>Smooth/Notched and Spectrum Loading</b><br>
 K<sub>t</sub> = 1, is set as default for smooth specimen, and cannot be changed.<br>
User have the option to download sample file or choose their own data file for analysis. <br>
User can select a normalized factor if desired.
</p>
<p  id="dhelp4" style="position: absolute; top:1600px; left:400px; color:green;"><b>Life Prediction</b><br>
Users have the option to select a <br>
1. Stress based,<br>
2. Strain based,<br>
3. Stress-Strain based<br>
life prediction, with either,<br>
1. Basquin<br>
2. SWT<br>
3. Morrow<br>
4. Coffin-Mason<br>
5. SWT-Deviatoric <br>
method for analyzing life of the material.</p>
</body>

</html>