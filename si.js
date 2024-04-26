
const simple=()=>{
   const sim=document.getElementById('sim_int_fields')
   sim.style.display='block';
  const com= document.getElementById('com_int_fields')
  com.style.display='none';
  document.getElementById('com').style.display='none'

}
const sim_calculate=()=>{
    const p=parseFloat(document.getElementById("principal").value);
    const r=parseFloat(document.getElementById("rate").value);
    const t=parseInt(document.getElementById("year").value);
    const SI=(p*r*t)/100;
    document.getElementById('result').style.display='block'
    document.getElementById('sim').style.display='block'
    document.getElementById('com').style.display='none'
    document.getElementById('sim').innerHTML=`Simple Interest : ${SI}`
 }
 const compound=()=>{
  const sim=document.getElementById('sim_int_fields')
  sim.style.display='none';
 const com= document.getElementById('com_int_fields')
 com.style.display='block';
 document.getElementById('sim').style.display='none'
 }
 const com_calculate=()=>{
   var p=parseFloat(document.getElementById("principal").value);
   var r=parseFloat(document.getElementById("rate").value);
   var t=parseInt(document.getElementById("year").value);
   r=r/100;

   const amount=p * Math.pow(1+r,t);
   const ci=amount-p;
   document.getElementById('result').style.display='block'
   document.getElementById('com').style.display='block'
   document.getElementById('sim').style.display='none'
   document.getElementById('com').innerHTML=`Amount : ${amount.toFixed(2)} <br>
   Interest Earned : ${ci.toFixed(2)}`
 }

 


 