var analyzed=0;
var start=0;
var un=1;
var dhi=1;
       var prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop8,prop9;
       var aprop1,aprop2,aprop3,aprop4,aprop5,aprop6,aprop7,aprop8,aprop9;
       var ktvalue,lifevalue,inputvalue,analysisvalue,specimanvalue;
       var mypos=1; 
       var analyzed=0;
       var valop1=1; 
       var stmax,stmin,emax ,emin, eamp,stmean,stamp,emean,smax,smin;
        var canv=0;
var rxp=[],rxn=[],ryp=[],ryn=[];
      var datayy=[] ,datayy1=[], dataxx=[];
    var maxx,minx,maxy,miny,maxy1,miny1;
    var stress=[],strain=[],nstress=[],input=[];
       var rmainip=[],rxval=[],ryval=[];
       var rlife=[],lifeop=[],op=[],jk,op1=[];
var mlife,mprop=[];
       var mstress=[],mnstress=[],mstrain=[];
var normalized=0;
 var inputnorm;
var block=0;
var lifep1=1;

// on page load

function startfcn()
{
if(dhi==1)
{
 document.getElementById("dhelp2").style.visibility="hidden";
 document.getElementById("dhelp3").style.visibility="hidden";
 document.getElementById("dhelp4").style.visibility="hidden";
}

      document.getElementById("Select_Material1").style.visibility="hidden";
      document.getElementById("clear").style.visibility="hidden";
       document.getElementById("nf").style.visibility="hidden";
document.getElementById("comphead").style.visibility="hidden";
         document.getElementById("compare").style.height=0;
document.getElementById("img2").style.visibility="hidden";
document.getElementById("img3").style.visibility="hidden";

document.getElementById("img4").style.visibility="hidden";

document.getElementById("img5").style.visibility="hidden";

document.getElementById("img6").style.visibility="hidden";
document.getElementById("img7").style.visibility="hidden";
           document.getElementById("divcompare").style.height=0;
     document.getElementById("divcompare1").style.height=0;
       document.getElementById("divopca").style.height=0; 
       document.getElementById("divopva").style.height=0;
       
 }

// calculations depending on material

function mycalcfcn()
{

 var l,lo;
  datayy=[] ;
  datayy1=[];
   dataxx=[];
    for (var i = 0; i < prop2; i += 1) {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10); 
        if(specimanvalue==2)
        {
       
    lo=Math.sqrt(prop3*i*l);
            }
        else
        {
                 lo=i;   
        }
        dataxx.push(100*l) ;
    datayy.push(i);
    datayy1.push(lo);
    }      
 maxx=Math.max.apply(Math,dataxx);
minx=Math.min.apply(Math,dataxx);
maxy=Math.max.apply(Math,datayy);
miny=Math.min.apply(Math,datayy);
maxy1=Math.max.apply(Math,datayy1);
miny1=Math.min.apply(Math,datayy1);   
}

// on material change

function matchangefcn()

{
document.getElementById("select_mat").disabled="true"; 
  var e = document.getElementById("Select_Material");
 
      var kk=[];
 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        
   var kk=[];
   kk=xmlhttp.responseText;
       var d=[];
   var j=0;
   for(var i=0;i<kk.length;i++) {
    if(kk[i]=="\n")
        {
      d[j]=i;
      j++;
  }
 
   }      
   
   aprop1=Number(kk.substring(0,d[0]));
   aprop2=Number(kk.substring(d[0],d[1]));
   aprop3=Number(kk.substring(d[1],d[2]));
   aprop4=Number(kk.substring(d[2],d[3]));
   aprop5=Number(kk.substring(d[3],d[4]));
   aprop6=Number(kk.substring(d[4],d[5]));
   aprop7=Number(kk.substring(d[5],d[6]));
   aprop8=Number(kk.substring(d[6],d[7]));
   aprop9=Number(kk.substring(d[7],d[8]));
   
   unitchangefcn();
   mycalcfcn();
    if(analyzed==1)
    {
        myanalyze();
    }
  
    if(start==0)
    {
document.getElementById("tb1").style.borderColor = "#000080";
 document.getElementById("img2").style.visibility="visible";
location.href = "#tb1";
       
if(dhi==1)
{
document.getElementById("dhelp1").style.visibility="hidden";
document.getElementById("dhelp2").style.visibility="visible";
 document.getElementById("dhelp3").style.visibility="hidden";
 document.getElementById("dhelp4").style.visibility="hidden";
}
         
    }
    }
  }
  
  xmlhttp.open("GET","prop2.php?q="+e.options[e.selectedIndex].value,true);
  xmlhttp.send();  
document.getElementById("speciman1").removeAttribute("disabled");
  document.getElementById("speciman2").removeAttribute("disabled"); 
}

// on units change

function unitchangefcn()
{

   var e = document.getElementById("Select_units"); 
   var se=e.options[e.selectedIndex].value;
   if(se==1)
   {
un=1;
    prop1=aprop1;
    prop2=aprop2;
    prop3=aprop3;
    prop4=aprop4;
    prop5=aprop5;
    prop6=aprop6;
    prop7=aprop7;
    prop8=aprop8;
    prop9=aprop9;  
    document.getElementById("u1").innerHTML="MPa";
document.getElementById("u2").innerHTML="MPa";
document.getElementById("u3").innerHTML="MPa";
document.getElementById("u4").innerHTML="MPa";
document.getElementById("u5").innerHTML="MPa"; 
document.getElementById("opu1").innerHTML="MPa"; 
document.getElementById("opu2").innerHTML="MPa"; 
document.getElementById("opu3").innerHTML="MPa"; 
document.getElementById("opu4").innerHTML="MPa"; 
document.getElementById("opu5").innerHTML="MPa"; 
   }
   else
   {
un=2;
    prop1=Math.round(aprop1*0.1450377);
    prop2=Math.round(aprop2*0.1450377);
    prop3=Math.round(aprop3*0.1450377);
    prop4=Math.round(aprop4*0.1450377);
    prop5=aprop5;
    prop6=Math.round(aprop6*0.1450377);
    prop7=aprop7;
    prop8=aprop8;
    prop9=aprop9;  
    document.getElementById("u1").innerHTML="ksi";
document.getElementById("u2").innerHTML="ksi";
document.getElementById("u3").innerHTML="ksi";
document.getElementById("u4").innerHTML="ksi";
document.getElementById("u5").innerHTML="ksi";    
document.getElementById("opu1").innerHTML="ksi";
document.getElementById("opu2").innerHTML="ksi";
document.getElementById("opu3").innerHTML="ksi";
document.getElementById("opu4").innerHTML="ksi";
document.getElementById("opu5").innerHTML="ksi"; 
   }
mycalcfcn();
    document.getElementById("p1").innerHTML=prop1;
document.getElementById("p2").innerHTML=prop2;
document.getElementById("p3").innerHTML=prop3;
document.getElementById("p4").innerHTML=prop4;
document.getElementById("p5").innerHTML=prop5;
document.getElementById("p6").innerHTML=prop6;
document.getElementById("p7").innerHTML=prop7;
document.getElementById("p8").innerHTML=prop8;
document.getElementById("p9").innerHTML=prop9;
if(analyzed==1)
{
    myanalyze();
}
}


// on speciman selction
function myspeciman()
{
     document.getElementById("input1").removeAttribute("disabled");
          document.getElementById("input3").removeAttribute("disabled");
    if(document.getElementById("speciman1").checked == true)
    {
      specimanvalue=1;
      var d=document.getElementById("diviptype2");
     d.style.height = 30;
      var e=document.getElementById("diviptype1");
     e.style.height = 0; 
     var f=document.getElementById("diviparea");
     f.style.height = 0;
      document.getElementById("ktca").disabled="true";
      document.getElementById("ktva").disabled="true"; 
      document.getElementById("ktca").value=1;

 
            document.getElementById("ktva").value=1; 


     if(document.getElementById("input1").checked == true||document.getElementById("input3").checked == true)
     {
     
          document.getElementById("input2").checked="true";
          inputvalue=2;
     }
     
    }
    else
    {
        specimanvalue=2;


      var d=document.getElementById("diviptype1");
     d.style.height = 30;
      var e=document.getElementById("diviptype2");
     e.style.height = 0; 
     document.getElementById("ktca").value=2;
            document.getElementById("ktva").value=2;
 

            document.getElementById("ktca").removeAttribute("disabled"); 
     document.getElementById("ktva").removeAttribute("disabled");  
     if(document.getElementById("input2").checked == true||document.getElementById("input4").checked == true)
     {
          document.getElementById("input1").checked="true";
          inputvalue=1;
     }
     
    }
location.href = "#tb2";
document.getElementById("tb2").style.borderColor = "#000080";
 document.getElementById("img3").style.visibility="visible";

location.href = "#tb2";
 if(analyzed==1)
{
    myanalyze();
}

}

// on image for speciman selection

function myimgfcn()
{
 document.getElementById("input1").removeAttribute("disabled");
          document.getElementById("input3").removeAttribute("disabled");
document.getElementById("speciman1").checked="true";
       
       specimanvalue=1;
      var d=document.getElementById("diviptype2");
     d.style.height = 30;
      var e=document.getElementById("diviptype1");
     e.style.height = 0; 
     var f=document.getElementById("diviparea");
     f.style.height = 0;
      document.getElementById("ktca").disabled="true";
      document.getElementById("ktva").disabled="true"; 
      document.getElementById("ktca").value=1;
            document.getElementById("ktva").value=1; 
     if(document.getElementById("input1").checked == true||document.getElementById("input3").checked == true)
     {
     
          document.getElementById("input2").checked="true";
          inputvalue=2;
     }
     
location.href = "#tb2";
document.getElementById("tb2").style.borderColor = "#000080";
 document.getElementById("img3").style.visibility="visible";

location.href = "#tb2";
if(analyzed==1)
{
    myanalyze();
}
}
function myimgfcn1()
{

 document.getElementById("input1").removeAttribute("disabled");
          document.getElementById("input3").removeAttribute("disabled");
    document.getElementById("speciman2").checked="true";
specimanvalue=2;
      var d=document.getElementById("diviptype1");
     d.style.height = 30;
      var e=document.getElementById("diviptype2");
     e.style.height = 0; 
     document.getElementById("ktca").value=2;
            document.getElementById("ktva").value=2;
            document.getElementById("ktca").removeAttribute("disabled"); 
     document.getElementById("ktva").removeAttribute("disabled");  
     if(document.getElementById("input2").checked == true||document.getElementById("input4").checked == true)
     {
          document.getElementById("input1").checked="true";
          inputvalue=1;
     }
location.href = "#tb2";
document.getElementById("tb2").style.borderColor = "#000080";
 document.getElementById("img3").style.visibility="visible";

location.href = "#tb2";
if(analyzed==1)
{
    myanalyze();
}
}


// selectiong type of input

function myinput()
{
    if(document.getElementById("input1").checked == true)
    {
        inputvalue=1;
        var f=document.getElementById("diviparea");
     f.style.height = 0;
     var d=document.getElementById("diviptype1");
     d.style.height = 30;
     document.getElementById("ktca").value=2;
            document.getElementById("ktva").value=2;
   document.getElementById("ip1").innerHTML="S <sub>level1</sub>";
   document.getElementById("ip2").innerHTML="S <sub>level2</sub>";

    }
    else
    {
        if(document.getElementById("input2").checked == true)
        {
            inputvalue=2;
            document.getElementById("ktca").value=1;
            document.getElementById("ktva").value=1;
 document.getElementById("ip1").innerHTML="&sigma; <sub>level1</sub>";
   document.getElementById("ip2").innerHTML="&sigma; <sub>level2</sub>";
        }
        else
        {
            if(document.getElementById("input3").checked == true)
            {
                inputvalue=3;
               var d=document.getElementById("diviptype1");
     d.style.height = 60;
     var f=document.getElementById("diviparea");
     f.style.height = 30;
      var e=document.getElementById("diviptype2");
     e.style.height = 0;  
     document.getElementById("ktca").value=2;
            document.getElementById("ktva").value=2;
 document.getElementById("ip1").innerHTML="GS <sub>level1</sub>";
   document.getElementById("ip2").innerHTML="GS <sub>level2</sub>";
            }
            else
            {
 document.getElementById("ip1").innerHTML="&epsilon; <sub>level1</sub> (%)";
   document.getElementById("ip2").innerHTML="&epsilon; <sub>level2</sub>(%)";
                inputvalue=4;
                document.getElementById("ktca").value=1;
            document.getElementById("ktva").value=1;
            }
        }
    }
    
    location.href = "#tb3";
document.getElementById("tb3").style.borderColor = "#000080";
 document.getElementById("img4").style.visibility="visible";

location.href = "#tb3";
if(dhi==1)
{
document.getElementById("dhelp1").style.visibility="hidden";
document.getElementById("dhelp3").style.visibility="visible";
 document.getElementById("dhelp2").style.visibility="hidden";
 document.getElementById("dhelp4").style.visibility="hidden";
}
     document.getElementById("analysis1").removeAttribute("disabled");
          document.getElementById("analysis2").removeAttribute("disabled");
  document.getElementById("analysis3").removeAttribute("disabled");
          if(analyzed==1)
{
    myanalyze();
}
     
    
}

// selecting type of loading

function myanalysis()
{

   if(document.getElementById("analysis1").checked == true)
    {
        analysisvalue=1;
        var d=document.getElementById("divipca");
     d.style.height = 100;
     var f=document.getElementById("divipva");
     f.style.height = 0;
        document.getElementById("analyze").disabled="true"; 
    }
    else
    {
      if(document.getElementById("analysis2").checked == true)
    {
        document.getElementById("analyze").removeAttribute("disabled");
        analysisvalue=2;
         var d=document.getElementById("divipva");
     d.style.height = 150;
     var f=document.getElementById("divipca");
     f.style.height = 0;
block=0;
    }  
else
{
document.getElementById("analyze").removeAttribute("disabled");
        analysisvalue=2;
block=1;
         var d=document.getElementById("divipva");
     d.style.height = 150;
     var f=document.getElementById("divipca");
     f.style.height = 0;

}
    }
     location.href = "#tb4";
document.getElementById("tb4").style.borderColor = "#000080";
 document.getElementById("img5").style.visibility="visible";

location.href = "#tb4";
    document.getElementById("typeanalysis").removeAttribute("disabled");
   
    if(inputvalue==1||inputvalue==3)
    {
     document.getElementById("ktca").removeAttribute("disabled"); 
     document.getElementById("ktva").removeAttribute("disabled");  
    }
    else
    {
      document.getElementById("ktca").disabled="true";
      document.getElementById("ktva").disabled="true";  
    } 
      
       document.getElementById("level1").removeAttribute("disabled");
        document.getElementById("level2").removeAttribute("disabled");
         document.getElementById("file").removeAttribute("disabled");
         if(analyzed==1)
{
    myanalyze();
}
                 
}

