window.onload = function (){

    let seconds = 00;
    let tens = 00;
    let mins = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let appendMins = document.getElementById("mins")
    
    //Initializing Buttons for functioning of engine
    let startButton = document.getElementById("start-btn");
    let stopButton = document.getElementById("stop-btn");
    let resetButton = document.getElementById("reset-btn")
    
    let intervals;
    
    startButton.onclick = function (){
        clearInterval(intervals);
        intervals = setInterval(startTimer,10)
    }
    stopButton.onclick = function (){
        clearInterval(intervals)
    }
    resetButton.onclick = function (){
        clearInterval(intervals);
        tens = "00" ;
        seconds = "00";
        mins = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMins.innerHTML = mins;
    }
    
    //main timer starts here 
    
    function startTimer(){
        tens++;        
        //defining how the timer counts when tens are less than 9
        if (tens<=9) {
            appendTens.innerHTML = "0" + tens;         
        }
        
        if (tens>9) {
            appendTens.innerHTML = "0" + 0;
        }
        
        if (tens>60) {
            /* console.log(seconds) */;
            seconds++;
            appendSeconds.innerHTML =  seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        
        //defining how timer counts under the seconds
        //when seconds are less than or equal to 10
        if (seconds>9) {
            appendSeconds.innerTextML = seconds;
        }
        //when seconds exceed 60 it will converted to minutes 
        if (seconds>60) {
            mins++;
            appendMins.innerHTML =  mins;
            seconds = 0 ;
            appendSeconds.innerHTML =  seconds;
        }
    }
}