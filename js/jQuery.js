$(document).ready(function() {

    //Collapses Menu Items to Mobile Nav .

    $('.button-collapse').sideNav();

    // Scroll function if button on header is clicked.

    $("button").click(function() {
        $('html,body').animate({
                scrollTop: $("#section-3").offset().top
            },
            'slow');
    });
    // Links on Nav smooth scroll down to respective sections with a smooth scroll.

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    // Gives cards the appearnce of floating off the page on hover.

    $('.hoverable').hover(function() {
            $(this).removeClass('z-depth-0').addClass('z-depth-1');
        },
        function() {
            $(this).removeClass('z-depth-1').addClass('z-depth-0');
        }

    )

    //Changes size of button depending on the size of the screen.

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

    // Initialization of feature section tabs

    $('ul.tabs').tabs();

    // Opens intercom chat bubble when they click the "live chat support" card.

    $('#live_chat_link').click(function() {
        $('#intercom-launcher').trigger('click');
    });
});