//  selecting type neuber or deviotoric analysis

function mytype()
{
    var e = document.getElementById("typeanalysis");
    valop1=e.options[e.selectedIndex].value;
    if(analyzed==1)
    {
        myanalyze();
    }
}



function mykeyfcn()
{
  document.getElementById("analyze").removeAttribute("disabled");  
}


// canvas function

function mycanvasfcn()
{ 
  if(analyzed==1)
  { 
   canv=1;  
  var c=document.getElementById("mycanvas1");
  var ctx=c.getContext('2d');
  var rect = c.getBoundingClientRect();   
  var x =event.clientX-rect.left; 
  var y = event.clientY-rect.top;

var w=c.width;
var h=c.height;
var xpos=w-(0.9*w);

var xpos1=0.96*w;
var ypos=0.04*h;
var ypos1=0.9*h;
var widx=0.3*ypos;
var widy=0.1*xpos;
  var lminx=(Math.floor(minx*10)/10);
  var lmaxx=(Math.ceil(maxx*10)/10);
  var lminy=(Math.floor(miny1/10)*10);
  var lmaxy=(Math.ceil(maxy1/10)*10);
  if(x>xpos && x<xpos1){ 
  deletegraph();
    
   plot();
   val=(x-xpos)*(lmaxx-lminx)/(xpos1-xpos);

   plotcursor(val); 
 }
  }
 
}      

// analyze button function

function myanalyze()
{

document.getElementById("tb5").style.borderColor = "#000080";
 document.getElementById("img6").style.visibility="visible";
if(dhi==1)
{
document.getElementById("dhelp1").style.visibility="hidden";
document.getElementById("dhelp2").style.visibility="hidden";
 document.getElementById("dhelp3").style.visibility="hidden";
 document.getElementById("dhelp4").style.visibility="hidden";
}
    
    deletegraph();
    deletegraph1();
    deletegraph2();
  mycalcfcn()
  if(analysisvalue==1)
  {
  start=1;
   analyzed=1;
    canv=0;
   var input1= document.getElementById("ktca").value;  
   var input2= document.getElementById("level1").value;
   var input3= document.getElementById("level2").value;
     if(isNaN(input1) || isNaN(input2) || isNaN(input3) || input1<1||(input2>0&&input3>input2)||(input2<0&&input3<input2))
     {
         alert("Enter Valid data inputs");
     }   
     else
     {
       point1=Math.abs(input1*input2); 
       point2=Math.abs(input1*(input2-input3)/2);
       var cond= input2/Math.abs(input2);
        var l,lo,lim; 
         var gamma,gammaef,mul;  
    for (var i = 0; i < prop6; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     lim=(i-10);
     
     if(inputvalue==4)
     {
      if(l>Math.abs(input2/100)) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point1)  {
       break;
      
   }
         }
    }     
      
         
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                                if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     stmax=(i-0.01);
     
     if(inputvalue==4)
     {
      if(l>Math.abs(input2/100)) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point1)  {
       break;
      
   }
         }
    }     
        stmax=Math.round(stmax*10)/10;
      emax=stmax/prop3+Math.pow(stmax/prop4,1/prop5,10);
     
      for (var i = 0; i < prop6; i += 10) 
    {
    if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                             if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
    lim=(i-10);
    if(inputvalue==4)
     {
      if(l>Math.abs((input2-input3)/200)) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point2)  {
       break;
   }
         }
    }         
             
     for (var i = lim; i <lim+10; i += 0.01) 
    {
    if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
    stamp=(i-0.01);
    if(inputvalue==4)
     {
      if(l>Math.abs((input2-input3)/200)) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point2)  {
       break;
   }
         }
    } 
         stamp=Math.round(stamp*10)/10;
       eamp= stamp/prop3+Math.pow(stamp/prop4,1/prop5,10);
     
     if(cond==1)
     {
          stmin=stmax-2*stamp;
        
       stmean=(stmax+stmin)/2;
       
      var emin=emax-2*eamp;
       var emean=(emax+emin)/2;
     }
         else
         {
             stmax=stmax*cond;
             emax=emax*cond;
            stmin=stmax+2*stamp;
        
       stmean=(stmax+stmin)/2;
       
      var emin=emax+2*eamp;
       var emean=(emax+emin)/2;
             
         }
     
      
       document.getElementById("divopca").style.height=300;
        document.getElementById("divopva").style.height=0;
       document.getElementById("optable").style.visibility="visible";
      
       document.getElementById("op1").innerHTML=Math.round(stmax*100)/100; 
       document.getElementById("op2").innerHTML=Math.round(stmin*100)/100; 
       document.getElementById("op3").innerHTML=Math.round(stmean*100)/100; 
       document.getElementById("op4").innerHTML=Math.round(stamp*100)/100; 
       
       document.getElementById("op6").innerHTML=Math.round(emax*10000)/100;
       document.getElementById("op7").innerHTML=Math.round(emin*10000)/100;
       document.getElementById("op8").innerHTML=Math.round(emean*10000)/100; 
       document.getElementById("op9").innerHTML=Math.round(eamp*10000)/100; 
      
      if(inputvalue==4)
      {
       document.getElementById("op5").innerHTML=Math.round(stamp*10)/10;   
      }
      else
      {
       document.getElementById("op5").innerHTML=Math.round(point2/input1*10)/10;    
      }
             
        deletegraph();
          plot();
          if(mypos==1)
          {
           val=Math.abs(emax)*100;
   plotcursor(val);
      
          }
          if(mypos==2)
          {
            val=Math.abs(emax)*100;
   plotcursor(val);
   plothys();
        
          }
   if(mypos==3)
   {
      val=Math.abs(emax)*100;
   plotcursor(val);
   plothys();
   

  var lval2=lifep1;
   var e3 = document.getElementById("life2"); 
  var lval3=e3.options[e3.selectedIndex].value;
 
  if(lval2==1){
      if(lval3==1)
      {
          
          plotlife();
      }
      else
      {
          
          plotlife1();
      }
  } 
  else
  {
      
   if(lval2==2){
       
          if(lval3==1)
      {
          plotlife2();
      }
      else
      {     alert("under construction");
             e3.value=1;
          plotlife2();
      }  
        }  
        else
        {
         if(lval2==3){
            if(lval3==1)
            {
          plotlife3();
            }
                else
                { 
                alert("under construction");
             e3.value=1;   
                plotlife3();
                }  
            } 
            else
            {
             alert("under construction");
             e3.value=1;
             e2.value=1;
              plotlife();     
            }  
        } 
  }
   
   
     
       
   }
        }  
  }  
    else
    {
     
     input=[];
    analyzed=1;
    canv=0;
   var input1= document.getElementById("ktva").value;  
   if(input1<1)
   {
       alert("enter valid Kt value");
       
   }
       
       else
       {
          cleartable(); 
        var file = document.getElementById('file').files[0];
          if(file)
    {
   var reader;
    reader = new FileReader();
     
  reader.readAsText(file, "UTF-8");
  
  reader.onload = loaded;

  
  }
  else
  {
      alert("no text file is selected");
     
     }
       }
        
    }
    location.href = "#mydiv1";
document.getElementById("hyst").removeAttribute("disabled");
document.getElementById("hyst").focus();

}


//deleting or clearing canvases

function deletegraph(){
    var c=document.getElementById("mycanvas1");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
ctx.clearRect(0, 0, w,h);
ctx.restore();    
} 
function deletegraph1(){
    var c=document.getElementById("mycanvas2");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
ctx.clearRect(0, 0, w,h);
ctx.restore();    
} 
function deletegraph2(){
    var c=document.getElementById("mycanvas3");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
ctx.clearRect(0, 0, w,h);
ctx.restore();    
} 

// plotting nueber curve

function plot(){
          
var c=document.getElementById("mycanvas1");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
var xpos=w-(0.9*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.9*h;
var widx=0.3*ypos;
var widy=0.1*xpos;

var lminx=(Math.floor(minx*10)/10);
  var lmaxx=(Math.ceil(maxx*10)/10);
  var lminy=(Math.floor(miny1/10)*10);
  var lmaxy=(Math.ceil(maxy1/10)*10);
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,ypos);
ctx.lineTo(xpos,ypos1);
ctx.stroke();
ctx.lineTo(xpos1,ypos1);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=10; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/10));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],ypos1);
ctx.lineTo(xpos2[i],ypos1-widx);
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Computermodern';
 ctx.fillStyle="black";
ctx.fillText((Math.round((lmaxx-lminx)*100)*(i)/1000).toString(),xpos2[i],(ypos1+4*widy));


}
for (i = 0; i <=10; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/10));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Computermodern';
ctx.fillStyle="black";
ctx.fillText((Math.round((lmaxy-lminy))*(i)/10).toString(),(xpos-4.5*widy),ypos2[i]);

}

ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.fillText("Strain(%)",(xpos1+xpos)/2,ypos1+7*widy);
ctx.save();
ctx.translate(xpos-7*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Computermodern';
ctx.fillStyle="black";
ctx.fillText("Stress",0,0);
if(un==1)
{
ctx.fillText("  [MPa]",ctx.measureText("Stress").width,0);
}
else
{
ctx.fillText("  [ksi]",ctx.measureText("Stress").width,0);
}
ctx.restore();
var dataxxv=[],datayyv=[],datayyv1=[];
for(var i=0; i<dataxx.length; i++) {
    dataxxv[i]=(dataxx[i]*(xpos1-xpos)/(lmaxx-lminx))+xpos ;
}

   for(var i=0; i<datayy.length; i++) {
    datayyv[i]=ypos1-(datayy[i]*(ypos1-ypos)/(lmaxy-lminy));
}
 for(var i=0; i<datayy.length; i++) {
    datayyv1[i]=ypos1-(datayy1[i]*(ypos1-ypos)/(lmaxy-lminy));
}
 ctx.beginPath();
ctx.moveTo(dataxxv[0],datayyv[0]);
  for(var i=1; i<datayy.length; i++) {
      ctx.lineTo(dataxxv[i],datayyv[i]);
        ctx.lineWidth=2;
      ctx.stroke();
  }
  ctx.beginPath();
ctx.moveTo(dataxxv[0],datayyv1[0]);
  for(var i=1; i<datayyv1.length; i++) {
      ctx.lineTo(dataxxv[i],datayyv1[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#0000ff';
      ctx.stroke();
  }
  
   
    ctx.closePath(); //Changed
   
}

// plotting dynamic cursor

function plotcursor(xval)
{    
    
var c=document.getElementById("mycanvas1");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
var xpos=w-(0.9*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.9*h;
var widx=0.3*ypos;
var widy=0.1*xpos;
  var lminx=(Math.floor(minx*10)/10);
  var lmaxx=(Math.ceil(maxx*10)/10);
  var lminy=(Math.floor(miny1/10)*10);
  var lmaxy=(Math.ceil(maxy1/10)*10);
    var mxpos,mxpos1,mypos1,mypos2,valx,valx1,valy,valy1;
    var l,lo,lim;
     var gamma,gammaef,mul;
       for(var i=0;i<prop2+10;i+=10)
    {
         l=(i/prop3+Math.pow(i/prop4,1/prop5,10)); 
       if(specimanvalue==2)
        {
       
           if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
        
         lo=i;   
        }
        
    lim=(i-10);
   
      if((100*l)>xval) 
      {
          break;
      }  
     }
        
      
       for (var i =lim; i < lim+10; i += 0.01) {
        l=(i/prop3+Math.pow(i/prop4,1/prop5,10)); 
           if(specimanvalue==2)
        {
        
    if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
    
        }
        else
        {
         
         lo=i;   
        }
     
      if((100*l)>xval) 
      {
          if(specimanvalue==2)
        {
        l=((i-0.01)/prop3+Math.pow((i-0.01)/prop4,1/prop5,10));
    if(valop1==1)
            {
             lo=Math.sqrt(prop3*(i-0.01)*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*(i-0.01)/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*(i-0.01)*l*mul); 
              }
                 }
        else
        {
         l=((i-0.01)/prop3+Math.pow((i-0.01)/prop4,1/prop5,10));     
         lo=i-0.01;   
        }

                valx=(100*l);
                valx1=((100*l)/100-(i/prop3));
                valy=i-0.01;
                valy1=lo;
              
            mxpos=(valx*(xpos1-xpos)/(lmaxx-lminx))+xpos ;
           mxpos1=((valx1)*100*(xpos1-xpos)/(lmaxx-lminx))+xpos ;
            mypos1= ypos1-(i*(ypos1-ypos)/(lmaxy-lminy));
            mypos2=  ypos1-(lo*(ypos1-ypos)/(lmaxy-lminy));
            
            break;
        }
    }
    

       ctx.beginPath();
        ctx.strokeStyle = '#ff0000';
ctx.moveTo(xpos,mypos2);
ctx.lineTo(mxpos,mypos2);
ctx.lineTo(mxpos,ypos1);
ctx.stroke();
ctx.beginPath();
        ctx.strokeStyle = '#ff0000';
ctx.moveTo(xpos,mypos1);
ctx.lineTo(mxpos,mypos1);
ctx.stroke();
ctx.beginPath();
    ctx.moveTo(mxpos,mypos1)
ctx.lineTo(mxpos1,ypos1);
ctx.stroke();
 ctx.rect(mxpos,mypos2-20,100,30) ;
 ctx.rect(mxpos,mypos1,100,30) ;  
 ctx.rect(mxpos,ypos1-30,100,30) ; 
  ctx.rect(mxpos1,ypos1-60,100,30) ;
   ctx.fillStyle="yellow";
    ctx.fill();
    ctx.font='13pt Time';
ctx.fillStyle="black";
ctx.fillText("Stress "+Math.round(valy*10)/10,mxpos+5,mypos1+15); 
ctx.textBaseline = "middle";
ctx.fillText("k",mxpos+5,mypos2-5);   
  ctx.textBaseline = "hanging";
ctx.fillText("t",(mxpos+5+ctx.measureText("k").width),mypos2-5);
ctx.textBaseline = "middle";
ctx.fillText("*S "+Math.round(valy1*10)/10,(mxpos+5+ctx.measureText("kt").width),mypos2-5);
ctx.textBaseline = "middle";
ctx.fillText("Strain "+(Math.round(valx*1000)/1000),mxpos+5,ypos1-15);
ctx.textBaseline = "middle";
ctx.fillText("P.Strain "+(Math.round(valx1*100000)/1000),mxpos1,ypos1-45);                       
  
  
  ctx.closePath(); //Changed
   if(analysisvalue==1)
   {
  if(canv==1 && analyzed==1) 
  {
     if(inputvalue==4)
      {
          if(stmax>0)
          {
            document.getElementById("level1").value=xval;  
          }
          else
          {
           document.getElementById("level1").value=-1*xval;      
          }
        
      }
      else
      {
          if(stmax>0)
          {
            document.getElementById("level1").value= Math.round(valy1*10)/(10*document.getElementById("ktca").value);    
          }
          else
          {
     document.getElementById("level1").value= -1*Math.round(valy1*10)/(10*document.getElementById("ktca").value); 
          }
      }
      myanalyze();
  }
   }
}





function plothys()
{
 deletegraph1();
  var e=document.getElementById("mydiv2");
  e.style.height = 460; 
  var c=document.getElementById("mycanvas2");
var ctx=c.getContext('2d');
location.href = "#mydiv2";
var w=c.width;
var h=c.height;
var xpos=w-(0.9*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.9*h;
var widx=0.3*ypos;
var widy=0.1*xpos;
 
 var l,ez,ez1,datax1=[],datax2=[],datax3=[],datay1=[],datay2=[],datay3=[];
  if(stmax<0)
 {
     abstmax=-1*stmax;
     abstmin=-1*stmin;
     
    for(var i=0;i<abstmax;i+=1)
 {
   l=(i/prop3)+Math.pow(i/prop4,1/prop5,10); 
   ez=l;
   datax1.push(-100*l);
   datay1.push(-1*i); 
 }  
  
  
 for(var i=abstmax;i>abstmin;i-=1)
 {
   l=ez-2*(((abstmax-i)/(2*prop3))+Math.pow((abstmax-i)/(2*prop4),1/prop5,10));
   ez1=l; 
   datax2.push(-100*l);
   datay2.push(-1*i); 
 } 
for(var i=abstmin;i<abstmax;i+=1)
 {
   l=ez1+2*(((i-abstmin)/(2*prop3))+Math.pow((i-abstmin)/(2*prop4),1/prop5,10)); 
   datax3.push(-100*l);
   datay3.push(-1*i); 
 } 
 }
 else
 {
     for(var i=0;i<stmax;i+=1)
 {
   l=(i/prop3)+Math.pow(i/prop4,1/prop5,10); 
   ez=l;
   datax1.push(100*l);
   datay1.push(i); 
 }  
  
 for(var i=stmax;i>stmin;i-=1)
 {
   l=ez-2*(((stmax-i)/(2*prop3))+Math.pow((stmax-i)/(2*prop4),1/prop5,10));
   ez1=l; 
   datax2.push(100*l);
   datay2.push(i); 
 } 
for(var i=stmin;i<stmax;i+=1)
 {
   l=ez1+2*(((i-stmin)/(2*prop3))+Math.pow((i-stmin)/(2*prop4),1/prop5,10)); 
   datax3.push(100*l);
   datay3.push(i); 
 } 
 }
 
 
 
   var maxx1=Math.max.apply(Math,datax1);
  
 var minx1=Math.min.apply(Math,datax1);
 
 var maxx2=Math.max.apply(Math,datax2);
var minx2=Math.min.apply(Math,datax2);
 var maxx3=Math.max.apply(Math,datax3);
var minx3=Math.min.apply(Math,datax3);

var maxx=Math.max(maxx1,maxx2,maxx3);

var minx=Math.min(minx1,minx2,minx3);


var maxy4=Math.max.apply(Math,datay1);
var miny4=Math.min.apply(Math,datay1);
var maxy2=Math.max.apply(Math,datay2);
var miny2=Math.min.apply(Math,datay2);
var maxy3=Math.max.apply(Math,datay3);
var miny3=Math.min.apply(Math,datay3);
var maxy=Math.max(maxy4,maxy2,maxy3);
var miny=Math.min(miny4,miny2,miny3);
 var lminx=(Math.floor(minx*10)/10);
  var lmaxx=(Math.ceil(maxx*10)/10);
  var lminy=(Math.floor(miny/10)*10);
  var lmaxy=(Math.ceil(maxy/10)*10);
    
   // alert(lmaxx);  
 //alert(lminx);
 //alert(lmaxy);
// alert(lminy);  
       var axpos=xpos+(0-lminx)*(xpos1-xpos)/(lmaxx-lminx);
       var aypos=ypos1-(0-lminy)*(ypos1-ypos)/(lmaxy-lminy);
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(axpos,ypos);
ctx.lineTo(axpos,ypos1);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,aypos);
ctx.lineTo(xpos1,aypos);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=10; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/10));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],aypos+(0.5*widx));
ctx.lineTo(xpos2[i],aypos-(0.5*widx));
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Time';
 ctx.fillStyle="black";
