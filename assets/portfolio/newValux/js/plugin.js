// start niceScroll
$(function () {
  $("body").niceScroll({
    cursorwidth: "7px",
    cursorcolor: "#707070",
    cursorborder: "1px solid #707070",
    zindex: "9999"
  });
});

// end niceScroll
// start mix it up
$(document).ready(function () {
  $("#container").mixItUp();
});
// end mix it up

$(".projects li").click(function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

// start smooth
var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: "[data-scroll-ignore]",
  header: null,

  // Speed & Easing
  speed: 1000,
  offset: 80,
  easing: "easeInOutCubic",
  customEasing: function (time) {
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
  },
  before: function (anchor, toggle) {}, // Callback to run before scroll
  after: function (anchor, toggle) {} // Callback to run after scroll
});
// end smooth
// start button navbar

$(document).on("click", ".navbar-collapse", function (e) {
  if ($(e.target).is('a:not(".dropdown-toggle")')) {
    $(this).collapse("hide");
  }
});

// end button navbar
// button x
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("active");
  });
});
// end button x
// start removeClass active
$(document).ready(function () {
  $(".navbar .nav-link").click(function () {
    $(".navbar-toggler").removeClass("active");
  });
});
//  end removeClass active