let hrs=document.getElementById("hrs")
let mints=document.getElementById("mints")
let sec=document.getElementById("sec")
setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML=currentTime.getHours();
    mints.innerHTML=currentTime.getMinutes();
    sec.innerHTML=currentTime.getSeconds();

},1000)