ctx.fillText(Math.round(((Math.round((lmaxx-lminx)*100)*(i)/1000)+lminx)*100)/100,xpos2[i],(aypos+4.5*widy));


}
for (i = 0; i <=10; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/10));
ctx.beginPath();

ctx.moveTo(axpos+(0.5*widy),ypos2[i]);
ctx.lineTo(axpos-(0.5*widy),ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Time';
ctx.fillStyle="black";
ctx.fillText(Math.round(((Math.round((lmaxy-lminy))*(i)/10)+lminy)*100)/100,(axpos-4.5*widy),ypos2[i]);


}
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.fillText("Strain(%)",(xpos1+xpos)/2,ypos1+7*widy);
ctx.save();
ctx.translate(xpos-7*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.fillText("Stress",0,0);
if(un==1)
{
ctx.fillText("  [MPa]",ctx.measureText("Stress").width,0);
}
else
{
ctx.fillText("  [ksi]",ctx.measureText("Stress").width,0);
}
ctx.restore();

for(var i=0; i<datax1.length; i++) {
    datax1[i]=((datax1[i]-minx1)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minx1-lminx)/(lmaxx-lminx)) ;
}
for(var i=0; i<datax2.length; i++) {
    datax2[i]=((datax2[i]-minx2)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minx2-lminx)/(lmaxx-lminx)) ;
}

for(var i=0; i<datax3.length; i++) {
    datax3[i]=((datax3[i]-minx3)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minx3-lminx)/(lmaxx-lminx));
}

   for(var i=0; i<datay1.length; i++) {
    datay1[i]=ypos1-((datay1[i]-miny4)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(miny4-lminy)/(lmaxy-lminy)));
}
 for(var i=0; i<datay2.length; i++) {
    datay2[i]=ypos1-((datay2[i]-miny2)*(ypos1-ypos)/(lmaxy-lminy)+(ypos1-ypos)*(miny2-lminy)/(lmaxy-lminy));
}
for(var i=0; i<datay3.length; i++) {
    datay3[i]=ypos1-((datay3[i]-miny3)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(miny3-lminy)/(lmaxy-lminy)));
}

 ctx.beginPath();
ctx.moveTo(datax1[0],datay1[0]);
  for(var i=1; i<datay1.length; i++) {
      ctx.lineTo(datax1[i],datay1[i]);
        ctx.lineWidth=2;
      ctx.stroke();
  }
  ctx.beginPath();
ctx.moveTo(datax2[0],datay2[0]);
  for(var i=1; i<datay2.length; i++) {
      ctx.lineTo(datax2[i],datay2[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#0000ff';
      ctx.stroke();
  }
  ctx.beginPath();
      ctx.moveTo(datax3[0],datay3[0]);
  for(var i=1; i<datay3.length; i++) {
      ctx.lineTo(datax3[i],datay3[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#00ffff';
      ctx.stroke();
  }   
  ctx.closePath(); //Changed
   
 
}

function myhyst()
{
document.getElementById("tb6").style.borderColor = "#000080";
 document.getElementById("img7").style.visibility="visible";
if(dhi==1)
{
document.getElementById("dhelp1").style.visibility="hidden";
document.getElementById("dhelp4").style.visibility="hidden";
 document.getElementById("dhelp3").style.visibility="hidden";
 document.getElementById("dhelp2").style.visibility="hidden";
}


    if(mypos==1|| mypos==2){
    if(analysisvalue==1){
     mypos=2;
    plothys();   
    }
    else
    {
mypos=2;
        calcrmainip();
   calchys();
            rplothys(); 
    }
    
  
    }
    else
    {
myanalyze();
    }
document.getElementById("lifea1").removeAttribute("disabled"); 
document.getElementById("lifea2").removeAttribute("disabled");
document.getElementById("lifea3").removeAttribute("disabled");
document.getElementById("life2").removeAttribute("disabled"); 
document.getElementById("life").removeAttribute("disabled");
document.getElementById("life").focus(); 
    
}
function mylife()
{
dhi=0;
document.getElementById("dhelp1").style.visibility="hidden";
document.getElementById("dhelp2").style.visibility="hidden";
 document.getElementById("dhelp3").style.visibility="hidden";
 document.getElementById("dhelp4").style.visibility="hidden";
 
 
    if(analysisvalue==1){
     mypos=3;
       document.getElementById("comphead").style.visibility="visible";
    document.getElementById("Select_Material1").style.visibility="visible";
      document.getElementById("clear").style.visibility="visible";
   document.getElementById("divcompare1").style.height=0;
                document.getElementById("headcompare1").height=0; 
  document.getElementById("compare1").style.visibility="hidden";
           document.getElementById("headcompare1").style.visibility="hidden"; 
            document.getElementById("divcompare1").style.visibility="hidden";
         document.getElementById("compare").style.visibility="visible";
           document.getElementById("headcompare").style.visibility="visible"; 
            document.getElementById("divcompare").style.visibility="visible";
              
  var lval2=lifep1;
   var e3 = document.getElementById("life2"); 
  var lval3=e3.options[e3.selectedIndex].value; 
 if(mypos==3){
  if(lval2==1){
      if(lval3==1)
      {
          plotlife();
  
      }
      else
      {
        if(lval3==2)
{

        plotlife1();
}
else
{
alert("available in full version")
plotlife();
}
        }
  } 
  else
  {
      
   if(lval2==2){
       
          if(lval3==1)
      {
          
           plotlife2();
  
      }
      else
      {    
	  alert("Available in full Version");
            
  
          plotlife2();
  
  }
      }  
         
        else
        {
         if(lval2==3){
            if(lval3==1)
            {
                
  
          plotlife3();
  
  }
            }
                else
                { 
                 alert("Available in Full Version");
                plotlife3();
 
  }
                }  
  }  
}  
        
               document.getElementById("nf").style.visibility="visible"; 
               document.getElementById("divcompare").style.height=150;
                document.getElementById("headcompare").height=30;
                
    }
    else
    {
        mypos=3;
    document.getElementById("comphead").style.visibility="visible";
      document.getElementById("Select_Material1").style.visibility="visible";
      document.getElementById("clear").style.visibility="visible";
         document.getElementById("compare1").style.visibility="visible";
           document.getElementById("headcompare1").style.visibility="visible"; 
            document.getElementById("divcompare1").style.visibility="visible";
  document.getElementById("compare").style.visibility="hidden";
           document.getElementById("headcompare").style.visibility="hidden"; 
            document.getElementById("divcompare").style.visibility="hidden";
            document.getElementById("olife").style.visibility="visible";
           document.getElementById("headlife").style.visibility="visible"; 
            document.getElementById("divlife").style.visibility="visible";
             document.getElementById("divlife").style.border="1";
            
                document.getElementById("mydiv3").style.height=300;
               document.getElementById("divcompare").style.height=0;
                document.getElementById("headcompare").style.height=0; 
   document.getElementById("divcompare1").style.height=150;
                document.getElementById("headcompare1").style.height=30; 
                 document.getElementById("lifeoutput").style.visibility="visible";
                calclife();
    }
    
}


function plotlife()
{
     deletegraph2();
     var e=document.getElementById("mydiv3");
  e.style.height = 460; 
   
   
    var datayyl1=[] , dataxxl1=[];
    var l,lo;
    for (var i = 0; i < 7; i +=0.1) 
    {
        
    l=(prop6)*(Math.pow((2*Math.pow(10,i)),prop7));
    lo=i+(Math.log(2)/Math.log(10));
    dataxxl1.push(lo) ;
    datayyl1.push(l);
    }  
      
    var c=document.getElementById("mycanvas3");
    var ctx=c.getContext('2d');
    var w=c.width;
    var h=c.height;
    
    var xpos=w-(0.85*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.85*h;
var widx=0.3*ypos;
var widy=0.1*xpos;

var maxlx=Math.max.apply(Math,dataxxl1);
var minlx=Math.min.apply(Math,dataxxl1);
var maxly=Math.max.apply(Math,datayyl1);
var minly=Math.min.apply(Math,datayyl1);

  var lminx=0;
  
  var lmaxx=8;
  var lminy=(Math.floor(minly/10)*10);
  var lmaxy=(Math.ceil(maxly/10)*10);
  ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,ypos);
ctx.lineTo(xpos,ypos1);
ctx.stroke();
ctx.lineTo(xpos1,ypos1);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=8; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/8));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],ypos1);
ctx.lineTo(xpos2[i],ypos1-widx);
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Time';
 ctx.fillStyle="black";
 ctx.textBaseline = "middle";
ctx.fillText("10",xpos2[i],(ypos1+3*widy));   
  ctx.textBaseline = "ideographic";
ctx.fillText(i,(xpos2[i]+ctx.measureText("10").width),(ypos1+3*widy));

}

for (i = 0; i <=10; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/10));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Time';
ctx.fillStyle="black";
ctx.fillText(Math.round(((Math.round((lmaxy-lminy))*(i)/10)+lminy)*100)/100,(xpos-4*widy),ypos2[i]);


}
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("2N   [Reversals]",(xpos1+xpos)/2,ypos1+5*widy);   
  ctx.textBaseline = "hanging";
ctx.fillText("f",(((xpos1+xpos)/2)+ctx.measureText("2N").width),ypos1+5*widy);

