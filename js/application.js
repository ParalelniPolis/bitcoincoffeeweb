// Smooth scrolling
$(document).ready(function() {
    $('.scroll').click(function(){
        var target = $(this).attr('href');
        target = $(target).offset().top;
        $('html, body').animate({scrollTop: target}, 1500);
    });
});

// Animations
(function(){

    var config = {
        viewFactor : 0.15,
        duration   : 800,
        distance   : "0px",
        scale      : 0.8,
    }

    window.sr = new ScrollReveal(config)
})();

var logos = {
    origin   : "top",
    distance : "80px",
    duration : 1500,
    delay    : 500,
    scale    : 1,
};

sr.reveal(".shoptet", logos);
