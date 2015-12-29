 <html>
 <head>
<meta charset="utf-8">
 <title> Analysis</title>
 <script  src="myscript.js">
 </script>
 
 


</head>

<body onload="startfcn()">
<div align="center" style="background-color: #FaFaFa; color:#f02020" border="0">
<input type="button"  value=" Print this page "
onclick="window.print();return false;" />&nbsp;&nbsp;&nbsp;&nbsp;Language<select id="lang" onChange="langchange()" style="border-radius:5px">
<option value=5>Chinese</option>
<option value=1 selected>English(default)</option>
<option value=2>French</option>
<option value=3>German</option>
<option value=4>Japanese</option>
<option value=6>Russian</option>
<option value=7>Spanish</option>
</select>
</div>
<div id="dhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:150px; overflow: auto;"  >
<img src="dhelp0.PNG" >
</div>
<div id="fdhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;" >
<img src="fdhelp0.PNG" >
</div>
<div id="gdhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;" >
<img src="gdhelp0.PNG" >
</div>
<div id="jdhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;" >
<img src="jdhelp0.PNG" >
</div>
<div id="cdhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;" >
<img src="cdhelp0.PNG" >
</div>
<div id="rdhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;" >
<img src="rdhelp0.PNG" >
</div>
<div id="sdhelp0" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;" >
<img src="sdhelp0.PNG" >
</div>
<div id="main" style="opacity:1">
<table style="border-radius:10px" valign="top"  width="920" bgcolor="#f9f9f9" cellpadding="0" cellspacing="0" >
<tr height="460">
<td width="350">
<div align="center" style=" border-radius:10px; margin: 0; padding: 0;  border-collapse:collapse; width: 330px;  ">
<a href="select material.pdf" target="_blank" >Step 1: Select Material<img src="info.png" > </a>
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
             echo "<option value=\"" .$row['num']."\">". $row['material_name'] ."</option>";
             
                    }
             mysql_close($con);         
    ?>
<option value="1">Custom material</option>
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
              <td align="center">&gamma;</td>
              <td><p align="center" id="p10"></td>
            </tr>
          </table>
          </td></tr>
 
          </table>
   <img align="center" id="img2"  src="arrow.png"><br>
<a href="speciman type.pdf" target="_blank">Step 2: Specimen/ Component  Type <img src="info.png" > </a>
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

<a href="input type.pdf" target="_blank" >Step 3: Input Type <img src="info.png" ></a>
 <table id="tb3" width="310" height="80" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td>
 <div id="diviptype1" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 300px; height: 30px; overflow: auto;">
  <input type="radio" name="input_type" onClick="myinput()" id="input1" value="1"  disabled> Nominal Stress 
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
<a href="loading type.pdf" target="_blank" >Step 4: Loading Type <img src="info.png" ></a>
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
 <a href="input data.pdf" target="_blank" > Step 5: Input Data <img src="info.png" ></a>
 <table id="tb5" width="310" height="300" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td valign="top">
 <br>
<div style="position:relative;vertical-align:middle;text-align:center;">
 <select  id="typeanalysis" onchange="mytype()" disabled="disabled" >
           <option id="1" value="1">Neuber's Analysis</option>
            <option id="2" value="2" disabled>Deviatoric Neuber( Available in full version))</option>
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
<a href="downloadexamples.html" target="_blank">Download sample files</a>
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
<a href="hysteresis.pdf" target="_blank">Step 6: Hysteresis <img src="info.png" ></a>
<table id="tb6" align="center" width="310" height="60" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td  align="center">

<button id="hyst" onclick="myhyst()" disabled="disabled" >Hysteresis</button>
</td>
</tr>
</table>
<img align="center" id="img7"  src="arrow.png" ><br>
 <a href="life prediction.pdf" target="_blank">Step 7: Life Prediction Methods <img src="info.png" ></a>
<table id="tb7" width="310" height="240" style="border-color: gray; border-radius:10px  " border="1" cellpadding="0" cellspacing="0"> 
 <tr>
 <td align="left">
 &nbsp;&nbsp;&nbsp;&nbsp; <input type="radio" name="life1" onClick="mylifechangefcn1()" id="lifea1" value="1"  disabled="disabled" checked>Stress Based</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Goodman,Morrow,SWT,Walker) </br>
<br>
 &nbsp;&nbsp;&nbsp;&nbsp; <input type="radio" name="life1" onClick="mylifechangefcn1()" id="lifea2" value="2"  disabled="disabled">Strain Based</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Goodman,Morrow,Kujawski-Ellyin)</br>
