var running = false;
var time = 0;
var timeCalc;
var recordedTime = "";
var interval;

function toggleRun(){
    if (running === false){
        running = true;
        interval = setInterval(function(){
        time++;
        timeCalc = time/100;
        document.getElementById("timer").innerHTML = timeCalc;
    },10)
    }
    else {
        running = false;
        clearInterval(interval);
    }
}

function reset(){
    time = 0;
    recordedTime = "";
    document.getElementById("recorded").innerHTML= recordedTime;
    document.getElementById("timer").innerHTML = "";
    running = false;
    clearInterval(interval);
}

function record(){
    recordedTime = recordedTime + timeCalc + "</br>";
    document.getElementById("recorded").innerHTML= recordedTime;
}