ctx.save();
ctx.translate(xpos-6*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("Stress Amplitude",-80,0);
if(un==1)
{
ctx.fillText("  [MPa]",ctx.measureText("Stress Amplitude").width-80,0);
}
else
{
ctx.fillText("  [ksi]",ctx.measureText("Stress Amplitude").width-80,0);
}
ctx.restore();
 ctx.textBaseline = "middle";
for(var i=0; i<dataxxl1.length; i++) {
    dataxxl1[i]=((dataxxl1[i]-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
}

   for(var i=0; i<datayyl1.length; i++) {
    datayyl1[i]=ypos1-((datayyl1[i]-minly)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy)));
}
 
 ctx.beginPath();
ctx.moveTo(dataxxl1[0],datayyl1[0]);
  for(var i=1; i<datayyl1.length; i++) {
      ctx.lineTo(dataxxl1[i],datayyl1[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#0f0f05';
      ctx.stroke();
  }
 

     
    var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
      li=(prop6-stmean)*(Math.pow((2*i),prop7));
      loo=i;
      if(li<stamp)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
      lii=(prop6-stmean)*(Math.pow((2*i),prop7));
      looo=i;
      if(lii<stamp)
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(prop6-stmean)*(Math.pow((2*i),prop7));
      loo=i;
      if(li<stamp)
      {
          break
      }
 }
   var nfval=loo;

      document.getElementById("op10").innerHTML=nfval; 
    lifpos=Math.log(2*nfval)/Math.log(10);
    
       xlifepos=((lifpos-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
       ylifepos=ypos1-(((stamp-minly)*(ypos1-ypos)/(lmaxy-lminy))+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy)) );
    ctx.beginPath();
 ctx.strokeStyle = '#0000ff';
ctx.moveTo(xpos,ylifepos);
ctx.lineTo(xlifepos,ylifepos);
ctx.stroke();
ctx.lineTo(xlifepos,ypos1);
ctx.stroke();
  
    ctx.closePath(); //Changed
    
    
    
 location.href = "#mycanvas3";    
}

function plotlife1()
{
    deletegraph2();
    var e=document.getElementById("mydiv3");
  e.style.height = 460; 
        var datayyl1=[] , dataxxl1=[];
    var l,lo;
    for (var i = 0; i < 7; i +=0.01) {
        
    l=(prop6)*(Math.pow((2*Math.pow(10,i)),prop7));
    lo=i+(Math.log(2)/Math.log(10));
    dataxxl1.push(lo) ;
    datayyl1.push(l);
    }  
      
    var c=document.getElementById("mycanvas3");
    var ctx=c.getContext('2d');
    var w=c.width;
    var h=c.height;
    var xpos=w-(0.85*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.85*h;
var widx=0.3*ypos;
var widy=0.1*xpos;

var maxlx=Math.max.apply(Math,dataxxl1);
var minlx=Math.min.apply(Math,dataxxl1);
var maxly=Math.max.apply(Math,datayyl1);
var minly=Math.min.apply(Math,datayyl1);

  var lminx=0;
  
  var lmaxx=8;
  var lminy=(Math.floor(minly/10)*10);
  var lmaxy=(Math.ceil(maxly/10)*10);
  ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,ypos);
ctx.lineTo(xpos,ypos1);
ctx.stroke();
ctx.lineTo(xpos1,ypos1);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=8; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/8));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],ypos1);
ctx.lineTo(xpos2[i],ypos1-widx);
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Time';
 ctx.fillStyle="black";
 ctx.textBaseline = "middle";
ctx.fillText("10",xpos2[i],(ypos1+3*widy));   
  ctx.textBaseline = "ideographic";
ctx.fillText(i,(xpos2[i]+ctx.measureText("10").width),(ypos1+3*widy));

}

for (i = 0; i <=10; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/10));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Time';
ctx.fillStyle="black";
ctx.fillText(Math.round(((Math.round((lmaxy-lminy))*(i)/10)+lminy)*100)/100,(xpos-4*widy),ypos2[i]);


}
  ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("2N  [Reversals]",(xpos1+xpos)/2,ypos1+5*widy);   
  ctx.textBaseline = "hanging";
ctx.fillText("f",(((xpos1+xpos)/2)+ctx.measureText("2N").width),ypos1+5*widy);

ctx.save();
ctx.translate(xpos-6*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("SWT Parameter",-80,0);
if(un==1)
{
ctx.fillText(" [MPa]",ctx.measureText("SWT Parameter").width-80,0);
}
else
{
ctx.fillText("  [ksi]",ctx.measureText("SWT Parameter").width-80,0);
}
ctx.restore();
ctx.textBaseline = "middle"; 
for(var i=0; i<dataxxl1.length; i++) {
    dataxxl1[i]=((dataxxl1[i]-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
}

   for(var i=0; i<datayyl1.length; i++) {
    datayyl1[i]=ypos1-((datayyl1[i]-minly)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy)));
}
 
 ctx.beginPath();
ctx.moveTo(dataxxl1[0],datayyl1[0]);
  for(var i=1; i<datayyl1.length; i++) {
      ctx.lineTo(dataxxl1[i],datayyl1[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#00ff00';
      ctx.stroke();
  }
 var valll=Math.sqrt(Math.abs(stmax*stamp))
 var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
      li=(prop6)*(Math.pow((2*i),prop7));
      loo=i;
      if(li<valll)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
      lii=(prop6)*(Math.pow((2*i),prop7));
      looo=i;
      if(lii<valll)
      {
          
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(prop6)*(Math.pow((2*i),prop7));
      loo=i;
      if(li<valll)
      {
          break
      }
 }
   var nfval=loo;

      document.getElementById("op10").innerHTML=nfval; 
    lifpos=Math.log(2*nfval)/Math.log(10);
    
       xlifepos=((lifpos-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
       ylifepos=ypos1-(((valll-minly)*(ypos1-ypos)/(lmaxy-lminy))+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy))) ;
    ctx.beginPath();
 ctx.strokeStyle = '#0000ff';
ctx.moveTo(xpos,ylifepos);
ctx.lineTo(xlifepos,ylifepos);
ctx.stroke();
ctx.lineTo(xlifepos,ypos1);
ctx.stroke();
  
    ctx.closePath(); //Changed
    location.href = "#mydiv3";
    
}


function plotlife2()
{
    deletegraph2();
     var e=document.getElementById("mydiv3");
  e.style.height = 460; 
    
    var datayyl1=[] , dataxxl1=[];
    var l,lo,lk;
    for (var i = 0; i < 7; i +=0.01) {
        
    l=(((prop6-stmean)*(Math.pow((2*Math.pow(10,i)),prop7)))/prop3)+(prop8*(Math.pow((2*Math.pow(10,i)),prop9)));
    lk=(Math.log(l)/Math.log(10));
    lo=i+(Math.log(2)/Math.log(10));
    dataxxl1.push(lo) ;
    datayyl1.push(lk);
    }  
      
    var c=document.getElementById("mycanvas3");
    var ctx=c.getContext('2d');
    
    var w=c.width;
    var h=c.height;
    var xpos=w-(0.85*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.85*h;
var widx=0.3*ypos;
var widy=0.1*xpos;

var maxlx=Math.max.apply(Math,dataxxl1);
var minlx=Math.min.apply(Math,dataxxl1);
var maxly=Math.max.apply(Math,datayyl1);
var minly=Math.min.apply(Math,datayyl1);
  
  var lminx=0;
  
  var lmaxx=8;
  var lminy=(Math.floor(minly));
  var lmaxy=(Math.ceil(maxly));
  ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,ypos);
ctx.lineTo(xpos,ypos1);
ctx.stroke();
ctx.lineTo(xpos1,ypos1);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=8; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/8));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],ypos1);
ctx.lineTo(xpos2[i],ypos1-widx);
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Time';
 ctx.fillStyle="black";
 ctx.textBaseline = "middle";
ctx.fillText("10",xpos2[i],(ypos1+3*widy));   
  ctx.textBaseline = "ideographic";
ctx.fillText(i,(xpos2[i]+ctx.measureText("10").width),(ypos1+3*widy));

}

for (i = 0; i <=(lmaxy-lminy); i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/(lmaxy-lminy)));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("10",(xpos-5*widy),ypos2[i]);
 ctx.textBaseline = "ideographic";
ctx.fillText(lminy+i,((xpos-5*widy)+ctx.measureText("10").width),ypos2[i]);

}
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("2N  [Reversals]",(xpos1+xpos)/2,ypos1+5*widy);   
  ctx.textBaseline = "hanging";
ctx.fillText("f",(((xpos1+xpos)/2)+ctx.measureText("2N").width),ypos1+5*widy);

ctx.save();
ctx.translate(xpos-6*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("Total Strain Amplitude",-100,0);
ctx.restore();
 ctx.textBaseline = "middle";  
for(var i=0; i<dataxxl1.length; i++) {
    dataxxl1[i]=((dataxxl1[i]-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
}

   for(var i=0; i<datayyl1.length; i++) {
    datayyl1[i]=ypos1-((datayyl1[i]-minly)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy)));
}
 
 ctx.beginPath();
ctx.moveTo(dataxxl1[0],datayyl1[0]);
  for(var i=1; i<datayyl1.length; i++) {
      ctx.lineTo(dataxxl1[i],datayyl1[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#00ff00';
      ctx.stroke();
  }
 
 var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
     
      li=(((prop6-stmean)*(Math.pow((2*i),prop7)))/prop3)+(prop8*(Math.pow((2*i),prop9)));
      loo=i;
      if(li<eamp)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=(((prop6-stmean)*(Math.pow((2*i),prop7)))/prop3)+(prop8*(Math.pow((2*i),prop9)));
      looo=i;
      if(lii<eamp)
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(((prop6-stmean)*(Math.pow((2*i),prop7)))/prop3)+(prop8*(Math.pow((2*i),prop9)));
      loo=i;
     
      if(li<eamp)
      {
          break
      }
 }
   var nfval=loo;

      document.getElementById("op10").innerHTML=nfval; 
    lifpos=Math.log(2*nfval)/Math.log(10);
      ypoos=(Math.log(eamp)/Math.log(10));
           
       xlifepos=((lifpos-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
       ylifepos=ypos1-(((ypoos-minly)*(ypos1-ypos)/(lmaxy-lminy))+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy))) ;
     
    ctx.beginPath();
 ctx.strokeStyle = '#0000ff';
ctx.moveTo(xpos,ylifepos);
ctx.lineTo(xlifepos,ylifepos);
ctx.stroke();
ctx.lineTo(xlifepos,ypos1);
ctx.stroke();
  
    ctx.closePath(); //Changed
   location.href = "#mydiv3"; 
}

function plotlife3()
{
    deletegraph2();
    var e=document.getElementById("mydiv3");
  e.style.height = 460; 
    
    var datayyl1=[] , dataxxl1=[];
    var l,lo,lk;
    for (var i = 0; i < 7; i +=0.01) {
        
    l=prop6*Math.pow((2*Math.pow(10,i)),prop7) *((prop6*Math.pow((2*Math.pow(10,i)),prop7)/prop3)+prop8*Math.pow((2*Math.pow(10,i)),prop9)) ;
    lk=(Math.log(l)/Math.log(10));
    lo=i+(Math.log(2)/Math.log(10));
    dataxxl1.push(lo) ;
    datayyl1.push(lk);
    }  
      
    var c=document.getElementById("mycanvas3");
    var ctx=c.getContext('2d');
    var w=c.width;
    var h=c.height;
    var xpos=w-(0.85*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.85*h;
var widx=0.3*ypos;
var widy=0.1*xpos;

var maxlx=Math.max.apply(Math,dataxxl1);
var minlx=Math.min.apply(Math,dataxxl1);
var maxly=Math.max.apply(Math,datayyl1);
var minly=Math.min.apply(Math,datayyl1);
  
  var lminx=0;
  
  var lmaxx=8;
  var lminy=(Math.floor(minly));
  var lmaxy=(Math.ceil(maxly));
  ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,ypos);
ctx.lineTo(xpos,ypos1);
ctx.stroke();
ctx.lineTo(xpos1,ypos1);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=8; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/8));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],ypos1);
ctx.lineTo(xpos2[i],ypos1-widx);
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Time';
 ctx.fillStyle="black";
 ctx.textBaseline = "middle";
ctx.fillText("10",xpos2[i],(ypos1+3*widy));   
  ctx.textBaseline = "ideographic";
ctx.fillText(i,(xpos2[i]+ctx.measureText("10").width),(ypos1+3*widy));

}

for (i = 0; i <=(lmaxy-lminy); i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/(lmaxy-lminy)));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("10",(xpos-5*widy),ypos2[i]);
 ctx.textBaseline = "ideographic";
ctx.fillText(lminy+i,((xpos-5*widy)+ctx.measureText("10").width),ypos2[i]);

}
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("2N [Reversals]",(xpos1+xpos)/2,ypos1+5*widy);   
  ctx.textBaseline = "hanging";
ctx.fillText("f",(((xpos1+xpos)/2)+ctx.measureText("2N").width),ypos1+5*widy);

ctx.save();
ctx.translate(xpos-6*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.textBaseline = "middle";
ctx.fillText("SWT Parameter",-80,0);
if(un==1)
{
ctx.fillText("  [MPa]",ctx.measureText("SWT Parameter").width-80,0);
}
else
{
ctx.fillText("  [ksi]",ctx.measureText("SWT Parameter").width-80,0);
}
ctx.restore();
 ctx.textBaseline = "middle";  
for(var i=0; i<dataxxl1.length; i++) {
    dataxxl1[i]=((dataxxl1[i]-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
}

   for(var i=0; i<datayyl1.length; i++) {
    datayyl1[i]=ypos1-((datayyl1[i]-minly)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy)));
}
 
 ctx.beginPath();
ctx.moveTo(dataxxl1[0],datayyl1[0]);
  for(var i=1; i<datayyl1.length; i++) {
      ctx.lineTo(dataxxl1[i],datayyl1[i]);
        ctx.lineWidth=2;
        ctx.strokeStyle = '#00ff00';
      ctx.stroke();
  }
 
 var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
     
      li=prop6*Math.pow((2*i),prop7) *((prop6*Math.pow((2*i),prop7)/prop3)+prop8*Math.pow((2*i),prop9)) ;
      loo=i;
      if(li<Math.abs(stmax*eamp))
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=prop6*Math.pow((2*i),prop7) *((prop6*Math.pow((2*i),prop7)/prop3)+prop8*Math.pow((2*i),prop9)) ;
      looo=i;
      if(lii<Math.abs(stmax*eamp))
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=prop6*Math.pow((2*i),prop7) *((prop6*Math.pow((2*i),prop7)/prop3)+prop8*Math.pow((2*i),prop9)) ;
      loo=i;
     
      if(li<Math.abs(stmax*eamp))
      {
          break
      }
 }
   var nfval=loo;

      document.getElementById("op10").innerHTML=nfval; 
    lifpos=Math.log(2*nfval)/Math.log(10);
      ypoos=(Math.log((stmax*eamp))/Math.log(10));
           
       xlifepos=((lifpos-minlx)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minlx-lminx)/(lmaxx-lminx)) ;
       ylifepos=ypos1-(((ypoos-minly)*(ypos1-ypos)/(lmaxy-lminy))+((ypos1-ypos)*(minly-lminy)/(lmaxy-lminy))) ;

    ctx.beginPath();
 ctx.strokeStyle = '#0000ff';
