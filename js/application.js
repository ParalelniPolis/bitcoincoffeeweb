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
        "Close": {
            cz: "Z technických příčin od 27.5 do 28.5 bude kavárna ZAVŘENA. Na vaši návštevu sa budeme tešit zase v Pondělí 29.5. Dekujeme za pochopení.",
            en: "CLOSED 27.5 - 28.5 due to technical issues. We will be open again at Monday 29.5 reguralar hours. Sorry for inconvinience."
        },
        "Open": {
            cz: "Otevírací doba",
            en: "Opening hours"
        },
        "Week": {
            cz: "Pondělí až pátek: 8:00 - 20:00",
            en: "Monday to Friday: 8:00 - 20:00"
        },
		"Weekend": {
            cz: "Sobota a neděle: Zavřeno",
            en: "Saturday and Sunday: Closed"
        },
        "Saturday": {
            cz: "Sobota: 12:00 - 20:00",
            en: "Saturday: 12:00 - 20:00"
        },
		"Sunday": {
            cz: "Neděle: 12:00 - 20:00",
            en: "Sunday: 12:00 - 20:00"
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
            en: "It depends on many things, whether you truly enjoy your coffee. Great coffee needs quality care on African, Asian or South American plantations first. From there, the green coffee beans travel in jute bags to roaster rooms."
        },
        "Statement02": {
            cz: "Bitcoin Coffee je jedinečné místo s jedinečnou kávou. Nabízíme vám výběrovou kávu Ethiopii Dumtu z amsterdamské pražírny White Label Coffee. Káva, ze které připravujeme espresso, je zpracována Natural metodou. To znamená, že se celé kávové plody po sesbírání suší a po dosušení jsou z nich vyloupána zrnka.",
            en: "Bitcoin Coffee is an extraordinary place with unique coffee. We serve selective coffee Ethiopia Dumtu from amsterdam roastery While Label Coffee. Coffee beans that we use for espresso preparation are processed by the so called Natural Method. This means that coffee cherries are dried after collecting and once this process is finished, coffee beans are pealed out."
        },
        "Statement03": {
            cz: "Za kávu a jiné pochutiny u nás zaplatíte kryptoměnou <a href='//www.paralelnipolis.cz/jak-na-bitcoin/' target='_blank'>Bitcoin</a>, popřípadě jejím mladším bráškou zvaným <a href='//www.paralelnipolis.cz/paralelni-polis-doporucuje-litecoin-jako-prostredek-platby/' target='_blank'>Litecoin</a>.",
            en: "For coffee and other delicacies, you will pay with us by cryptocurrency <a href='//www.paralelnipolis.cz/jak-na-bitcoin/' target='_blank'>Bitcoin</a> or possibly a younger brother called <a href='//www.paralelnipolis.cz/paralelni-polis-doporucuje-litecoin-jako-prostredek-platby/' target='_blank'>Litecoin</a>."
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
