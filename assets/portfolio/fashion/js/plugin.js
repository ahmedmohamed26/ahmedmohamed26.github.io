// mixitup
$(document).ready(function(){
$("#container").mixItUp();
});





 var mytext = document.getElementById('mytext'),
 	 myspan = document.getElementById("myspan"),	
 	 top = document.getElementById("top"),
 	 totop = document.getElementById("totop"),
 	 navbar = document.getElementById("navbar");

mytext.onkeyup = function(){
"use strict"
myspan.textContent = 50 - this.value.length;
if(myspan.textContent < 0){
	myspan.style.color= "red";

}else{
	myspan.style.color= "#fff";
}
};
// scroll to top
totop.onclick = function(){
"use strict" 
window.scrollTo(0,0);
};
// show button
window.onscroll = function(){
"use strict"
if(window.pageYOffset >= 400){
totop.style.display = "block";
}else{
totop.style.display = "none";
}
};
 


$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a:not(".dropdown-toggle")')) {
        $(this).collapse('hide');
    }
});






 
 