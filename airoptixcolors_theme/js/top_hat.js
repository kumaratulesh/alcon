(function($) {
    var base_url;
    base_url = -1 != location.hostname.toLowerCase().indexOf("whiterockinteractive.com") ? "dev.whiterockinteractive.com:8101" : "scontent.alcon.com/cpn";
    var NAVIGATION_HEIGHT = 43,
        ie = function() {
            for (var a = 3, b = document.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) return 4 < a ? a : void 0
        }();

    function recordOutboundLink(a, b, c) {
        _gaq.push(["cpnTracker._setDomainName", "scontent.alcon.com"]);
        _gaq.push(["cpnTracker._setAllowLinker", !0]);
        _gaq.push(["cpnTracker._trackEvent", b, c, b + "-" + c]);
        _gaq.push(["parentPageTracker._trackEvent", b, c, b + "-" + c])
    }
    var gaAccount = 0,
        ga_dict = ga_dict || setGoogleAnalyticsDictionary(),
        _gaq = _gaq || [],
        cpnGaAccount = "UA-22195693-10",
        gaAccount = ga_dict[location.hostname.toLowerCase()]; - 1 != location.href.indexOf("www.opti-free.com/ecp") && (gaAccount = "UA-1776719-7");
    0 !== gaAccount && void 0 !== gaAccount && (_gaq.push(function() {
        _gat._createTracker(cpnGaAccount, "cpnTracker");
        _gat._createTracker(gaAccount, "parentPageTracker")
    }), function() {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }());
    var protocol = "https:" == document.location.protocol ? "https://" : "http://";
    url = protocol + base_url + "/styles-globalTH.css";
    document.createStyleSheet ? document.createStyleSheet(url) : $('<link rel="stylesheet" type="text/css" href="' + url + '" />').appendTo("head");
    

    function addTopHat(a) {
        if ("OK" == a.status && 6 != ie) {
            $("body").prepend(a.tophat); - 1 != location.href.toLowerCase().indexOf("myeyes") && ($("#overlay").fadeTo(0, 0), $("#overlay").css("display", "none"));
            fixBackgroundImage();
            fixBodyOffset();
            fixAlconSurgical();
            var b;
            $(".con-menuitem").each(function() {
                $(this).css("top", "-" + $(this).outerHeight() + "px")
            });
            insertOverlay();
            fixMyEyesDotcom();
            fixAlconDotcom();
            var c = !1;
            $("#nav-glblalc > li").bind("touchstart mouseenter", function() {
                if (!c) {
                    c = !0;
                    setTimeout(function() {
                        c = !1
                    }, 100);
                    contractAllMenus(!1);
                    $(this).addClass("menu-highlight");
                    var a = $(this).children(".wrapper-menuitem"),
                        d = a.children(".con-menuitem"),
                        f = d.outerHeight();
                    animDuration = 500;
                    $("#overlay").css("display", "block");
                    $("#overlay").stop().fadeTo(animDuration, .5);
                    clearTimeout(b);
                    d.css("z-index", 11E3).stop().animate({
                        top: "0"
                    }, animDuration);
                    a.css("z-index", 11E3).stop().animate({
                        height: f
                    }, animDuration)
                }
                return !0
            });
            $("#nav-glblalc > li").bind("mouseleave", function() {
                $(this).removeClass("menu-highlight");
                $("#overlay").stop().fadeTo(animDuration, 0);
                var a = $(this).children(".wrapper-menuitem"),
                    c = a.children(".con-menuitem"),
                    f = c.outerHeight();
                b = setTimeout("$('#overlay').css('display', 'none')", animDuration);
                c.css("z-index", 10999).stop().animate({
                    top: "-" + f + "px"
                }, animDuration);
                a.css("z-index", 10999).stop().animate({
                    height: "0"
                }, animDuration);
                return !1
            });
            $("#nav-glblalc .close_button").bind("click touchstart", function() {
                contractAllMenus(!0);
                return !1
            })
        }
    }

    function contractAllMenus(a) {
        var b = $(".wrapper-menuitem");
        $("#nav-glblalc > li").removeClass("menu-highlight");
        var c = b.children(".con-menuitem"),
            e = c.outerHeight();
        animDuration = 500;
        a && ($("#overlay").stop().fadeTo(animDuration, 0), timeoutTracker = setTimeout("$('#overlay').css('display', 'none')", animDuration));
        c.css("z-index", 10999).stop().animate({
            top: "-" + e + "px"
        }, animDuration);
        b.css("z-index", 10999).stop().animate({
            height: "0"
        }, animDuration)
    }

    function setGoogleAnalyticsDictionary() {
        return {
            "www.airoptix.com": "UA-1231105-38",
            "get.cibavision.com": "UA-1231105-7",
            "virtualconsultant.cibavision.com": "UA-1231105-8",
            "www.clearcaresolution.com": "UA-1231105-5",
            "www.dailies.com": "UA-1231105-2",
            "www.freshlookcontacts.com": "UA-1231105-4",
            "www.mycibavision.com": "UA-1231105-47",
            "www.myalcon.com": "UA-1231105-47",
            "www.contactlenspro.com": "UA-6320902-41",
            "www.icapsvitamins.com": "UA-1776719-11",
            "www.opti-free.com": "UA-1776719-6",
            "www.pataday.com": "UA-1776719-5",
            "www.systane.com": "UA-1776719-10",
            "www.patanase.com": "UA-3779829-3",
            "www.travatanz.com": "UA-3779829-1",
            "www.alconglaucomasurgery.com": "UA-1936879-83",
            "www.alconovd.com": "UA-1936879-73",
            "www.alconretina.com": "UA-1936879-35",
            "www.alconsurgical.com": "UA-1936879-84",
            "www.bssplus.com": "UA-1936879-5",
            "www.infinitivision.com": "UA-1936879-3",
            "www.lensxlasers.com": "UA-1936879-86",
            "www.reclaimyourvision.com": "UA-1936879-82",
            "www.alconsurgicalconnection.com": "UA-22195693-4",
            "www.alcon.com": "UA-1958518-2",
            "www.whiterockinteractive.com": "UA-27543628-1"
        }
    }

    function isNumber(a) {
        return "boolean" != typeof a && !isNaN(a)
    }

    function fixBackgroundImage() {
        var a = getBackgroundImagePos("body");
        "px" == a.yUnit && (a.y += NAVIGATION_HEIGHT);
        $("body").css("background-position", a.x + a.xUnit + " " + a.y + a.yUnit)
    }

    function getBackgroundImagePos(a) {
        var b, c, e;
        b = $(a).css("background-position");
        var d = "string" == typeof b && "0%" != b && "50%" != b ? b.split(" ") : [$(a).css("background-position-x"), $(a).css("background-position-y")];
        if ("top" == d[1] || "0%" == d[1]) d[1] = "0px";
        a = parseFloat(d[0]);
        b = d[0].replace(/[0-9-.]/g, "");
        c = parseFloat(d[1]);
        e = d[1].replace(/[0-9-.]/g, "");
        "left" == d[0] && (a = "left", b = "");
        "right" == d[0] && (a = "right", b = "");
        "bottom" == d[1] && (c = "bottom", e = "");
        "center" == d[0] && (a = "center", b = "");
        "center" == d[1] && (c = "center", e = "");
        return {
            x: a,
            xUnit: b,
            y: c,
            yUnit: e
        }
    }

    function fixBodyOffset() {
        var a = $("body").css("marginTop"),
            a = a.replace(/px/g, ""),
            a = parseInt(a, 10);
        $("body").css("marginTop", 0);
        $("#hdr-glblalc").css("marginBottom", a)
    }

    function fixAlconSurgical() {
        if (-1 != location.hostname.toLowerCase().indexOf("alconsurgical")) {
            var a = $("#fly1").css("top"),
                a = a.replace(/px/g, "");
            parseInt(a, 10);
            a = 18;
            $("#fly1").css("top", a + NAVIGATION_HEIGHT);
            $("#fly3").css("top", a + NAVIGATION_HEIGHT);
            $("#fly4").css("top", a + NAVIGATION_HEIGHT);
            "undefined" != typeof jkmegamenu && (jkmegamenu.jkmegamenus = [], jkmegamenu.jkmegamenulabels = [], jkmegamenu.render($))
        }
    }

    function insertOverlay() {
        -1 != location.href.toLowerCase().indexOf("myeyes") && ($("body").prepend('<div id="overlay"></div>'), $("#overlay").click(function() {}))
    }

    function fixMyEyesDotcom() {
        var a = null !== navigator.userAgent.match(/iPad/i); - 1 != location.href.toLowerCase().indexOf("myeyes") && a && ($("#hdr-glblalc").css("width", "1004px"), $("#overlay").css("width", "1004px"))
    }

    function fixAlconDotcom() {
        var a = null !== navigator.userAgent.match(/iPad/i); - 1 != location.href.toLowerCase().indexOf("www.alcon.com") && a && $("#hdr-glblalc").css("width", "996px")
    };
    $(document).ready(function() {
        'use strict';
        $.fn.fVPopupAlcon = function(settings) {
            var $body = $('body');
            var $dialog = $(this);
            var setCookie = function(name, value) {
                var date = new Date(),
                    expires = 'expires=';
                date.setTime(date.getTime() + 31536000000);
                expires += date.toGMTString();
                document.cookie = name + '=' + value + '; ' + expires + '; path=/';
            }
            var getCookie = function(name) {
                var allCookies = document.cookie.split(';'),
                    cookieCounter = 0,
                    currentCookie = '';
                for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
                    currentCookie = allCookies[cookieCounter];
                    while (currentCookie.charAt(0) === ' ') {
                        currentCookie = currentCookie.substring(1, currentCookie.length);
                    }
                    if (currentCookie.indexOf(name + '=') === 0) {
                        return currentCookie.substring(name.length + 1, currentCookie.length);
                    }
                }
                return false;
            }
            var showMessage = function() {
                $dialog.slideDown();
            }
            var hideMessage = function(ev) {
                ev.preventDefault();
                $dialog.slideUp();
                setCookie('cpn-pp-' + settings.cookieName, 'true');
            }
            if (!getCookie('cpn-pp-' + settings.cookieName)) {
                showMessage();
            }
            try {
                $(settings.showAgainSelector).live('click', showMessage);
                $('.cpn-pp-close').live('click', hideMessage);
            } catch (err) {
                $(settings.showAgainSelector).on('click', showMessage);
                $('.cpn-pp-close').on('click', hideMessage);
            }
        };
    });

    function tillDynamicDomReady() {
        if ($('#hdr-glblalc').length <= 0) {
            setTimeout(function() {
                tillDynamicDomReady();
            }, 1000);
        } else { //$('.cpn-pp').fVPopupAlcon({cookieName:'cookie'});
        }
    }
    tillDynamicDomReady();
}(jQuery));