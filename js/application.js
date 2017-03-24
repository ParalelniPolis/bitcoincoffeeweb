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

var topCoin = {
    origin   : "top",
    distance : "100px",
    duration : 1500,
    scale    : 1,
};
var bottomH3 = {
    origin   : "bottom",
    distance : "80px",
    duration : 1500,
    delay    : 400,
    scale    : 1,
};
var bottomAddress = {
    origin   : "bottom",
    distance : "80px",
    duration : 1500,
    delay    : 700,
    scale    : 1,
};
var bottomCoffeeCup = {
    origin   : "bottom",
    distance : "80px",
    duration : 1500,
    scale    : 1,
    rotate: { x: 10, y: 10, z: 10 },
};

sr.reveal(".bitcoin-logo", topCoin);
sr.reveal(".bitcoin-h1", topCoin);
sr.reveal(".bitcoin-h3", bottomH3);
sr.reveal(".bitcoin-address", bottomAddress);
sr.reveal(".bitcoin-coffee-cup", bottomCoffeeCup);
