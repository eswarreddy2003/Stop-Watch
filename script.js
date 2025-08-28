const output=document.getElementById("output");
let t=null;
let s=0;
let e=0;
let r=false;
 function start(){
    if(!r){
    s=Date.now()-e;
    t=setInterval(update,40);
    r=true;
    }
 }
 function stop(){
    if(r){
    clearInterval(t);
    r=false; 
    }
 }
 function reset(){
    clearInterval(t);
    s=0;
    e=0;
    output.textContent="00:00:00:00";
 }
 function update(){
    e=Date.now()-s;
    let h=Math.floor(e/(1000*60*60)); 
    let m=Math.floor(e/(1000*60)%60); 
    let sec=Math.floor(e/1000%60);
    let ms=Math.floor(e%1000/10);
    h=String(h).padStart(2,"0");
    m=String(m).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    ms=String(ms).padStart(2,"0");
    output.textContent=h+":"+m+":"+sec+":"+ms;

 }