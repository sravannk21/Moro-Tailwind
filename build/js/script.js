$(document).ready(function(){

    //Sticky navigation
    $('.js-sticky-nav').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('fixed')
        }
        else {
            $('nav').removeClass('fixed')
        }
    },
    {
        offset: '60px'
    })

    //Team Carousel
    $('#team').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});