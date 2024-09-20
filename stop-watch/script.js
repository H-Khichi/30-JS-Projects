let[hour,minute,sec]=[0,0,0];
let displayTime= document.getElementById("displayTime")
let timer =null;
function stopWatch(){
    sec++;
    if(sec == 60){
        sec=0
        minute++;
        if(minute==60){
            minute=0;
            hour++;
    }
    }
    let h= hour<10 ? "0"+ hour:hour;
    let m= minute<10 ? "0"+ minute:minute;
    let s= sec<10 ? "0"+ sec:sec;
    displayTime.innerHTML=h+":"+m+":"+s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer= setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [hour,minute,sec]=[0,0,0];
    displayTime.innerHTML="00:00:00"

}