/* ================== Enhetskalkulator ======================*/

let submitBtn = document.getElementById("submit")
let clearBtn = document.getElementById("clear")

submitBtn.addEventListener("click", kalkuler)
clearBtn.addEventListener("click", slett)

	//(antall enheter)*(alkoholinnhold)*(absorbsjon)/(vekt)-(timer)

	//create input for weight
	var vekt = 0;
	
	//alkoholinnhold i øl 
	var øl_innhold = .47;

	//alkoholinnhold i vin
	var vin_innhold = .13;

	//alkoholinnhold i shot
	var shot_innhold = .40;
	
	//gjennomsnittlig absorbsjonsrate
	var absorbsjon = 7.5;
	
	//timer siden siste enhet
	var timePass = 0.015;

  var total = 0;
	

	function kalkuler(){
		
		var øl = document.getElementById("øl").value;
		var vin = document.getElementById("vin").value;
		var shot = document.getElementById("shot").value;
		var vekt = document.getElementById("vekt").value;
		var tid = document.getElementById("tid").value;
		
		var drinkTotal = ((øl * øl_innhold) + (vin * vin_innhold) + (shot * shot_innhold));
		var total = (drinkTotal * absorbsjon);
		var resultat = ((total) / (vekt) - (tid*timePass));
	
		
		document.getElementById("resultat").innerHTML = resultat*10;
	
		
	}

	function slett(){
		document.getElementById("vekt").value = "";
		document.getElementById("øl").value = "";
		document.getElementById("vin").value = "";
		document.getElementById("shot").value = "";
		document.getElementById("tid").value = "";
		document.getElementById("resultat").innerHTML = "";

	}
	
	console.log(total);
	


/* ====================== /Enhetskalkulator ==================== */

/* ==================== Dropdown =====================*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function() {
	
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
	else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
  )
}

/* =============== /Dropdown =============== */