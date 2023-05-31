
function gli_ut(){
document.getElementsByClassName("ff")[0].className = "ff slide-out";
}

function gli_inn(){
    document.getElementsByClassName("ff")[0].className = "ff slide-in";
}


const ffArr =[
    "I 2021 drakk nordmenn 65,2 liter øl per person", 
    "Etter vann og te er øl den mest populære drikken i verden", 
    "Den høyeste promillen registrert er 9.14, som er mer enn dobbelt av en dødelig mengde",
    "Man trenger ca. 600 druer for å lage én flaske rødvin",
    "Det er ca 49 millioner bobler i en flaske sjampanje, som danner et trykk på 90 PSI",
    "Til enhver tid er ca 0.7% av verdensbefolkningen fulle, hvilket tilsvarer rundt 50 millioner mennesker",
]

var timeInSecs;
var ticker;
var N = 10

let arrLengde = ffArr.length

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick() {
var secs = timeInSecs;
if (secs == N){

   let tilfeldig = Math.floor(Math.random() * arrLengde);

    if (ffArr[tilfeldig] == document.getElementById("ff_cnt").innerHTML){
        tilfeldig = Math.floor(Math.random() * arrLengde);
    }
    
    document.getElementById("ff_cnt").innerHTML = ffArr[tilfeldig];
    



    document.getElementsByClassName("ff")[0].style.display = "block";
    gli_inn()
}
if (secs > 0) {
timeInSecs--; 
}
else {
clearInterval(ticker);
startTimer(N); 
gli_ut()
}
}

startTimer(N); 


