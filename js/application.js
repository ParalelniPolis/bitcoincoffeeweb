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
    delay    : 500,
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
            cz: "Pondelí až pátek: 8:00 - 20:00",
            en: "Monday to friday: 8:00 - 20:00"
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
        },
        "Statement01": {
            cz: "Záleží na mnoha věcech, zda si svou kávu opravdu vychutnáte. Dobrá káva potřebuje kvalitní péči již na afrických, asijských či jihoamerických plantážích. Odtud putují zelená kávová zrna v jutových pytlích do pražíren.",
            en: "It depends on many things, whether you truly enjoy your coffee. Great coffee needs quality care on african, asian or south-american plants first. From there the green coffee beans travels in jute bags to roaster rooms."
        },
        "Statement02": {
            cz: "Bitcoin Coffee je jedinečné místo s jedinečnou kávou. Espresso připravujeme ze zrn pražených v liberecké pražírně Nordbeans. Její majitelé pečlivě vybírají kávu od lokálních farmářů z Jižní Ameriky, Afriky i Asie. My pak z jejich výběru selektujeme především světleji pražené kávy z Etiopie a Hondurasu. Vynikají lehkou, šťavnatou a osvěžující chutí s ovocnými tóny.",
            en: "Bitcoin Coffee is extraordinary place with unique coffee. We make espresso from beans roasted in Liberec roastery Nordbeans. Their owners carefully pick coffee from local farmers from South America, Africa or Asia. We select from their picks. We prefer lighter roasted coffee from Etiopia and Honduras. They flash by light, rich and fresh taste with fruit tones."
        },
        "Statement03": {
            cz: "Za kávu a jiné pochutiny u nás zaplatíte <a href='//www.paralelnipolis.cz/jak-na-bitcoin/' target='_blank'>kryptoměnou bitcoin</a>.",
            en: "For coffee and everything else you pay with us by <a href='//www.paralelnipolis.cz/jak-na-bitcoin/' target='_blank'>crypto-currency bitcoin</a>."
        },
        "Cooperate": {
            cz: "Spolupracujeme",
            en: "We cooperate with"
        }
    }
    var translator = $('.page').translate({lang: "en", t: dict});
    translator.lang("cz");

    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        translator.lang(lang);
        ev.preventDefault();
    });
});

// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        nav:true,
        navText:[],
        loop:true,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause:true
    });
});