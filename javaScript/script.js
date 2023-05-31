

/* ================= Navbar ============================*/
var menyOpen = false 




function openNav() {

       if(menyOpen == false){

       document.getElementById("mySidenav").style.width = "250px";
       document.getElementById("main").style.paddingRight = "250px";
       /* document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; */
       
       document.getElementById("hamburger_1").style.rotate = "43deg";
       document.getElementById("hamburger_2").style.opacity = "0";
       document.getElementById("hamburger_3").style.rotate = "-43deg";

  /*      if(width < 470){
        document.getElementById("logo").style.display = "none";
       } */

       menyOpen = true
       return menyOpen
       }

       if(menyOpen == true){
           document.getElementById("mySidenav").style.width = "0";
           document.getElementById("main").style.paddingRight = "0";

           document.getElementById("hamburger_1").style.rotate = "0deg";
           document.getElementById("hamburger_2").style.opacity = "1";
           document.getElementById("hamburger_3").style.rotate = "0deg";

           if(document.getElementById("main").style.width < 470){
            document.getElementById("logo").style.display = "block";
           }


           menyOpen = false
           return menyOpen
       }
} 
/* ====================== /Navbar ============= */