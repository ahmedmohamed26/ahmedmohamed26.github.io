              
            Royal_Preloader.config({
                mode           : 'logo',
                logo           : "img/loader-main.png",
                logo_size      : [80, 80],
                text_colour    : '#FFFFFF',
                showProgress   : true,
                showPercentage : true,
                background     : '#111330',
                cookie: "YXJwYW56dWJlcg=="
            });

 



 


$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a:not(".dropdown-toggle")')) {
        $(this).collapse('hide');
    }
});


// start smooth
var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]',
    header: null,

    // Speed & Easing
    speed: 1000,
    offset: 80,
    easing: 'easeInOutCubic',
    customEasing: function(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

    },
    before: function(anchor, toggle) {}, // Callback to run before scroll
    after: function(anchor, toggle) {} // Callback to run after scroll





});
// end smooth
// start navbar
$(document).ready(function() {





    $(window).scroll(function() {
        if ($(window).scrollTop() >200) {
            $(".item").css({ "color": "#000" });
        } else {
            $(".item").css({ "color": "#fff" });
        }
    });




});
// end navbar
// start mix it up 
$(document).ready(function() {
    $("#container").mixItUp();



});
// end mix it up
// start i type plugin
 


// end i type plugin
// start nav bar background
var navbar = document.getElementById("navbar");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
 
window.onscroll = function() {
    "use strict";
    if (window.pageYOffset > 200) {
        navbar.style.background = "#fff";
        navbar.style.height = "80px";
        navbar.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, .28)";
        img1.style.display = "none";
        img2.style.display = "block";

    } else {
        navbar.style.backgroundColor = "#bfbebe00";
        navbar.style.boxShadow = "2px 2px 20px rgba(0, 0, 0,0)";
        img1.style.display = "block";
        img2.style.display = "none";
    }
};
// end nav bar background
 

var typed = new Typed('.element', {
  strings: ["First sentence.", "Runs Faster. Costs Less.", "Never Breaks. costs less"],
   typeSpeed: 50,
  backSpeed: 50,
showCursor: false,
 loop: true,

});
 

// end typed js plugin

$(".Portfolio li").click(function(){

$(this).addClass("active").siblings().removeClass("active");

});





