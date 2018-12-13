(function($) {
    var base_url;
    base_url = -1 != location.hostname.toLowerCase().indexOf("whiterockinteractive.com") ? "dev.whiterockinteractive.com:8101" : "scontent.alcon.com/cpn";
    var ie = function() {
        for (var a = 3, b = document.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) return 4 < a ? a : void 0
    }();

//    function recordOutboundLink(a, b, c) {
//        _gaq.push(["cpnTracker._setDomainName", "scontent.alcon.com"]);
//        _gaq.push(["cpnTracker._setAllowLinker", !0]);
//        _gaq.push(["cpnTracker._trackEvent", b, c, b + "-" + c]);
//        _gaq.push(["parentPageTracker._trackEvent", b, c, b + "-" + c])
//    }
//    var gaAccount = 0,
//        ga_dict = ga_dict || setGoogleAnalyticsDictionary(),
//        _gaq = _gaq || [],
//        cpnGaAccount = "UA-22195693-10",
//        gaAccount = ga_dict[location.hostname.toLowerCase()];
//    0 !== gaAccount && void 0 !== gaAccount && (_gaq.push(function() {
//        _gat._createTracker(cpnGaAccount, "cpnTracker");
//        _gat._createTracker(gaAccount, "parentPageTracker")
//    }), function() {
//        var a = document.createElement("script");
//        a.type = "text/javascript";
//        a.async = !0;
//        a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
//        var b = document.getElementsByTagName("script")[0];
//        b.parentNode.insertBefore(a, b)
//    }());
//    var protocol = "https:" == document.location.protocol ? "https://" : "http://";
//    url = protocol + base_url + "/styles-globalTH-mobile.css";
//    document.createStyleSheet ? document.createStyleSheet(url) : $('<link rel="stylesheet" type="text/css" href="' + url + '" />').appendTo("head");
//    var singleton = !1;
//    $(document).ready(function() {
//        0 == singleton && $.ajax({
//            url: "//" + base_url + "/service.aspx?lang=" + langTH + "&cnty=" + cntyTH + "&mobile=" + mobileTH,
//            dataType: "jsonp"
//        });
//        singleton = !0
//    });

    function addTopHatMobile(a) {
        "OK" == a.status && 6 != ie && ($("body").append(a.tophat), $(".menu-head").click(function() {
            $(this).find(".wrapper-menuitem").not(":animated").slideToggle()
        }))
    }

    function setGoogleAnalyticsDictionary() {
        return {
            "www.opti-free.com": "UA-3779829-29",
            "www.alcon.com": "UA-1958518-2",
            "www.whiterockinteractive.com": "UA-27543628-1"
        }
    }

    function isNumber(a) {
        return "boolean" != typeof a && !isNaN(a)
    };
}(jQuery));