<br>
 &nbsp;&nbsp;&nbsp;&nbsp; <input type="radio" name="life1" onClick="mylifechangefcn1()" id="lifea3" value="3"  disabled="disabled">Stress-Strain Based</br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (SWT,Fatemi-Socie, SWT-deviatoric)</br>
 &nbsp;&nbsp;
</br>
<button id="life" onclick="mylife()" disabled="disabled">Calculate Life</button>
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
<div align="center">

</div>
</td>

<td valign="bottom" width="580" bgcolor="white">
<div  style="margin: 0; padding: 0; border-collapse: collapse; width: 580px; ">
 <div id="mydiv1" style="margin: 0; padding: 0; border-collapse: collapse; width: 560px; height: 460px; overflow: auto;">
 <canvas id="mycanvas1" height="440" width="540"  onclick="mycanvasfcn()" style="border:2px  solid #d3d3d;" > </canvas>

</div>
<br/>
<br/>
 <div id="mydiv2" style="margin: 0; padding: 0; border-collapse: collapse; width: 560px; height: 0px; overflow: auto;">
 <canvas id="mycanvas2" height="440" width="540"   style="border:2px  solid #d3d3d;" > </canvas>

</div>
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
<br/>

<div id="eqimg" style="margin: 0; padding: 0; border-collapse: collapse; width: 519px; height:500px; overflow: hidden; border: 0px">
<img align="center" src="equation.PNG">
</div>
<div id="eqimg1" style="margin: 0; padding: 0; border-collapse: collapse; width: 519px; height:0px; overflow: hidden; border: 0px">
<img align="center" src="equation1.PNG">
</div>
<div id="eqimg2" style="margin: 0; padding: 0; border-collapse: collapse; width: 519px; height:0px; overflow: hidden; border: 0px">
<img align="center" src="equation2.PNG">
</div>

</br>
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

<div id="dynlife1" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:250px; overflow: auto;">
</div>
<div id="dynlife" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;">
<br/>
 <table width="890" height="110" border=1 align="center">
 <tr>
 <td width="250" align="center">
<p align="center" id="mattname" style="color:#0000ff"></p>
 </td>
 <td width="150" align="center">
Goodman
 </td>
 <td width="150" align="center">
 Morrow </td >
 <td width="150" align="center">
SWT
 </td>
 <td align="center">
 Walker
 </td>
 </tr>
 <tr>
 <td align="center">
 Life(Reversals)
 </td>
 <td>
 <p align="center" id="sp3"></p>
 </td>
 <td>
 <p align="center" id="sp1"></p>
 </td>
 <td>
 <p align="center" id="sp2"></p>
 </td>
 <td align="center">
 <p align="center" id="sp4"></p>
 </td>
 </tr>
 <tr>
 <td align="center">
 &sigma;<sub>ar</sub>
 </td>
 <td>
 <p align="center" id="msp3"></p>
 </td>
 <td>
 <p align="center" id="msp1"></p>
 </td>
 <td>
 <p align="center" id="msp2"></p>
 </td>
 <td align="center">
 <p align="center" id="msp4"></p>
 </td>
 </tr>
 <tr>
 <td align="center">
 &sigma;<sub>a,endurance</sub>
 </td>
 <td>
 <p align="center" id="esp3"></p>
 </td>
 <td>
 <p align="center" id="esp1"></p>
 </td>
 <td>
 <p align="center" id="esp2"></p>
 </td>
 <td align="center">
 <p align="center" id="esp4"></p>
 </td>
 </tr>
 </table>
 <input  type="button" value=" Print this page "
onclick="window.print();return false;" />
 <input  id="printtable" type="button" value=" Print this Table "
onclick="myprintfcn()" />
<input  type="button" onclick="printexp()" value="Print Explanation"/>

</div>

<div id="dynlife2" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;">

<br/>
 <table width="890" height="100" border=1 align="center">
 <tr>
 <td width="300" align="center">
<p align="center" id="mattname1" style="color:#0000ff"></p>
 </td>
 <td width="160" align="center">
Goodman
 </td>
 <td width="160" align="center">
 Morrow </td >
<td  align="center">
 Kujawski-Ellyin </td >
</tr>
<tr>
<td align="center">
 Life(Reversals)
 </td>
 <td>
 <p align="center" id="sp11"></p>
 </td>
 <td>
 <p align="center" id="sp21"></p>
 </td>
 <td>
 <p align="center" id="sp31"></p>
 </td>