ctx.moveTo(xpos,ylifepos);
ctx.lineTo(xlifepos,ylifepos);
ctx.stroke();
ctx.lineTo(xlifepos,ypos1);
ctx.stroke();
  
    ctx.closePath(); //Changed
    location.href = "#mydiv3";
    
}
function mylifechangefcn1()
{
    if(document.getElementById("lifea1").checked == true)
	{
	lifep1=1;
	}
 if(document.getElementById("lifea2").checked == true)
	{
	lifep1=2;
	}
	if(document.getElementById("lifea3").checked == true)
	{
	lifep1=3;
	}
	
	
  var lval1=lifep1;
  
   var daySelect= document.getElementById("life2");
   daySelect.innerHTML="";
 
  if(lval1==1)
            {
              daySelect.options[daySelect.options.length] = new Option('Basquin/Morrow','1'); 
              daySelect.options[daySelect.options.length] = new Option('SWT', '2'); 
              daySelect.options[daySelect.options.length] = new Option('Goodman','3');
                  }
              
            
            
            else
            {
              if(lval1==2){
                   
                   daySelect.options[daySelect.options.length] = new Option('Morrow', '1'); 
              daySelect.options[daySelect.options.length] = new Option('Modified Goodman', '2'); 
                                
              }  
              else
              {
                  if(lval1==3)
                  {
                     
                       daySelect.options[daySelect.options.length] = new Option('SWT', '1'); 
              daySelect.options[daySelect.options.length] = new Option('SWT-Deviatoric', '2'); 
              daySelect.options[daySelect.options.length] = new Option('Critical Plane Based','3');
                  }
                  
              }
            }
}


function mylifechangefcn2()
{

  var lval2=lifep1;
   var e3 = document.getElementById("life2"); 
  var lval3=e3.options[e3.selectedIndex].value;
 if(lval2==2 && lval3==2)
 {
 alert("Available In Full Version");

 }
 if(lval2==1 && lval3==3)
 {
 alert("Available In Full Version");
 }
if(lval2==3 && lval3==2)
 {
 alert("Available In Full Version");
 }
 if(lval2==3 && lval3==3)
 {
 alert("Available In Full Version");
 }
}

function myaddrowfcn() {
 
if(analysisvalue==1)
{
            var table = document.getElementById("compare");

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
}
else
{
var table = document.getElementById("compare1");
 var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
}
 
            
 
           
 
var e = document.getElementById("Select_Material1");
 
      var kk=[];
   
     
 if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        
   var kk=[];
   kk=xmlhttp.responseText;
     var d=[];
   var j=0;
   for(var i=0;i<kk.length;i++) {
    if(kk[i]=="\n")
        {
      d[j]=i;
      j++;
  }
 
   }      
 var cell1 = row.insertCell(0);
 cell1.innerHTML =kk.substring(0,d[0]);
 var mprop=[];
    for(var p=0;p<9;p++)
   {
       mprop[p]=Number(kk.substring(d[p],d[p+1]));
   
   }
   
   
   
   if(analysisvalue==1)
   {
   var input1= document.getElementById("ktca").value;  
   var input2= document.getElementById("level1").value;
   var input3= document.getElementById("level2").value;
   point1=Math.abs(input1*input2); 
       point2=Math.abs(input1*(input2-input3)/2);
        var cond= input2/Math.abs(input2);  
        var mstmax,l,lo,lim; 
         var gamma,gammaef,mul;  
    for (var i = 0; i < mprop[5]; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     lim=(i-10);
     
     if(inputvalue==4)
     {
      if(l>input2/100) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point1)  {
       break;
      
   }
         }
    }     
      
         
    for (var i = lim; i < lim+10; i +=0.01) 
    {
    if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
         mstmax=(i-0.01);
     
     if(inputvalue==4)
     {
      if(l>input2/100) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point1)  {
       break;
      
   }
         }
    }     
      mstmax=Math.round(mstmax*10)/10; 
   var memax=mstmax/mprop[2]+Math.pow(mstmax/mprop[3],1/mprop[4],10);
   
     var mstamp;
      for (var i = 0; i < mprop[5]; i += 10) 
    {
    if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
        lim=(i-10);
    if(inputvalue==4)
     {
      if(l>(input2-input3)/200) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point2)  {
       break;
   }
         }
    }         
             
              for (var i = lim; i <lim+10; i += 0.01) 
    {
    if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
        mstamp=(i-0.01);
    if(inputvalue==4)
     {
      if(l>(input2-input3)/200) 
      {
          break;
      }  
     }
         else
         {
   if(lo>point2)  {
       break;
   }
         }
    } 
       mstamp=Math.round(mstamp*10)/10; 
       var meamp= mstamp/mprop[2]+Math.pow(mstamp/mprop[3],1/mprop[4],10);
       if(cond==1)
     {
     
       var mstmin=mstmax-2*mstamp;
        
       var mstmean=(mstmax+mstmin)/2;
       
      var memin=memax-2*meamp;
       var memean=(memax+memin)/2;
     }
     else
     {
          mstmax=mstmax*cond;
            memax=memax*cond;
         var mstmin=mstmax+2*mstamp;
        
       var mstmean=(mstmax+mstmin)/2;
       
      var memin=memax+2*meamp;
       var memean=(memax+memin)/2; 
     }
       var value2,value3;
   
  
  var lval2=lifep1;
   var e3 = document.getElementById("life2"); 
  var lval3=e3.options[e3.selectedIndex].value;
 if(mypos==3){
  if(lval2==1){
      if(lval3==1)
      {
         var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
      li=(mprop[5]-mstmean)*(Math.pow((2*i),mprop[6]));
      loo=i;
      if(li<mstamp)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
      lii=(mprop[5]-mstmean)*(Math.pow((2*i),mprop[6]));
      looo=i;
      if(lii<mstamp)
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(mprop[5]-mstmean)*(Math.pow((2*i),mprop[6]));
      loo=i;
      if(li<mstamp)
      {
          break
      }
 }
   value2=loo;  
    value3=(mprop[5]-mstmean)*(Math.pow((2*10000000),mprop[6]));     
      }
      else
      {
          
           var valll=Math.sqrt(Math.abs(mstmax*mstamp))
 var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
      li=(mprop[5])*(Math.pow((2*i),mprop[6]));
      loo=i;
      if(li<valll)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
      lii=(mprop[5])*(Math.pow((2*i),mprop[6]));
      looo=i;
      if(lii<valll)
      {
          
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(mprop[5])*(Math.pow((2*i),mprop[6]));
      loo=i;
      if(li<valll)
      {
          break
      }
 }
   value2=loo;
   value3=(mprop[5])*(Math.pow((2*10000000),mprop[6]));
      }
  } 
  else
  {
      
   if(lval2==2){
       
          if(lval3==1)
      {
         
           var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
     
      li=(((mprop[5]-mstmean)*(Math.pow((2*i),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*i),mprop[8])));
      loo=i;
      if(li<meamp)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=(((mprop[5]-mstmean)*(Math.pow((2*i),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*i),mprop[8])));
      looo=i;
      if(lii<meamp)
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(((mprop[5]-mstmean)*(Math.pow((2*i),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*i),mprop[8])));
      loo=i;
     
      if(li<meamp)
      {
          break
      }
 }
   value2=loo;
   value3=(((mprop[5]-mstmean)*(Math.pow((2*10000000),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*10000000),mprop[8])));

      }
      
        }  
        else
        {
         if(lval2==3){
            if(lval3==1)
            {
          var li,loo,lii,looo;
 for(var i=1;i<10000002;i+=100000)
 {
     
      li=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*i),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*i),mprop[8])) ;
      loo=i;
      if(li<Math.abs(mstmax*meamp))
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*i),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*i),mprop[8])) ;
      looo=i;
      if(lii<Math.abs(mstmax*meamp))
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*i),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*i),mprop[8])) ;
      loo=i;
     
      if(li<Math.abs(mstmax*meamp))
      {
          break
      }
 }
   value2=loo;
value3=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*10000000),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*10000000),mprop[8])) ;
            }
                
            }   
        } 
  }
 } 
   
