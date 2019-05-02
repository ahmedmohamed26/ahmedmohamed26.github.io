 $("document").on("click","#totop",function(){
$("html,body").animate({scrollTop:0},500)

return false;
 });












 
var totop = document.getElementById("totop");
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
 
