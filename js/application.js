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

// Translate JS
(function($){
    $.fn.translate = function(options) {

        var that = this; //a reference to ourselves

        var settings = {
            css: "trn",
            lang: "cz"/*,
             t: {
             "translate": {
             pt: "tradução",
             br: "tradução"
             }
             }*/
        };
        settings = $.extend(settings, options || {});
        if (settings.css.lastIndexOf(".", 0) !== 0)   //doesn't start with '.'
            settings.css = "." + settings.css;

        var t = settings.t;

        //public methods
        this.lang = function(l) {
            if (l) {
                settings.lang = l;
                this.translate(settings);  //translate everything
            }

            return settings.lang;
        };


        this.get = function(index) {
            var res = index;

            try {
                res = t[index][settings.lang];
            }
            catch (err) {
                //not found, return index
                return index;
            }

            if (res)
                return res;
            else
                return index;
        };

        this.g = this.get;

        //main
        this.find(settings.css).each(function(i) {
            var $this = $(this);

            var trn_key = $this.attr("data-trn-key");
            if (!trn_key) {
                trn_key = $this.html();
                $this.attr("data-trn-key", trn_key);   //store key for next time
            }

            $this.html(that.get(trn_key));
        });

        return this;
    };
})(jQuery);

$(document).ready(function() {
    var dict = {
        "Praha": {
            cz: "Praha",
            en: "Prague"
        },
        "Open": {
            cz: "Otvírací doba",
            en: "Opening hours"
        },
        "Week": {
            cz: "Pondelí až pátek: 8:00 - 21:00",
            en: "Monday to friday: 8:00 - 21:00"
        },
        "Weekend": {
            cz: "Pátek až nedele: 12:00 - 21:00",
            en: "Friday to sunday: 12:00 - 21:00"
        },
        "Made": {
            cz: "Vyrobeno díky",
            en: "Made with"
        },
        "Czechia": {
            cz: "Česká republika",
            en: "Czechia"
        }
    }
    var translator = $('body').translate({lang: "cz", t: dict}); //use Czech
    translator.lang("cz"); //change to English

    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        translator.lang(lang);
        ev.preventDefault();
    });
});