let [seconds,mintues,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;
function stopWatch(){
    seconds++;
    if (seconds==60) {
        seconds=0;
        mintues++;
        if (mintues==60) {
            mintues=0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = mintues < 10 ? "0" + mintues : mintues;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
     timer = setInterval(stopWatch,1000);
}
function watchStop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [seconds,mintues,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";

}