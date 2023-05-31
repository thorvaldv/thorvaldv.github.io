
function gli_ut(){
    document.getElementsByClassName("ff")[0].className = "ff slide-out";
    }
    
    function gli_inn(){
        document.getElementsByClassName("ff")[0].className = "ff slide-in";
    }
    
    
    const ffArr =[
        "Kokain var på 1850- tallet ansett som medisin for barn, og ble bla. brukt i tannkrem og behandling mot alkoholavhengighet", 
        "Columbia, Peru og Bolivia er sammen ansvarlige for produksjonen av nesten all kokainen i verden",
        "Det er estimert at rundt 22 millioner folk bruker kokain jevnlig globalt"

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
    
    
    