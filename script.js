let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let st ;
let count
function start(){
    if(!st){

        st = setInterval(timer,10)
        count = 1
    }
}
function timer(){
    let display = document.getElementById("timer")
    display.innerHTML=(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
    ms++;
    if(ms==99){
        ms=0;
        s++
    }
    if(s==99){
        s=0;
        m++
    }
    if(m==59){
        m=0;
        h++
    }
}  
function stop(){
    clearInterval(st);
    st = false;
}
function reset(){
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    count = 0;
    // document.getElementById("timer").innerHTML = (h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
    document.getElementById("timer").innerHTML = "00:00:00:00"
    stop()
}
function lap(){
    if(count == 1){
        let li = document.createElement("li");
        li.setAttribute("class","lap")
        li.innerHTML = (h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
        let ul = document.getElementById("laps");
        ul.appendChild(li);
    }
}

