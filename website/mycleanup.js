var r,c,t;
r=0;
c=0;
t=0;

var input=[],rdata1=[],rdata2=[],rdata3=[],rdata4=[],rdataop=[],rdatac=[];



function myupload()
{
    deleteplot();
    deleteplot1();
    var file = document.getElementById('file1').files[0];
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
function loaded(evt)
{
  input=[];
  rdata1=[];
  rdataop=[];
  rdatac=[];
  var fileString = evt.target.result;
    var kk=fileString;
    var d=[];
   var j=0;
   for(var i=0;i<kk.length;i++) {
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
     
  
   if(document.getElementById("inp1").checked)
   {
     document.getElementById("head1").innerHTML="Raw Data";

document.getElementById("head3").innerHTML="No of Points is "+ input.length;

    plot(input);
   }
   else
   {
      document.getElementById("head1").innerHTML="Cleaned Input File"; 
document.getElementById("head3").innerHTML="No of turning Points is "+ input.length;
    plot(input);   
   }
   
    
   //writing data to table
   var table = document.getElementById("output1");
  
   for(var i=0;i<input.length;i++)
   {
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var cell1 = row.insertCell(0);
            cell1.innerHTML =i+1;
            var cell2 = row.insertCell(1);
            cell2.innerHTML =input[i];
 
   }
   
   rdata1[0]=0;
   for(var i=0;i<input.length;i++)
   {
       rdata1[i+1]=input[i];
   }
   var j=2;

   rdataop[0]=rdata1[0];
rdataop[1]=rdata1[1];
   
 for(var i=2;i<rdata1.length;i++)
 {
     
     if(((rdataop[j-1]<rdata1[i])&&(rdataop[j-1]<rdataop[j-2]))||((rdataop[j-1]>rdata1[i])&&(rdataop[j-1]>rdataop[j-2])))
     {
         rdataop[j]=rdata1[i];
         j=j+1;
     }
else
{
rdataop[j-1]=rdata1[i];
}


     
 } 

 rdatak=rdataop;
 rdataop=[];
 for(i=1;i<rdatak.length;i++)
 {
     rdataop[i-1]=rdatak[i];
 }
 rdatac=rdataop;
 document.getElementById("head2").innerHTML="Cleaned Input File"; 
 document.getElementById("head4").innerHTML="No of Points is "+ rdataop.length;
  plot1(rdataop); 
 var table = document.getElementById("output12");
  
   for(var i=0;i<rdataop.length;i++)
   {
       
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var cell1 = row.insertCell(0);
            cell1.innerHTML =i+1;
            var cell2 = row.insertCell(1);
            cell2.innerHTML =rdataop[i];
 
   }
}



function myclick()
{
  if(document.getElementById("myCheck").checked)
  {
   r=1; 
   document.getElementById("th").removeAttribute("disabled");  
  } 
  else
  {
     r=0; 
      document.getElementById("th").disabled=true;
  }
}
function myclick1()
{
  if(document.getElementById("myCheck1").checked)
  {
   c=1; 
   document.getElementById("cl").removeAttribute("disabled");  
  } 
  else
  {
  c=0; 
      document.getElementById("cl").disabled=true;
  }  
}
function myclick2()
{
    if(document.getElementById("myCheck2").checked)
  {
   t=1; 
   document.getElementById("tr").removeAttribute("disabled");  
  } 
  else
  {
     t=0; 
      document.getElementById("tr").disabled=true;
  }
}
function myapply()
{
    rdata2=[];
  rdata3=[];
  rdata4=[];
  rdataop=rdatac;
  
    if(c==1)
    {
      var k1=0;
    var ip2=Number(document.getElementById("cl").value);
     if(rdataop[0]>=ip2)
     {
       rdata3[0]=ip2;
       k1=1;  
     }
     else
     {
        rdata3[0]=rdataop[0]; 
     }
     var v=1;
    for(var i=1;i<rdataop.length;i++)
    {
  
        if(rdataop[i]>=ip2)
  {
        if(k1==0)
        {
         rdata3[v]=ip2;
         v=v+1;  
          k1=1; 
        }
       
  }
  else
        {
            k1=0;
            rdata3[v]=rdataop[i];
         v=v+1;   
            
        }
  
    }   
    rdataop=[];
    rdataop=rdata3;  
        
    }

    if(t==1)
    {
     
     var k1=0;
     var ip2=Number(document.getElementById("tr").value);
     if(rdataop[0]<ip2)
     {
       rdata4[0]=ip2;
       k1=1;  
     }
     else
     {
        rdata4[0]=rdataop[0]; 
     }
     var v=1;
    for(var i=1;i<rdataop.length;i++)
    {
  
        if(rdataop[i]<=ip2)
  {
        if(k1==0)
        {
         rdata4[v]=ip2;
         v=v+1;   
         k1=1;
        }
        
  }
  else
        {
            k1=0;
            rdata4[v]=rdataop[i];
         v=v+1;   
            
        }
  
    }   
    rdataop=[];
    rdataop=rdata4;  
      }
  if(r==1)
  {
    var ip2=Number(document.getElementById("th").value);
   rdata2[0]=rdataop[0];
   var k1=0;
   var v=1;
   for (var i=1;i<rdataop.length;i++)
   {
     if(k1==0)
     {
     if(Math.abs(rdataop[i]-rdataop[i-1])>ip2)
     {
         rdata2[v]=rdataop[i];
         v=v+1;
     }
     else
   {
       rdata2[v]=rdataop[i+1]
       k1=1;
       v=v+1;
   }
         
     }  
     else
     {
         k1=0;
     }
   
   }
  rdataop=[];
  rdataop=rdata2; 
        
  }  

  rdata1=[];
  rdata1[0]=0;
   for(var i=0;i<rdataop.length;i++)
   {
       rdata1[i+1]=rdataop[i];
   }
   var j=1;
rdataop=[];
   rdataop[0]=rdata1[0];
   
 for(var i=1;i<rdata1.length-1;i++)
 {
     
     if(((rdata1[i-1]>rdata1[i])&&(rdata1[i]<rdata1[i+1]))||((rdata1[i-1]<rdata1[i])&&(rdata1[i]>rdata1[i+1])))
     {
         rdataop[j]=rdata1[i];
         j=j+1;
     }
     
 } 
  rdataop[j]=rdata1[rdata1.length-1]
rdatak=[];
 rdatak=rdataop;
 rdataop=[];
 for(i=1;i<rdatak.length;i++)
 {
     rdataop[i-1]=rdatak[i];
 }
    document.getElementById("head1").innerHTML="Cleaned Input File"; 
document.getElementById("head3").innerHTML="No of  turning Points is "+ rdatac.length;
    plot(rdatac); 
    cleartablefcn1();
    var table = document.getElementById("output1");
  
   for(var i=0;i<rdatac.length;i++)
   {
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var cell1 = row.insertCell(0);
            cell1.innerHTML =i+1;
            var cell2 = row.insertCell(1);
            cell2.innerHTML =rdatac[i];
 
   }   
;
   plot1(rdataop); 
    cleartablefcn2();
    var table = document.getElementById("output12");
  
   for(var i=0;i<rdataop.length;i++)
   {
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var cell1 = row.insertCell(0);
            cell1.innerHTML =i+1;
            var cell2 = row.insertCell(1);
            cell2.innerHTML =rdataop[i];
 
   }   
document.getElementById("head4").innerHTML="No of turning Points is "+ rdataop.length;
    
    if(r==1&&c==1&&t==1)
{
    document.getElementById("head2").innerHTML="After Clipping ,Truncation and &Delta;<sub>th</sub>";
}    
if(r==0&&c==0&&t==0)
{
    document.getElementById("head2").innerHTML="Cleaned file";
}    
if(r==0&&c==0&&t==1)
{
    document.getElementById("head2").innerHTML="After Truncation ";
}    
if(r==0&&c==1&&t==0)
{
    document.getElementById("head2").innerHTML="After Clipping ";
}    
if(r==0&&c==1&&t==1)
{
    document.getElementById("head2").innerHTML="After Clipping and Truncation ";
}    

if(r==1&&c==0&&t==0)
{
    document.getElementById("head2").innerHTML="After  &Delta;<sub>th</sub>";
}    
if(r==1&&c==0&&t==1)
{
    document.getElementById("head2").innerHTML="After Truncation and &Delta;<sub>th</sub>";
}    
if(r==1&&c==1&&t==0)
{
    document.getElementById("head2").innerHTML="After Clipping and &Delta;<sub>th</sub>";
}    

    
}
function mysave()
{
    
}
function plot(data)
{
    deleteplot();
 var c=document.getElementById("mycanvas1");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
var xpos=w-(0.9*w);

var xpos1=0.9*w;
var ypos=h-(0.9*h);
var ypos1=0.8*h;
var widx=0.3*ypos;
var widy=0.1*xpos;
minx=0;
maxx=(data.length);
miny1=Math.min.apply(Math,data);
maxy1=Math.max.apply(Math,data);
var lminx=(Math.floor(minx*10)/10);
  var lmaxx=(Math.ceil(maxx/10)*10);
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
ctx.lineWidth=1;
ctx.stroke();
 ctx.font='10pt Computermodern';
 ctx.fillStyle="black";
ctx.fillText((Math.round((lmaxx-lminx)*100)*(i)/(100*10)).toString(),xpos2[i],(ypos1+4*widy));


}
for (i = 0; i <=5; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/5));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=1;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Computermodern';
ctx.fillStyle="black";
ctx.fillText((Math.round((lmaxy-lminy))*(i)/5+lminy).toString(),(xpos-5*widy),ypos2[i]);

}

ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.save();
ctx.translate(xpos-6.5*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='12pt Computermodern';
ctx.fillStyle="black";
ctx.fillText("Stress",0,0);
ctx.restore();
var dataxxv=[],datayyv=[];
for(var i=0; i<data.length; i++) {
    dataxxv[i]=((i+1)*(xpos1-xpos)/(lmaxx-lminx))+xpos ;
}

   for(var i=0; i<data.length; i++) {
      
    datayyv[i]=ypos1-((data[i]-miny1)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(miny1-lminy)/(lmaxy-lminy)));
}

 ctx.beginPath();
