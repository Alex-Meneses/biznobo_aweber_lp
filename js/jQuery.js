$(document).ready(function() {
    $('.button-collapse').sideNav();
    $("button").click(function() {
        $('html,body').animate({
                scrollTop: $("#section-3").offset().top
            },
            'slow');
    });
    $('.card').hover(function() {
            $(this).removeClass('z-depth-0').addClass('z-depth-1');
        },
        function() {
            $(this).removeClass('z-depth-1').addClass('z-depth-0');
        }

    )
    var eventFired = 0;

    if ($(window).width() > 1400) {
        $('.sign-up-btn').addClass('btn-large');

    } else {
        $('.sign-up-btn').removeClass('btn-large');
        eventFired = 1;
    }

    $(window).on('resize', function() {
        if (!eventFired) {
            if ($(window).width() > 1400) {
                $('.sign-up-btn').addClass('btn-large');
            } else {
                $('.sign-up-btn').removeClass('btn-large');
            }
        }
    });
});
