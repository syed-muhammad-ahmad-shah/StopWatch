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


// ======================== start obj =================================
// function startObj(start) {
//     this.st 
//     if(!st){

//         st = setInterval(timer,10)
//         count = 1
//     }
//  }
 
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

// ======================== timer obj =================================
// function timerObj(){
//     this.display = document.getElementById("timer")
//     display.innerHTML=(h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
//     ms++;
//     if(ms==99){
//         ms=0;
//         s++
//     }
//     if(s==99){
//         s=0;
//         m++
//     }
//     if(m==59){
//         m=0;
//         h++
//     }
// } 


function stop(){
    clearInterval(st);
   
    st = false;
}

// ======================== stop obj =================================
// function stopObj() {
//     clearInterval(this.st)
//     this.st = false
//     startObj(this.st)

// }

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





// ======================== stopwatch obj =================== 
// const start = document.getElementById("start");
// let StopWatch = {
//     h: 0,
//     m: 0,
//     s: 0,
//     ms: 0,
//     st: null,
//     display: document.getElementById("timer"),
//     displayValue: display.innerHTML,
//     li:  document.createElement("li"),
//     liHtml: innerHTML = (this.h < 10? "0"+ this.h: this.h)+":"+(this.m < 10?"0" + this.m : this.m)+":"+(this.s < 10?"0" + this.s : this.s)+":"+(this.ms < 10? "0" + this.ms : this.ms),
//     ul: document.getElementById("laps"),
//     start: function (){
//        if(!this.st){
   
//            this.st = setInterval(this.timer,10)
//        }
//    },
//    timer: function (){
//        // let display = document.getElementById("timer")
//        this.displayValue = (this.h < 10?"0"+this.h:this.h)+":"+(this.m < 10?"0"+this.m:this.m)+":"+(this.s < 10?"0"+this.s:this.s)+":"+(this.ms < 10?"0"+this.ms:this.ms)
//        // display.innerHTML=(this.h < 10?"0"+this.h:this.h)+":"+(this.m < 10?"0"+this.m:this.m)+":"+(this.s < 10?"0"+this.s:this.s)+":"+(this.ms < 10?"0"+this.ms:this.ms);
//        this.ms++;
//        if(this.ms==99){
//           this.ms=0;
//            this.s++
//        }
//        if(this.s==99){
//            this.s=0;
//            this.m++
//        }
//        if(this.m==59){
//            this.m=0;
//            this.h++
//        }
//    },  
//    stop: function (){
//        clearInterval(this.st);
//        this.st = false;
//    },
//    reset: function (){
//        this.h = 0;
//        this.m = 0;
//        this.s = 0;
//        this.ms = 0;
//        // document.getElementById("timer").innerHTML = (h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
//        // document.getElementById("timer").innerHTML = "00:00:00:00"
//        this.displayValue = "00:00:00:00"
//        this.stop
//    },
//    lap: function (){
//        // let li = document.createElement("li");
//        this.li.setAttribute("class","lap")
//        // li.innerHTML = (h < 10?"0"+h:h)+":"+(m < 10?"0"+m:m)+":"+(s < 10?"0"+s:s)+":"+(ms < 10?"0"+ms:ms);
//        this.liHtml
//        // let ul = document.getElementById("laps");
//        this.ul.appendChild(this.li)
   
//    }
// }
// console.log(StopWatch.liHtml)
// start.addEventListener("click",function(){
//  StopWatch.start;
// //  console.log(StopWatch.timer);
//  console.log(StopWatch.start)});


// // console.log(document.querySelector('.button--start'))
// // console.log(StopWatch.start)