</tr>
<tr>
<td align="center">
 &epsilon;<sub>ar</sub>
 </td>
 <td>
 <p align="center" id="esp11"></p>
 </td>
 <td>
 <p align="center" id="esp21"></p>
 </td>
 <td>
 <p align="center" id="esp31"></p>
 </td>
</tr>
<tr>
<td align="center">
 &sigma;<sub>a,endurance</sub>
 </td>
 <td>
 <p align="center" id="msp11"></p>
 </td>
 <td>
 <p align="center" id="msp21"></p>
 </td>
 <td>
 <p align="center" id="msp31"></p>
 </td>
</tr>

</table>
 <input  type="button" value=" Print this page "
onclick="window.print();return false;" />
 <input  id="printtable1" type="button" value=" Print this Table "
onclick="myprintfcn1()" />
<input  type="button" onclick="printexp()" value="Print Explanation"/>

</div>
<div id="dynlife3" align="center" style="margin: 0; padding: 0; border-collapse: collapse; width: 900px; height:0px; overflow: auto;">
<table width="890" height="60" border=1 align="center">
 <tr>
 <td width="250" align="center">
<p align="center" id="mattname2" style="color:#0000ff"></p>
 </td>
 <td width="180" align="center">
SWT
 </td>
 <td width="180" align="center">
 Fatemi-Socie</td >
<td  align="center">
 SWT-deviatoric</td >
</tr>
<tr>
<td align="center">
 Life(Reversals)
 </td>
 <td>
 <p align="center" id="sp111"></p>
 </td>
 <td>
 <p align="center" id="sp211">Available in Full version</p>
 </td>
<td>
 <p align="center" id="sp311">Available in Full version</p>
 </td>
 
</tr>

</table> 
<input  type="button" value=" Print this page "
onclick="window.print();return false;" />
 <input  id="printtable2" type="button" value=" Print this Table "
onclick="myprintfcn2()" />
<input  type="button" onclick="printexp()" value="Print Explanation"/>

</div>

<p id="dhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="dhelp1.PNG" >
</p>
<p  id="dhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="dhelp2.PNG" >
</p>
<p  id="dhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="dhelp3.PNG" >
</p>
<p  id="dhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="dhelp4.PNG" >
</p>
<p  id="dhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="dhelp5.png" >

<p id="fdhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="fdhelp1.PNG" >
</p>
<p  id="fdhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="fdhelp2.PNG" >
</p>
<p  id="fdhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="fdhelp3.PNG" >
</p>
<p  id="fdhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="fdhelp4.PNG" >
</p>
<p  id="fdhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="fdhelp5.PNG" >
</p>
<p id="gdhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="gdhelp1.PNG" >
</p>
<p  id="gdhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="gdhelp2.PNG" >
</p>
<p  id="gdhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="gdhelp3.PNG" >
</p>
<p  id="gdhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="gdhelp4.PNG" >
</p>
<p  id="gdhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="gdhelp5.PNG" >
</p>
<p id="jdhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="jdhelp1.PNG" >
</p>
<p  id="jdhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="jdhelp2.PNG" >
</p>
<p  id="jdhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="jdhelp3.PNG" >
</p>
<p  id="jdhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="jdhelp4.PNG" >
</p>
<p  id="jdhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="jdhelp5.PNG" >
</p>
<p id="cdhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="cdhelp1.PNG" >
</p>
<p  id="cdhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="cdhelp2.PNG" >
</p>
<p  id="cdhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="cdhelp3.PNG" >
</p>
<p  id="cdhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="cdhelp4.PNG" >
</p>
<p  id="cdhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="cdhelp5.PNG" >
</p>
<p id="rdhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="rdhelp1.PNG" >
</p>
<p  id="rdhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="rdhelp2.PNG" >
</p>
<p  id="rdhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="rdhelp3.PNG" >
</p>
<p  id="rdhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="rdhelp4.PNG" >
</p>
<p  id="rdhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="rdhelp5.PNG" >
</p>
<p id="sdhelp1" style="position: absolute; top:200px; left:400px; color:green;">
<img src="sdhelp1.PNG" >
</p>
<p  id="sdhelp2" style="position: absolute; top:400px; left:400px;color:green;">
<img src="sdhelp2.PNG" >
</p>
<p  id="sdhelp3" style="position: absolute; top:850px; left:400px; color:green;">
<img src="sdhelp3.PNG" >
</p>
<p  id="sdhelp4" style="position: absolute; top:1750px; left:400px; color:green;">
<img src="sdhelp4.PNG" >
</p>
<p  id="sdhelp5" style="position: absolute; top:1800px; left:400px; color:green;">
<img src="sdhelp5.PNG" >
</p>
</body>

</html>