ctx.moveTo(dataxxv[0],datayyv[0]);
  for(var i=1; i<data.length; i++) {
      ctx.lineTo(dataxxv[i],datayyv[i]);
        ctx.lineWidth=0.5;
      ctx.stroke();

  }
   ctx.closePath(); 
    
}

function plot1(data)
{
    deleteplot1();
 var c=document.getElementById("mycanvas2");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
var xpos=w-(0.9*w);

var xpos1=0.9*w;
var ypos=h-(0.9*h);
var ypos1=0.8*h;
var widx=0.3*ypos;
var widy=0.1*xpos;
minx=0;
maxx=(data.length);
miny1=Math.min.apply(Math,data);
maxy1=Math.max.apply(Math,data);
var lminx=(Math.floor(minx*10)/10);
  var lmaxx=(Math.ceil(maxx/10)*10);
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
ctx.lineWidth=1;
ctx.stroke();
 ctx.font='10pt Computermodern';
 ctx.fillStyle="black";
ctx.fillText((Math.round((lmaxx-lminx)*100)*(i)/(100*10)).toString(),xpos2[i],(ypos1+4*widy));


}
for (i = 0; i <=5; i++) { 
    ypos2.push((ypos1-(ypos1-ypos)*(i)/5));
ctx.beginPath();

ctx.moveTo(xpos,ypos2[i]);
ctx.lineTo(xpos+widy,ypos2[i]);
ctx.lineWidth=1;
 ctx.strokeStyle = '#000000';
ctx.stroke();
ctx.font='10pt Computermodern';
ctx.fillStyle="black";
ctx.fillText((Math.round((lmaxy-lminy))*(i)/5+lminy).toString(),(xpos-4.5*widy),ypos2[i]);

}