if(lval2==1)
{
 var cell2 = row.insertCell(1);
if(un==1)
{
 cell2.innerHTML =Math.round(value3*1000)/1000+"  [MPa]";

}
else
{
cell2.innerHTML =Math.round(value3*1000)/1000+"  [Ksi]";
}
           
           
}
else
{
if(lval2==2)
{
 var cell2 = row.insertCell(1);

 cell2.innerHTML =Math.round(value3*1000)/1000
}
else
{

 var cell2 = row.insertCell(1);
if(un==1)
{
 cell2.innerHTML =Math.round(value3*1000)/1000+"  [MPa]";

}
else
{
cell2.innerHTML =Math.round(value3*1000)/1000+"  [Ksi]";
}
           
           
}

} 

   
         var cell3 = row.insertCell(2);
             cell3.innerHTML = value2;  
   }
   else
   {
     var input1= document.getElementById("ktva").value;
  mstress=[];
  mnstress=[];
  mstrain=[];
 if(inputvalue==1||inputvalue==3)
 {
  mnstress=input;
 
   var cond=mnstress[0]/Math.abs(mnstress[0]) ;
   var l,lo,lim; 
   var gamma,gammaef,mul;  
    for (var i = 0; i < mprop[5]; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
     if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     lim=(i-10);
      
   if(lo>Math.abs(input1*mnstress[0]))  {
       break;
      
   }
         
    }     
   
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                                if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     mstress[0]=(i-0.01);
     
    
   if(lo>Math.abs(input1*mnstress[0]))  {
       break;
      
   }
         
    }     
        mstress[0]=Math.round(mstress[0]*10)/10;
      mstrain[0]=mstress[0]/mprop[2]+Math.pow(mstress[0]/mprop[3],1/mprop[4],10);
      if(cond==-1)
      {
          mstress[0]=-1*mstress[0];
          mstrain[0]=-1*mstrain[0];
      }
   
   for (var k=1;k<input.length;k++)
   {
       
       point1=Math.abs(input1*(input[k-1]-input[k])/2);
       var l,lo,lim,mstmax,memax; 
         var gamma,gammaef,mul;  
    for (var i = 0; i < mprop[5]; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     lim=(i-10);
      
   if(lo>point1)  {
       break;
      
   }
         
    }     
      
         
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                                if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     mstmax=(i-0.01);
    
   if(lo>point1)  {
       break;
      
  
         }
    }     
        mstmax=Math.round(mstmax*10)/10;
      memax=mstmax/mprop[2]+Math.pow(mstmax/mprop[3],1/mprop[4],10);
      
     
      if((input[k])>(input[k-1]))
      {
         
         mstress[k]=mstress[k-1]+2*mstmax;
        
      mstrain[k]=mstrain[k-1]+2*memax;  
      }
      else
      {
         
          mstress[k]=mstress[k-1]-2*mstmax;
        
      mstrain[k]=mstrain[k-1]-2*memax;   
      }
      
    
   }
   
  
 }   
 else
 {
     if(inputvalue==2)
     {
        mnstress=input;
        mstress=input;
        for(var i=0;i<input.length;i++)
        {
            var tstrain=Math.abs(stress[i])/mprop[2]+Math.pow(Math.abs(stress[i])/mprop[3],1/mprop[4],10);
            mstrain[i]=tstrain*input[i]/Math.abs(input[i]);
        } 
     }
     else
     {
       
       mstrain=input;
       var cond=mstrain[0]/Math.abs(mstrain[0]) ;
   var l,lo,lim; 
   var gamma,gammaef,mul;  
    for (var i = 0; i < prop2; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     lim=(i-10);
      
   if(l>Math.abs(mstrain[0]))  {
       break;
      
   }
         
    }     
   
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                                if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     mstress[0]=(i-0.01);
     
    
   if(l>Math.abs(mmstrain[0]))  {
       break;
      
   }
         
    }     
        mstress[0]=Math.round(mstress[0]*10)/10;
      mstrain[0]=mstress[0]/mprop[2]+Math.pow(mstress[0]/mprop[3],1/mprop[4],10);
      if(cond==-1)
      {
          mstress[0]=-1*mstress[0];
          mstrain[0]=-1*mstrain[0];
      }
   
   for (var k=1;k<input.length;k++)
   {
       
       point1=Math.abs(input[k]-input[k-1])/2;
       var l,lo,lim; 
         var gamma,gammaef,mul;  
    for (var i = 0; i < mprop[5]; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                            if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     lim=(i-10);
     
    
         
   if(l>point1)  {
       break;
      
   }
         
    }     
      
         
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
                                if(valop1==1)
            {
             lo=Math.sqrt(mprop[2]*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(mprop[2]*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(mprop[2]*i*l*mul); 
              }
        }
        else
        {
         l=i/mprop[2]+Math.pow(i/mprop[3],1/mprop[4],10);
         lo=i;   
        }
     stmax=(i-0.01);
     
     
   if(l>point1)  {
       break;
      
   }
         
    }     
        stmax=Math.round(stmax*10)/10;
      emax=stmax/mprop[2]+Math.pow(stmax/mprop[3],1/mprop[4],10);
       
      if(input[k]>input[k-1])
      {
         mstress[k]=mstress[k-1]+2*stmax;
        
      mstrain[k]=mstrain[k-1]+2*emax;  
      }
      else
      {
         mstress[k]=mstress[k-1]-2*stmax;
        
      mstrain[k]=mstrain[k-1]-2*emax;   
      }
      
    
   }
    
     mnstress=mstress;  
       
    
     }
 
 }   
 for(var k=0;k<mstress.length;k++)
 {
     mstress[k]=Math.round(mstress[k]);
 }
 
 op1=[];
        op=[];
       
    for(var i=0;i<input.length;i++)
        {
            rlife[i]=Math.round(mstress[i]);
        }
     rlife[input.length]=Math.round(mstress[0]);
     jk=0;
     
     arrangedata(rlife);
     
    while (1)
    {       
                 var m=[];                                                    
                 m[0]=0;
                 for(var i=2;i<op.length;i=i+2)
                 {
                     if(op[0]==op[i]&&op[1]==op[i+1])
                     {
                         m[m.length]=i;
                         
                     }
                 }
                 
    var val=Number(op1.length);
                 op1[val]=new Array(6);
                      op1[val][0]=op[0];
                      op1[val][1]=op[1]; 
                      op1[val][2]=m.length; 
                      op1[val][3]=Math.abs(op[0]-op[1])/2; 
                        
                    for(var i=0;i<m.length;i++)               
                            {
                                op.splice(m[i]-(i*2),1);
                                
                                 op.splice(m[i]-(i*2),1);
                                 
                            }
                            
                                            if(op.length==2)
                                            {
                                                 var val=Number(op1.length);
                                                 
                    op1[val]=new Array(6);  
                     op1[val][0]=op[0];
                      op1[val][1]=op[1]; 
                      op1[val][2]=1; 
                      op1[val][3]=Math.abs(op[0]-op[1])/2;
                                           
                                            }
                                               if(op.length<=2)
                                            {
                                                break;
                                            }
                                            
                 
                 
    }
    
  
    for(var k=0;k<op1.length;k++)
    {
    
        var mstmax=op1[k][0];
        var mstmin=op1[k][1];
        var mstamp=Math.abs((mstmax-mstmin)/2);
        var mstmean=(mstmax+mstmin)/2;
        var memax=mstmax/mprop[2]+Math.pow(mstmax/mprop[3],1/mprop[4],10); 
        var memin=(mstmin/Math.abs(mstmin))*(Math.abs(mstmin)/mprop[2]+Math.pow(Math.abs(mstmin)/mprop[3],1/mprop[4],10)); 
        var meamp=Math.abs((memax-memin)/2);
     

    var lval2=lifep1;
    var e3 = document.getElementById("life2"); 
    var lval3=e3.options[e3.selectedIndex].value;
     
     if(lval2==1)
     {
         if(lval3==1)
         {
             
           op1[k][4]=Math.round(Math.pow(mstamp/(mprop[5]-mstmean),1/mprop[6],10)/2);
           op1[k][5]=(op1[k][2]/op1[k][4]);        
         }
         else
         {
             op1[k][4]=Math.round(Math.pow(Math.sqrt(Math.abs(mstmax)*mstamp)/(mprop[5]),1/mprop[6],10)/2);
           op1[k][5]=(op1[k][2]/op1[k][4]); 
             
         }
         
     }   
         else
         {
             if(lval2==2)
             {
                  
               var li,loo,lii,looo;
 for(var i=1;i<100000002;i+=100000)
 {
     
      li=(((mprop[5]-mstmean)*(Math.pow((2*i),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*i),mprop[8])));
      loo=i;
      if(li<meamp)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=(((mprop[5]-mstmean)*(Math.pow((2*i),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*i),mprop[8])));
      looo=i;
      if(lii<meamp)
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(((mprop[5]-mstmean)*(Math.pow((2*i),mprop[6])))/mprop[2])+(mprop[7]*(Math.pow((2*i),mprop[8])));
      loo=i;
     
      if(li<meamp)
      {
          break
      }
 }
 
  op1[k][4]=loo;
           op1[k][5]=(op1[k][2]/op1[k][4]); 
                }
               
           
             else
             {
                 if(lval2==3)
                 {
  var li,loo,lii,looo;
 for(var i=1;i<100000002;i+=100000)
 {
     
      li=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*i),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*i),mprop[8])) ;
      loo=i;
      if(li<(Math.abs(mstmax*meamp)))
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*i),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*i),mprop[8]));
      looo=i;
      if(lii<Math.abs(mstmax*meamp))
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=mprop[5]*Math.pow((2*i),mprop[6]) *((mprop[5]*Math.pow((2*i),mprop[6])/mprop[2])+mprop[7]*Math.pow((2*i),mprop[8])) ;
      loo=i;
     
      if(li<Math.abs(mstmax*meamp))
      {
          break
      }
 }
   op1[k][4]=loo;
           op1[k][5]=((op1[k][2]/op1[k][4]));
                     
                     
                 }
             
             }
         }
        
        
        
        
    }
    
 
    var sum=0;
 for(var k=0;k<op1.length;k++)
 {
     
             sum=sum+op1[k][5];
            
 }  
      mlife=Math.round(1/sum);
 

  var cell2 = row.insertCell(1);
 cell2.innerHTML =mlife;


   }
    
    }
  }
  
  xmlhttp.open("GET","mprop.php?q="+e.options[e.selectedIndex].value,true);
  xmlhttp.send();
        }
       
 
 function cleartablefcn()
        {
if(analysisvalue==1)
{
         var table = document.getElementById("compare");
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                table.deleteRow(0);
            }
}
else
{
  var table = document.getElementById("compare1");
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                table.deleteRow(0);
            }
}
        }
        
        
        function loaded(evt)
{
  input=[];
  var fileString = evt.target.result;
    var kk=fileString;
    var d=[];
   var j=0;
  if(normalized==1){

  inputnorm= Number(document.getElementById("mulp").value);
}
else
{
inputnorm=1;
}

if(block==1)
{
for(var i=0;i<kk.length-1;i++) {
    if(kk[i]=="\n" || kk[i]==" ")
        {
      d[j]=i;
      j++;
  }
 
   }   
var bip=[];
 bip[0]=Number(kk.substring(0,d[0]));  
    for(var p=0;p<d.length;p++)
   {
       bip[p+1]=Number(kk.substring(d[p],d[p+1]));
     }
var ponl=0;
for(var p=0;p<bip.length/3;p++)
{
for(var llk=0;llk<bip[p*3+2];llk++)
{
input[ponl]=bip[p*3];
input[ponl+1]=bip[p*3+1];
ponl=ponl+2;
}

}



 for(var p=0;p<input.length;p++)
   {
       input[p]=input[p]*inputnorm;
     }

}
else
{
for(var i=0;i<kk.length-1;i++) {
    if(kk[i]=="\n")
        {
      d[j]=i;
      j++;
  }
 
   }   
 input[0]=Number(kk.substring(0,d[0]));  
    for(var p=0;p<d.length;p++)
   {
       input[p+1]=Number(kk.substring(d[p],d[p+1]));
     }
 for(var p=0;p<input.length;p++)
   {
       input[p]=input[p]*inputnorm;
     }
}
   
 
 

  // alert(input);  
   calculateoutput();
 showoutput();
 if(mypos==1){
    plot();
     val=Math.abs(strain[0])*100;
   
   plotcursor(val);   
        }
        else
        {
        if(mypos==2){
 plot();
     val=Math.abs(strain[0])*100;
   
   plotcursor(val);  
             calcrmainip();
   calchys();
            rplothys();
        }  
        else
        {
            if(mypos==3)
            {
 plot();
     val=Math.abs(strain[0])*100;
   
   plotcursor(val);  
             calcrmainip();
   calchys();
            rplothys();
             calclife();    
            }
        }
        }
    
}

function showoutput()

{
   
    document.getElementById("divopva").style.height=300;
document.getElementById("divopca").style.height=0;
    document.getElementById("headoutput").style.visibility="visible"; 
            document.getElementById("divoutput").style.visibility="visible";
             document.getElementById("output").style.visibility="visible"; 
    var table = document.getElementById("output");
        for (var i=0;i<input.length;i++)
        {
         var rowCount = table.rows.length;
         var row = table.insertRow(rowCount);
           
            var cell1 = row.insertCell(0);
 cell1.innerHTML ="<div id='n"+i+"' onclick='myselect(this.id)'>"+(i+1)+"</div>";
 if(inputvalue==1||inputvalue==3)
 {
    var cell2 = row.insertCell(1);
 cell2.innerHTML ="<input type=text id='ns"+i+"' size='5' style='background-color:#ccccff' onchange='mychange1(this.id)' value="+nstress[i]+">"; 
 var cell3 = row.insertCell(2);
 cell3.innerHTML =Math.round(stress[i]*10)/10;
 var cell4 = row.insertCell(3);
 cell4.innerHTML =Math.round(strain[i]*10000)/10000;  
 }
 else
 {
     if(inputvalue==2)
     {
        var cell2 = row.insertCell(1);
 cell2.innerHTML =nstress[i];
 var cell3 = row.insertCell(2);
 cell3.innerHTML ="<input type=text id='s"+i+"' contenteditable='true' size='5' style='background-color:#ccccff' onchange='mychange1(this.id)' value="+Math.round(stress[i]*10)/10+">"; 
 var cell4 = row.insertCell(3);
 cell4.innerHTML =Math.round(strain[i]*10000)/10000;  
     }
     else
     {
        var cell2 = row.insertCell(1);
 cell2.innerHTML =nstress[i];
 var cell3 = row.insertCell(2);
 cell3.innerHTML =Math.round(stress[i]*10)/10;
 var cell4 = row.insertCell(3);
 cell4.innerHTML ="<input type=text id='st"+i+"' contenteditable='true' size='5' style='background-color:#ccccff' onchange='mychange3(this.id)' value="+Math.round(strain[i]*10000)/10000+">"; 
     }
 }

        }
} 


function myselect(id)
{
  deletegraph();
   
   plot();
   val=Math.abs(strain[Number(id.substring(1,id.length))])*100;
   
   plotcursor(val);   
}

function mychange1(id)
{
    pos= Number(id.substring(2,id.length));
    val= document.getElementById(id).value;
     
      input[pos]=val;
      calculateoutput();
     
     cleartable();
    
   showoutput();
}
function mychange2(id)
{
    pos= Number(id.substring(1,id.length));
    val= document.getElementById(id).value;
     
      input[pos]=val;
      calculateoutput();
     
     cleartable();
    
   showoutput();
}
function mychange3(id)
{
    pos= Number(id.substring(2,id.length));
    val= document.getElementById(id).value;
     
      input[pos]=val;
      calculateoutput();
     
     cleartable();
    
   showoutput();
}
 function cleartable()
        {
         var table = document.getElementById("output");
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                table.deleteRow(0);
            }
            
        }
        
        
    function iheight()
{
     deletegraph2();
     
     var c=document.getElementById("mycanvas3");
     c.height = 0;
     var d=document.getElementById("divlife");
     d.style.height = 200;
     var e=document.getElementById("headlife");
     e.height = 50;
     var f=document.getElementById("olife");
     f.height = 150;
    
}

        function calculateoutput()
{
   stress=[];
   strain=[];
   nstress=[];
     var input1= document.getElementById("ktva").value;
 if(inputvalue==1||inputvalue==3)
 {
  nstress=input;
   var cond=nstress[0]/Math.abs(nstress[0]) ;
   var l,lo,lim; 
   var gamma,gammaef,mul;  
    for (var i = 0; i < prop6; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
     if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     lim=(i-10);
      
   if(lo>Math.abs(input1*nstress[0]))  {
       break;
      
   }
         
    }     
   
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                                if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     stress[0]=(i-0.01);
     
    
   if(lo>Math.abs(input1*nstress[0]))  {
       break;
      
   }
         
    }     
        stress[0]=Math.round(stress[0]*10)/10;
      strain[0]=stress[0]/prop3+Math.pow(stress[0]/prop4,1/prop5,10);
      if(cond==-1)
      {
          stress[0]=-1*stress[0];
          strain[0]=-1*strain[0];
      }
   for (var k=1;k<input.length;k++)
   {
       
       point1=Math.abs(input1*(input[k-1]-input[k])/2);
       var l,lo,lim,stmax,emax; 
         var gamma,gammaef,mul;  
    for (var i = 0; i < prop6; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     lim=(i-10);
      
   if(lo>point1)  {
       break;
      
   }
         
    }     
      
         
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                                if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     stmax=(i-0.01);
    
   if(lo>point1)  {
       break;
      
  
         }
    }     
        stmax=Math.round(stmax*10)/10;
      emax=stmax/prop3+Math.pow(stmax/prop4,1/prop5,10);
      
     
      if((input[k])>(input[k-1]))
      {
         
         stress[k]=stress[k-1]+2*stmax;
        
      strain[k]=strain[k-1]+2*emax;  
      }
      else
      {
         
          stress[k]=stress[k-1]-2*stmax;
        
      strain[k]=strain[k-1]-2*emax;   
      }
      
    
   }
   
  
 }   
 else
 {
     if(inputvalue==2)
     {
        nstress=input;
        stress=input;
        for(var i=0;i<input.length;i++)
        {
            var tstrain=Math.abs(stress[i])/prop3+Math.pow(Math.abs(stress[i])/prop4,1/prop5,10);
            strain[i]=tstrain*input[i]/Math.abs(input[i]);
        } 
     }
     else
     {
       
       strain=input;
       var cond=strain[0]/Math.abs(strain[0]) ;
   var l,lo,lim; 
   var gamma,gammaef,mul;  
    for (var i = 0; i < prop6; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     lim=(i-10);
      
   if(l>Math.abs(strain[0]))  {
       break;
      
   }
         
    }     
   
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                                if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     stress[0]=(i-0.01);
     
    
   if(l>Math.abs(strain[0]))  {
       break;
      
   }
         
    }     
        stress[0]=Math.round(stress[0]*10)/10;
      strain[0]=stress[0]/prop3+Math.pow(stress[0]/prop4,1/prop5,10);
      if(cond==-1)
      {
          stress[0]=-1*stress[0];
          strain[0]=-1*strain[0];
      }
   
   for (var k=1;k<input.length;k++)
   {
       
       point1=Math.abs(input[k]-input[k-1])/2;
       var l,lo,lim; 
         var gamma,gammaef,mul;  
    for (var i = 0; i < prop6; i += 10) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                            if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     lim=(i-10);
     
    
         
   if(l>point1)  {
       break;
      
   }
         
    }     
      
         
    for (var i = lim; i < lim+10; i +=0.01) 
    {
     if(specimanvalue==2)
        {
        l=i/prop3+Math.pow(i/prop4,1/prop5,10);
                                if(valop1==1)
            {
             lo=Math.sqrt(prop3*i*l);   
            }
              else
              {
                  gamma=0.3;
                  gammaef=0.5-(0.2*i/(prop3*l));
                  mul=(1+gammaef)/(1+gamma) ;
                 lo=Math.sqrt(prop3*i*l*mul); 
              }
        }
        else
        {
         l=i/prop3+Math.pow(i/prop4,1/prop5,10);
         lo=i;   
        }
     stmax=(i-0.01);
     
     
   if(l>point1)  {
       break;
      
   }
         
    }     
        stmax=Math.round(stmax*10)/10;
      emax=stmax/prop3+Math.pow(stmax/prop4,1/prop5,10);
       
      if(input[k]>input[k-1])
      {
         stress[k]=stress[k-1]+2*stmax;
        
      strain[k]=strain[k-1]+2*emax;  
      }
      else
      {
         stress[k]=stress[k-1]-2*stmax;
        
      strain[k]=strain[k-1]-2*emax;   
      }
      
    
   }
    
     nstress=stress;  
       
    
     }
 
 }   
 
 
}


