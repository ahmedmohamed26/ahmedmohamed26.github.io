
$(document).ready(function() {
    $('.slider .owl-carousel').owlCarousel({
 
        loop: true,

        margin: 10,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        nav: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

 
});










 