ctx.font='14pt Time';
ctx.fillStyle="black";
ctx.save();
ctx.translate(xpos-6.5*widy,(ypos1+ypos)/2);
ctx.rotate(-0.5*Math.PI);
ctx.font='12pt Computermodern';
ctx.fillStyle="black";
ctx.fillText("Stress",0,0);
ctx.restore();
var dataxxv=[],datayyv=[];
for(var i=0; i<data.length; i++) {
    dataxxv[i]=((i+1)*(xpos1-xpos)/(lmaxx-lminx))+xpos ;
}

   for(var i=0; i<data.length; i++) {
      
    datayyv[i]=ypos1-((data[i]-miny1)*(ypos1-ypos)/(lmaxy-lminy)+((ypos1-ypos)*(miny1-lminy)/(lmaxy-lminy)));
}

 ctx.beginPath();
ctx.moveTo(dataxxv[0],datayyv[0]);
  for(var i=1; i<data.length; i++) {
      ctx.lineTo(dataxxv[i],datayyv[i]);
        ctx.lineWidth=0.5;
      ctx.stroke();
  }
  ctx.closePath(); 

  
  




}
function deleteplot()
{
var c=document.getElementById("mycanvas1");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
ctx.clearRect(0, 0, w,h);
ctx.restore();        
}
function deleteplot1()
{
  var c=document.getElementById("mycanvas2");
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
ctx.clearRect(0, 0, w,h);
ctx.restore();      
}

function cleartablefcn1()
        {
         var table = document.getElementById("output1");
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                table.deleteRow(0);
            }
        }    
  function cleartablefcn2()
        {
         var table = document.getElementById("output12");
            var rowCount = table.rows.length;
            for(var i=0; i<rowCount; i++) {
                table.deleteRow(0);
            }
        }    
        
   function myhelp2()
{

 document.getElementById("help").removeAttribute("hidden");
document.getElementById("help").style.opacity="1";
location.href="#help2";
document.getElementById("main").setAttribute("hidden", true);
document.getElementById("main").style.opacity="0";

}
function myhelp3()
{

 document.getElementById("help").removeAttribute("hidden");
document.getElementById("help").style.opacity="1";
location.href="#help3";
document.getElementById("main").setAttribute("hidden", true);
document.getElementById("main").style.opacity="0";

}
function myhelp4()
{

 document.getElementById("help").removeAttribute("hidden");
document.getElementById("help").style.opacity="1";
location.href="#help4";
document.getElementById("main").setAttribute("hidden", true);
document.getElementById("main").style.opacity="0";

}
function myhelp1()
{

 document.getElementById("help").removeAttribute("hidden");
document.getElementById("help").style.opacity="1";
location.href="#help1";
document.getElementById("main").setAttribute("hidden", true);
document.getElementById("main").style.opacity="0";

}

function myclosehelp()
{
document.getElementById("help").style.opacity="0";
document.getElementById("help").setAttribute("hidden", true);
 document.getElementById("main").removeAttribute("hidden");
document.getElementById("main").style.opacity="1";

}     
        