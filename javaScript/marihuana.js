
function gli_ut(){
    document.getElementsByClassName("ff")[0].className = "ff slide-out";
    }
    
    function gli_inn(){
        document.getElementsByClassName("ff")[0].className = "ff slide-in";
    }
    
    
    const ffArr =[
        "Cannabis har blitt brukt i flere årtusener, til å lage bla. tau, klær og papir", 
        "Det er 1200 slang-ord for marihuana", 
        "Den gjennomsnittlige styrken på marihuana har tredoblet seg siden 1990-tallet",
        "Cannabis var det første produktet som ble solgt online",
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
    
    
    