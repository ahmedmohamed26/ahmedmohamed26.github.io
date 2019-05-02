
function test() {
  $('head').append('<link rel="stylesheet" type="text/css" href="css/dark_theme.css"/>')
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("#sidebar").toggleClass("move");
  });
});



$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".openMenu").toggleClass("fullWidth");
  });
});

$(function () {
  $("#datepicker").datepicker();
});

$(function () {
  $("#datepicker1").datepicker();
});
$(function () {
  $("#datepicker2").datepicker();
});
$(function () {
  $("#datepicker3").datepicker();
});
$(function () {
  $(".starrr").starrr({
    rating: 3,
    readOnly: true
  });
});
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".all #sidebar span,#sidebar  a.activated span").toggleClass("arrow");
  });
});
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".nav #nameLogo").toggleClass("hideImg");
  });
});

// start multiSelect
$(document).ready(function () {
$(".js-example-placeholder-multiple").select2({
  placeholder: "Select a option",
  theme: "flat"
});
});
// end multiSelect

// start order button
function first() {
  $(".modal-body#one").css("display", "block");
  $(".modal-body#two,.modal-body#three").css("display", "none");
   $(".allButtons #first").css({
     "background": "#1976d2",
     "color": "#fff"
   });
   $(".allButtons #second,.allButtons #third").css({
     "background": "#fff",
     "color": "#1976d2",
     "border": "1px solid #1976d2"
   });
}
function second(){
$(".modal-body#two").css("display","block");
$(".modal-body#one,.modal-body#three").css("display", "none");
 $(".allButtons #second").css({
   "background": "#1976d2",
   "color": "#fff"
 });
 $(".allButtons #first,.allButtons #third").css({
   "background": "#fff",
   "color": "#1976d2",
   "border": "1px solid #1976d2"
 });
}
function third() {
  $(".modal-body#three").css("display", "block");
  $(".modal-body#one,.modal-body#two").css("display", "none");
  $(".allButtons #third").css({
    "background": "#1976d2",
    "color": "#fff"
  });
  $(".allButtons #first,.allButtons #second").css({
    "background": "#fff",
    "color": "#1976d2",
     "border": "1px solid #1976d2"
  });
}


 

// start charts
var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Red","blue","Green", "Yellow","Gray"],
    datasets: [{
      labels: [
        'Red',
        'blue',
        'Green',
        'Yellow',
        'Gray'
      ],
      data: [12, 19, 10, 20, 2],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',       
        '#4bc0c0',
        '#ffcd56',
        '#c9cbcf'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
         
        }
      }]
    }
  }
});



// number 2 
var ctx2= document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["Red", "blue", "Green", "Yellow", "Gray"],
    datasets: [{
      labels: [
        'Red',
        'blue',
        'Green',
        'Yellow',
        'Gray'
      ],
      data: [12, 19, 10, 20, 2],
      backgroundColor: [
        '#ff6384',
        '#36a2eb',
        '#4bc0c0',
        '#ffcd56',
        '#c9cbcf'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {

        }
      }]
    }
  }
});