function calcrmainip()
{
    rmainip=[];
              if(stress[0]==0)
              {
                  for(var i=0;i<stress.length;i++)
        {
            rmainip[i]=Math.round(stress[i]);
        }
              }
    else
    {
        rmainip[0]=0;
        for(var i=0;i<stress.length;i++)
        {
            rmainip[i+1]=Math.round(stress[i]);
        }
    }
 
}

  function calchys()
  {

      var rmainip1=[],rxpval=[],rypval=[],rxnval=[], rynval=[];
var plen;
      var k1,k2;
     if(rmainip[1]>0)
     {
        rmainip1=rmainip;  
     }
       else
       {
           for(var i=0;i<rmainip.length;i++)
           {
               rmainip1[i]=-1*rmainip[i];
           }
       }
    
    
    
  var tmax=Math.abs(Math.max.apply(Math,rmainip1));
  
 var tmin=Math.abs(Math.min.apply(Math,rmainip1));
  var rmax=Math.max(tmax,tmin);    
      
 for(var i=0;i<=rmax;i++)
 {
    l=(i/prop3)+Math.pow(i/prop4,1/prop5,10);
   ryp[i]=i;
   rxp[i]=l; 
   rxn[i]=-1*l;
   ryn[i]=-1*i;
       
 } 
  
  
  for(var i=rmainip1[1];i<=rmax;i+=1)
 {
   l=(i/prop3)+Math.pow(i/prop4,1/prop5,10);
   rypval[i-rmainip1[1]]=i;
   rxpval[i-rmainip1[1]]=l; 
 
 }  
   
      rxval[0]=new Array(rmainip1[1]+1) ;
      ryval[0]=new Array(rmainip1[1]+1) ;
    for(var i=0;i<=rmainip1[1];i++)
      {
   l=(i/prop3)+Math.pow(i/prop4,1/prop5,10);
   ryval[0][i]=i;
   rxval[0][i]=l; 
   k1=l;
 }
 
 for (var k=1;k<rmainip1.length-1;k++)
 {
//alert(ryval[k-1]);
     rxval[k]=new Array(Math.abs(rmainip1[k]-rmainip1[k+1])+1) ;
      ryval[k]=new Array(Math.abs(rmainip1[k]-rmainip1[k+1])+1) ; 
     
if(rmainip1[k]>rmainip1[k+1])
     {
         // for unloading
         if(k==1)
         {
             // for calculation k==1
         if(Math.abs(rmainip1[2])<rmainip1[1])
         {
          for(var i=rmainip1[k];i>=rmainip1[k+1];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 
          for(var i=rmainip1[k+1];i>=-rmainip1[k];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                 rynval[rmainip1[k+1]-i]=i;
              rxnval[rmainip1[k+1]-i]=l; 
  
          }
          var plen=rynval.length;
         for (var i=0;i<rmax-rmainip1[1];i++)
         {
             rynval[plen+i]=ryn[rmainip1[1]+i+1];
              rxnval[plen+i]=rxn[rmainip1[1]+i+1];  
          }  
          
         
         }
         else
         {
            // follow stress strain curve
            
            for(var i=rmainip1[k];i>=-1*rmainip1[k];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 
          for(var i=-1*rmainip1[k];i>=rmainip1[k+1];i-=1)
         {
                
              ryval[k][rmainip1[k]-i]=ryn[-1*i];
              rxval[k][rmainip1[k]-i]=rxn[-1*i]; 
              k2=rxn[-1*i];
          } 
            
           for (var i=0;i<rmax+rmainip1[2];i++)
         {
             rynval[plen+i]=ryn[i-rmainip1[2]+1];
              rxnval[plen+i]=rxn[i-rmainip1[2]+1];  
          }   
             
         }
             
         }
         else
         {
             //else for k==1
           var umax=rmainip[0];  
          //max before that array
          for(var i=1;i<=k;i++)
          {
              umax=Math.max(umax,Math.abs(rmainip1[i]))
          }
          
          if(rmainip1[k]==umax)
          {
               rxnval=[];
                 rynval=[];
              //if max
              //creates new rxnval ,rynval
             if(rmainip1[k]>Math.abs(rmainip1[k+1])) 
             {
                
               for(var i=rmainip1[k];i>=rmainip1[k+1];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 
          for(var i=rmainip1[k+1];i>=-rmainip1[k];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                 rynval[rmainip1[k+1]-i]=i;
              rxnval[rmainip1[k+1]-i]=l; 
  
          }
          var plen=rynval.length;
         for (var i=0;i<rmax-rmainip1[k];i++)
         {
             rynval[plen+i]=ryn[rmainip1[k]+i+1];
              rxnval[plen+i]=rxn[rmainip1[k]+i+1];  
          }   
                 
             }
              else
              {
                  // 
                  
                   for(var i=rmainip1[k];i>=-1*rmainip1[k];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 
          for(var i=-1*rmainip1[k];i>=rmainip1[k+1];i-=1)
         {
                
              ryval[k][rmainip1[k]-i]=ryn[-1*i];
              rxval[k][rmainip1[k]-i]=rxn[-1*i]; 
              k2=rxn[-1*i];
          } 
            
           for (var i=0;i<rmax+rmainip1[k+1];i++)
         {
             rynval[plen+i]=ryn[i-rmainip1[k+1]+1];
              rxnval[plen+i]=rxn[i-rmainip1[k+1]+1];  
          }    
                  
                  
           
              }
              
          }
          else
          {
              //not max
              
            if(rmainip1[k+1]<rmainip1[k-1])
            {
                //i+2<i
              if(rmainip1[k]<=rmainip1[k-2]) 
              {
                  //i+1<i-1 it follow
                  
                  for(var i=rmainip1[k];i>=rmainip1[k-1];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 


          for(var i=rmainip1[k-1];i>=rmainip1[k+1];i-=1)
         {
                
              ryval[k][rmainip1[k]-i+1]=rynval[rmainip1[k-1]-i];
              rxval[k][rmainip1[k]-i+1]=rxnval[rmainip1[k-1]-i]; 
              k2=rxnval[rmainip1[k-1]-i]; 
          }  

           rxxnval=rxnval;
           ryynval=rynval;
           rxnval=[];
           rynval=[];
           for(var i=0;i<rxxnval.length-rmainip1[k-1]+rmainip1[k+1];i++ )
                {
                    rxnval=rxxnval[rmainip1[k-1]-rmainip1[k+1]+i];
                    rynval=ryynval[rmainip1[k-1]-rmainip1[k+1]+i]
                }           
                  
            
              } 
            else
            {
                //i+1>i-1
              //adds rxnval,rynval
              
                 for(var i=rmainip1[k];i>=rmainip1[k+1];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 
          rxxnval=rxnval;
           ryynval=rynval;
           rxnval=[];
           rynval=[];
           umin=rmainip1[0];
           for(var i=1;i<=k;i++)
          {
              umin=Math.min(umin,(rmainip1[i]))
          }
          for(var i=rmainip1[k+1];i>=umin;i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                 rynval[rmainip1[k+1]-i]=i;
              rxnval[rmainip1[k+1]-i]=l; 
  
          }
          plen=rynval.length;
          for(var i=0;i<rxxnval.length;i++)
          {
             rynval[plen+i]=ryynval[i];
              rxnval[plen+i]=rxxnval[i];   
          }
                
                
           
            }    
            }  
             
      else
              {
                  //i+2>=i
                  //adds rxnval,rynval
                 for(var i=rmainip1[k];i>=rmainip1[k+1];i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                  k2=l;
              ryval[k][rmainip1[k]-i]=i;
              rxval[k][rmainip1[k]-i]=l; 
  
          } 
          rxxnval=rxnval;
           ryynval=rynval;
           rxnval=[];
           rynval=[];
           umin=rmainip1[0];
           for(var i=1;i<=k;i++)
          {
              umin=Math.min(umin,(rmainip1[i]))
          }
          for(var i=rmainip1[k+1];i>=umin;i-=1)
         {
                 l=k1-2*(((rmainip1[k]-i)/(2*prop3))+Math.pow((rmainip1[k]-i)/(2*prop4),1/prop5,10));
                 rynval[rmainip1[k+1]-i]=i;
              rxnval[rmainip1[k+1]-i]=l; 
  
          }
          plen=rynval.length;
          for(var i=0;i<rxxnval.length;i++)
          {
             rynval[plen+i]=ryynval[i];
              rxnval[plen+i]=rxxnval[i];   
          }  
                  
           
              }
              
      
          }
          
          
         }
         
       
     }
     
       else
       {
           // for loading
           
           //calc min
            umin=rmainip1[0];
           for(var i=1;i<=k;i++)
          {
              umin=Math.min(umin,(rmainip1[i]))
          }
          //call max
          umax=rmainip1[0];
          for(var i=1;i<=k;i++)
          {
              umax=Math.max(umax,rmainip1[i])
          }
          
//alert(umin);
//alert(umax);
           if(rmainip1[k]==umin)
           {
               //if min
               if(Math.abs(rmainip1[k])<=umax)
               {
                 if(rmainip1[k+1]>umax)  
                 {
                   
                    for(var i=rmainip1[k];i<=umax;i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                    ryval[k][i-rmainip1[k]]=i;
                                     rxval[k][i-rmainip1[k]]=l; 
                                     k1=l;
                                         } 
                   for (var i=0;i<=rmainip1[k+1]-umax;i++)
                   {
                        ryval[k][i-rmainip1[k]+umax]=rypval[i];
                        rxval[k][i-rmainip1[k]+umax]=rxpval[i]; 
                        k1=rxpval[i];
                   }
                 rxxpval=rxpval;
                 ryypval=rypval;
                 rxpval=[];
                 rypval=[];
                 for(var i=rmainip1[k+1]-umax;i<rxxpval.length;i++)
                 {
                     rxpval[i-rmainip1[k+1]+umax]=rxxpval[i];
                     rypval[i-rmainip1[k+1]+umax]=ryypval[i];
                     
                 }  
                   
                
                     
                 }
                 else
                 {
                     //k+1<max
                     
                     for(var i=rmainip1[k];i<=rmainip1[k+1];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                    ryval[k][i-rmainip1[k]]=i;
                                     rxval[k][i-rmainip1[k]]=l; 
                                     k1=l;
                                         }
                                          
                     rxxpval=rxpval;
                 ryypval=rypval;
                 rxpval=[];
                 rypval=[];
                      for(var i=rmainip1[k+1];i<=umax;i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                  rxpval[i-rmainip1[k+1]]=l;
                                  rypval[i-rmainip1[k+1]]=i;
                                         } 
                     plen=rxpval.length;
                     
                     for(var i=0;i<=rxxpval.length;i+=1)
                            {
                               
                                  rxpval[i+plen]=rxxpval[i];
                                  rypval[i+plen]=ryypval[i];
                                         } 
                     
                     
                     
                 }
               }
               else
               {
                   //k>umax

                  if(rmainip1[k+1]>Math.abs(rmainip1[k])) 
                  {
                      for(var i=rmainip1[k];i<=-rmainip1[k];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                    ryval[k][i-rmainip1[k]]=i;
                                     rxval[k][i-rmainip1[k]]=l; 
                                     k1=l;
                                         } 

                   for (var i=0;i<=rmainip1[k+1]+rmainip1[k];i++)
                   {
                        ryval[k][i-2*rmainip1[k]+1]=ryp[-rmainip1[k]+i]
                        rxval[k][i-2*rmainip1[k]+1]=rxp[-rmainip1[k]+i]; 
                        k1=rxp[-rmainip1[k]+1+i];
                   }
                 rxpval=[];
                 rypval=[];
                 for(var i=0;i<rmax-rmainip1[k+1];i++)
                  {
                    rxpval[i]=rxp[rmainip1[k+1]+i]
                     rypval[i]=ryp[rmainip1[k+1]+i] 
                 }
                 
   
                  }
                   else
                   {
                     
                       for(var i=rmainip1[k];i<=rmainip1[k+1];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                    ryval[k][i-rmainip1[k]]=i;
                                     rxval[k][i-rmainip1[k]]=l; 
                                     k1=l;
                                         }
                                          
                     rxxpval=rxpval;
                 ryypval=rypval;
                 rxpval=[];
                 rypval=[];
                      for(var i=rmainip1[k+1];i<=-1*rmainip1[k];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                  rxpval[i-rmainip1[k+1]]=l;
                                  rypval[i-rmainip1[k+1]]=i;
                                         } 
                     plen=rxpval.length;
                     
                     for(var i=0;i<=rxxpval.length;i+=1)
                            {
                               
                                  rxpval[i+plen]=rxxpval[i];
                                  rypval[i+plen]=ryypval[i];
                                         } 
                     
                     
                       
                   }
                   
                   
                   
               }
               
               
           }
           else
           {
               //not min
               if(rmainip1[k-1]>=rmainip1[k+1])
               {
                 
                for(var i=rmainip1[k];i<=rmainip1[k+1];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                    ryval[k][i-rmainip1[k]]=i;
                                     rxval[k][i-rmainip1[k]]=l; 
                                     k1=l;
                                         }
                                          
                     rxxpval=rxpval;
                 ryypval=rypval;
                 rxpval=[];
                 rypval=[];
                      for(var i=rmainip1[k+1];i<=rmainip1[k-1];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                  rxpval[i-rmainip1[k+1]]=l;
                                  rypval[i-rmainip1[k+1]]=i;
                                         } 
                     plen=rxpval.length;
                     
                     for(var i=0;i<=rxxpval.length;i+=1)
                            {
                               
                                  rxpval[i+plen]=rxxpval[i];
                                  rypval[i+plen]=ryypval[i];
                                         } 
                 
                   
               }
               else
               {
                   
                for(var i=rmainip1[k];i<=rmainip1[k-1];i+=1)
                            {
                                l=k2+2*(((i-rmainip1[k])/(2*prop3))+Math.pow((i-rmainip1[k])/(2*prop4),1/prop5,10)); 
                                    ryval[k][i-rmainip1[k]]=i;
                                     rxval[k][i-rmainip1[k]]=l; 
                                     k1=l;
                                         } 
                   for (var i=0;i<=rmainip1[k+1]-rmainip1[k-1];i++)
                   {
                        ryval[k][i-rmainip1[k]+rmainip1[k-1]]=rypval[i];
                        rxval[k][i-rmainip1[k]+rmainip1[k-1]]=rxpval[i]; 
                        k1=rxpval[i];
                   }
                 rxxpval=rxpval;
                 ryypval=rypval;
                 rxpval=[];
                 rypval=[];
                 for(var i=rmainip1[k+1]-rmainip1[k-1];i<rxxpval.length;i++)
                 {
                     rxpval[i-rmainip1[k+1]+rmainip1[k-1]]=rxxpval[i];
                     rypval[i-rmainip1[k+1]+rmainip1[k-1]]=ryypval[i];
                     
                 }     
                   
                   
               }
               
           }
           
       
            }
           
           
     
      
       }
      
 

    
  }


function rplothys()
{
location.href = "#mydiv2";
 deletegraph1();
 

  document.getElementById("mydiv2").style.height=460;
location.href = "#mydiv2";
  var c=document.getElementById("mycanvas2");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
location.href = "#mydiv2";
var xpos=w-(0.9*w);

var xpos1=0.96*w;
var ypos=h-(0.96*h);
var ypos1=0.9*h;
var widx=0.3*ypos;
var widy=0.1*xpos;
location.href = "#mydiv2";
if(rmainip[1]>0)
{
    var txmax=100*rxval[0][0];
var txmin=100*rxval[0][0];
  for(var i=0;i<rmainip.length-1;i++)
  {
      for(var j=0;j<rxval[i].length;j++)
      {
         rxval[i][j]=100*rxval[i][j];
         if(txmax<rxval[i][j])
         {
             txmax=rxval[i][j];
         }
         if(txmin>rxval[i][j])
         {
             txmin=rxval[i][j];
         }
         
         
            }
  }
  
    
}
    else
    {
        var txmax=-100*rxval[0][0];
var txmin=-100*rxval[0][0];
        for(var i=0;i<rmainip.length-1;i++)
  {
      for(var j=0;j<rxval[i].length;j++)
      {
         rxval[i][j]=-100*rxval[i][j];
         ryval[i][j]=-1*ryval[i][j];
         if(txmax<rxval[i][j])
         {
             txmax=rxval[i][j];
         }
         if(txmin>rxval[i][j])
         {
             txmin=rxval[i][j];
         }
            }
  }
  
        
    }
 
  var tmax=Math.abs(Math.max.apply(Math,rmainip));
  
 var tmin=Math.abs(Math.min.apply(Math,rmainip));
  var rmax=Math.max(tmax,tmin);    
  var rxmax=Math.max(Math.abs(txmax),Math.abs(txmin));    
 
  
 var lminx=(Math.floor(-1*rxmax*10)/10);
  var lmaxx=(Math.ceil(rxmax*10)/10);
  var lminy=(Math.floor(-1*rmax/10)*10);
  var lmaxy=(Math.ceil(rmax/10)*10);
    
   
       var axpos=xpos+(0-lminx)*(xpos1-xpos)/(lmaxx-lminx);
       var aypos=ypos1-(0-lminy)*(ypos1-ypos)/(lmaxy-lminy);
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(axpos,ypos);
ctx.lineTo(axpos,ypos1);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(xpos,aypos);
ctx.lineTo(xpos1,aypos);
ctx.stroke();
var i;
var xpos2=[];
var ypos2=[];

for (i = 0; i <=10; i++) { 
    xpos2.push((xpos+(xpos1-xpos)*(i)/10));
ctx.beginPath();
 ctx.strokeStyle = '#000000';
ctx.moveTo(xpos2[i],aypos);
ctx.lineTo(xpos2[i],aypos+widx);
ctx.lineWidth=2;
ctx.stroke();
 ctx.font='10pt Time';
 ctx.fillStyle="black";
ctx.fillText(Math.round(((Math.round((lmaxx-lminx)*100)*(i)/1000)+lminx)*100)/100,xpos2[i],(aypos+4*widy));


}
for (i = 0; i <=10; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/10));
ctx.beginPath();

ctx.moveTo(axpos,ypos2[i]);
ctx.lineTo(axpos-widy,ypos2[i]);
ctx.lineWidth=2;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Time';
ctx.fillStyle="black";
ctx.fillText(Math.round(((Math.round((lmaxy-lminy))*(i)/10)+lminy)*100)/100,(axpos-4*widy),ypos2[i]);


}
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.fillText("Strain(%)",(xpos1+xpos)/2,ypos1+7*widy);
ctx.save();
ctx.translate(xpos-7*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.fillText("Stress",0,0);
if(un==1)
{
ctx.fillText("  [MPa]",ctx.measureText("Stress").width,0);
}
else
{
ctx.fillText("  [ksi]",ctx.measureText("Stress").width,0);
}
ctx.restore();

  for (var k=0;k<rmainip.length-1;k++)
  {

 var minx1=Math.min.apply(Math,rxval[k]);
 var miny4=Math.min.apply(Math,ryval[k]);
 var datax1=[],datay1=[];
for(var i=0; i<rxval[k].length; i++) {
    datax1[i]=((rxval[k][i]-minx1)*(xpos1-xpos)/(lmaxx-lminx))+(xpos+(xpos1-xpos)*(minx1-lminx)/(lmaxx-lminx)) ;
}

   for(var i=0; i<ryval[k].length; i++) {
    datay1[i]=ypos1-((ryval[k][i]-miny4)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(miny4-lminy)/(lmaxy-lminy)));
}
 
 ctx.beginPath();
ctx.moveTo(datax1[0],datay1[0]);
  for(var i=1; i<datay1.length; i++) {


      ctx.lineTo(datax1[i],datay1[i]);

        ctx.lineWidth=1;
        ctx.strokeStyle =getRandomColor(); 
      ctx.stroke();
  }
  }
  ctx.closePath(); //Changed
   
  location.href = "#mydiv2";
}



function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function calclife()

{ 
    location.href = "#mydiv3";
        cleartablefcn1();
        op1=[];
        op=[];
       
       iheight();
     for(var i=0;i<stress.length;i++)
        {
            rlife[i]=Math.round(stress[i]);
        }
     rlife[stress.length]=Math.round(stress[0]);
     jk=0;
     arrangedata(rlife);
      location.href = "#mydiv3";
     
    while (1)
    {       
                 var m=[];                                                    
                 m[0]=0;
                 for(var i=2;i<op.length;i=i+2)
                 {
                     if(op[0]==op[i]&&op[1]==op[i+1])
                     {
                         m[m.length]=i;
                         
                     }
                 }
                 
    var val=Number(op1.length);
                 op1[val]=new Array(6);
                      op1[val][0]=op[0];
                      op1[val][1]=op[1]; 
                      op1[val][2]=m.length; 
                      op1[val][3]=Math.abs(op[0]-op[1])/2; 
                        
                    for(var i=0;i<m.length;i++)               
                            {
                                op.splice(m[i]-(i*2),1);
                                
                                 op.splice(m[i]-(i*2),1);
                                 
                            }
                            
                                            if(op.length==2)
                                            {
                                                 var val=Number(op1.length);
                                                 
                    op1[val]=new Array(6);  
                     op1[val][0]=op[0];
                      op1[val][1]=op[1]; 
                      op1[val][2]=1; 
                      op1[val][3]=Math.abs(op[0]-op[1])/2;
                                           
                                            }
                                               if(op.length<=2)
                                            {
                                                break;
                                            }
                                            
                 
                 
    }
    
   
    for(var k=0;k<op1.length;k++)
    {
        var mstmax=op1[k][0];
        var mstmin=op1[k][1];
        var mstamp=Math.abs((mstmax-mstmin)/2);
        var mstmean=(mstmax+mstmin)/2;
        var memax=mstmax/prop3+Math.pow(mstmax/prop4,1/prop5,10); 
        var memin=(mstmin/Math.abs(mstmin))*(Math.abs(mstmin)/prop3+Math.pow(Math.abs(mstmin)/prop4,1/prop5,10)); 
        var meamp=Math.abs((memax-memin)/2);
        
   
    var lval2=lifep1;
    var e3 = document.getElementById("life2"); 
    var lval3=e3.options[e3.selectedIndex].value;
     
     if(lval2==1)
     {
         if(lval3==1)
         {
             
           op1[k][4]=Math.round(Math.pow(mstamp/(prop6-mstmean),1/prop7,10)/2);
           op1[k][5]=((op1[k][2]/op1[k][4]));        
         }
         else
         {
             op1[k][4]=Math.round(Math.pow(Math.sqrt(Math.abs(mstmax)*mstamp)/(prop6),1/prop7,10)/2);
           op1[k][5]=((op1[k][2]/op1[k][4])); 
             
         }
         
     }   
         else
         {
             if(lval2==2)
             {
                  
               var li,loo,lii,looo;
 for(var i=1;i<100000002;i+=100000)
 {
     
      li=(((prop6-mstmean)*(Math.pow((2*i),prop7)))/prop3)+(prop8*(Math.pow((2*i),prop9)));
      loo=i;
      if(li<meamp)
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=(((prop6-mstmean)*(Math.pow((2*i),prop7)))/prop3)+(prop8*(Math.pow((2*i),prop9)));
      looo=i;
      if(lii<meamp)
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=(((prop6-mstmean)*(Math.pow((2*i),prop7)))/prop3)+(prop8*(Math.pow((2*i),prop9)));
      loo=i;
     
      if(li<meamp)
      {
	           break
      }
 }
 
  op1[k][4]=loo;
           op1[k][5]=((op1[k][2]/op1[k][4])); 
                }
               
           
             else
             {
                 if(lval2==3)
                 {
  var li,loo,lii,looo;
 for(var i=1;i<100000002;i+=100000)
 {
     
      li=prop6*Math.pow((2*i),prop7) *((prop6*Math.pow((2*i),prop7)/prop3)+prop8*Math.pow((2*i),prop9)) ;
      loo=i;
      if(li<(Math.abs(mstmax*meamp)))
      {
          break
      }
 }
     
 for(var i=loo-100000;i<loo+2;i+=1000)
 {
    
      lii=prop6*Math.pow((2*i),prop7) *((prop6*Math.pow((2*i),prop7)/prop3)+prop8*Math.pow((2*i),prop9)) ;
      looo=i;
      if(lii<Math.abs(mstmax*meamp))
      {
          break
      }
 }
 
  for(var i=looo-1000;i<looo+2;i+=1)
 {
      li=prop6*Math.pow((2*i),prop7) *((prop6*Math.pow((2*i),prop7)/prop3)+prop8*Math.pow((2*i),prop9)) ;
      loo=i;
     
      if(li<Math.abs(mstmax*meamp))
      {
          break
      }
 }
   op1[k][4]=loo;
           op1[k][5]=(op1[k][2]/op1[k][4]);
                     
                     
                 }
             
             }
         }
        
        
        
        
    }
    
 
    var sum=0;
 for(var k=0;k<op1.length;k++)
 {
     var table = document.getElementById("olife");
 
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var cell1 = row.insertCell(0);
            cell1.innerHTML =op1[k][0];
             var cell2 = row.insertCell(1);
            cell2.innerHTML =op1[k][1];
            var cell3 = row.insertCell(2);
            cell3.innerHTML =op1[k][2];
            var cell4 = row.insertCell(3);
            cell4.innerHTML =op1[k][3];
            var cell5 = row.insertCell(4);
           cell5.innerHTML =op1[k][4].toExponential(3);
            var cell6 = row.insertCell(5);
            cell6.innerHTML =op1[k][5].toExponential(3);
             sum=sum+op1[k][5];
            
 }  
      liff=Math.round(1/sum);

  document.getElementById("lifeoutput").innerHTML= "Number of Repitions  is "+ liff;
    
    
       
}
function arrangedata(data)
{
    var a=data;
    
    var i;
    for( i=0;i<a.length-2;i++)
    {
      if(((a[i]<a[i+1])&&(a[i+1]>a[i+2])&&(a[i]>=a[i+2]))||((a[i]>a[i+1])&&(a[i+1]<a[i+2])&&(a[i]<=a[i+2]))){
          break;
      }  
    }
    if(i==0)
    {
     if(a[i]<a[i+1])
     {
         op[jk]=a[i+1];
         op[jk+1]=a[i];
     }
     else
     {
         op[jk]=a[i];
         op[jk+1]=a[i+1]; 
     }
      jk=jk+2;
      var ip1=[];
     
      for(var k=2;k<a.length;k++)
      {
          ip1[k-2]=a[k];
      }
      if(ip1.length>2)
      {
          arrangedata(ip1);
      }
    }
     else
     {
      
        if(a[i]<a[i+1])
     {
         op[jk]=a[i+1];
         op[jk+1]=a[i];
     }
     else
     {
         op[jk]=a[i];
         op[jk+1]=a[i+1]; 
     }
      jk=jk+2;
      var ip1=[];
      for(var k=0;k<=i-1;k++)
      {
          ip1[k]=a[k];
      }
      
      for(var k=i+2;k<a.length;k++)
      {
          ip1[k-2]=a[k];
      }
      if(ip1.length>2)
      {
                          arrangedata(ip1);
      }
         
     }
}    
    
function cleartablefcn1()
        {
         var table = document.getElementById("olife");
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                table.deleteRow(0);
            }
        }    
 
 


function myclickn()
{
 if(document.getElementById("myCheck").checked)
  {
   normalized=1;
   document.getElementById("mulp").removeAttribute("disabled");  
  } 
  else
  {
  normalized=0;
      document.getElementById("mulp").disabled=true;
  }
}
