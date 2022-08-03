var intervalId;
var bool = true;


function clock(){
    var completeDate = new Date();
    var t =  completeDate.toLocaleTimeString()
    var d = completeDate.toLocaleDateString()
    document.getElementById("clock").innerHTML = "Date: " + d + "<br>" + "Time: " + t
}

function startClock(){
    console.log("start")
     intervalId = setInterval(clock,1000);
     bool = false;
}
document.getElementById("start").addEventListener("click",startClock)


function stopClock(){
    console.log("Stop")
     clearInterval(intervalId)
}
document.getElementById("stop").addEventListener("click",stopClock)

bool? startClock()  : stopClock();

