(function($) {
    $(document).ready(function() {
        $(".color-science-link").addClass("active");
        $(".tabitem").click(function() {
            $(".tabitem").removeClass("tabactive");
            $(".tabexpand").hide();
            var content = $(this).addClass("tabactive").attr("id");
            $("." + content).show();
        });
    });
    
    window.mapLoaded = false;
    window.scrollDisable = false;
    (function(Win) {
        Win.checkDevice = function() {
            var windowWidth = window.innerWidth || document.documentElement.clientWidth,
                    windowHeight = window.innerHeight || document.documentElement.clientHeight;
            Win.device = {
                isMobile: false,
                isTab: false,
                isDesktop: false
            };
            if ('ontouchstart' in window)
                device.Touch = true;
            if (windowWidth < 768)
                device.isMobile = true;
            else if (windowWidth >= 768 && windowWidth < 980)
                device.isTab = true;
            else if (windowWidth >= 980 && windowWidth <= 1024)
                device.isTabL = true;
            else if (windowWidth >= 980)
                device.isDesktop = true;
        };
        checkDevice();
        $(window).resize(checkDevice);
    })(window);

    function hideAddressBar() {
        if (!window.location.hash && navigator.userAgent.match(/iPhone/i)) {
            if (document.height < window.outerHeight) {
                document.body.style.height = (window.outerHeight + 50) + 'px';
            }
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 50);
        }
    }
    window.addEventListener && window.addEventListener("load", function() {
        if (!window.pageYOffset) {
            hideAddressBar();
        }
    });
    window.addEventListener && window.addEventListener("orientationchange", hideAddressBar);
    $(function() {
        (function() {
            function topHat() {
                if ($(this).scrollTop() > 43 && !device.isMobile) {
                    $("#hdr-glblalc").css({
                        'top': '-43px'
                    });
                    $("#header-main").css({
                        'top': '0'
                    });
                } else if (!device.isMobile) {
                    $("#hdr-glblalc").css({
                        'top': '0'
                    }, 100);
                    $("#header-main").css({
                        'top': '43px'
                    }, 100);
                }
            }
            $(window).scroll(topHat);

            function scrollTopBtn() {
                if ($(this).scrollTop() > $(window).height() && !device.isDesktop) {
                    $(".scroll_top_button").show();
                } else if (!device.isDesktop) {
                    $(".scroll_top_button").hide();
                }
            }
            $(window).scroll(scrollTopBtn);
            window.addEventListener && window.addEventListener("touchmove", function() {
                topHat();
            }, false);
            var $header = $('#header'),
                    $menubtn = $header.find('#menu-btn'),
                    $nav = $('#nav'),
                    locationURL = location.href.toLowerCase(),
                    paginator = $('#paginator'),
                    paginatorLink = paginator.find('a');

            function menuBtnUpdate() {
                var activeMenu = $nav.find('.active'),
                        activeMenuText = activeMenu.find('a').html();
                if ($nav.find('.active a').hasClass('find-an-ecp') || $nav.find('.active a').hasClass('nav-about-colors')) {
                    device.isMobile && (activeMenuText = activeMenu.find('.non-desktop').text());
                    !device.isMobile && (activeMenuText = activeMenu.find('.desktop').text());
                }
                if (activeMenuText != 'Home' && activeMenuText != "") {
                    $menubtn.children('strong').html(activeMenuText);
                } else if (activeMenuText == 'Home') {
                    $menubtn.children('strong').html('Menu');
                }
            }
            menuBtnUpdate();
            setInterval(menuBtnUpdate, 1);
            $nav.find('li').on('click', function() {
                if (!(device.isDesktop || device.isTabL)) {
                    $menubtn.click();
                    setTimeout(menuBtnUpdate, 500);
                }
            });
            $menubtn.on('click', function() {
                $('#header-main').toggleClass('header-active');
                $nav.slideToggle(500);
            })

            function navOrientation() {
                (device.isDesktop || device.isTabL) && $('#nav').show(), $('#header-main').removeClass('header-active');
                !(device.isDesktop || device.isTabL) && $('#nav').hide();
            }
            window.addEventListener && window.addEventListener("orientationchange", navOrientation);
            $(window).resize(navOrientation);
            $('.open-coupon').on('click', function(e) {
                e.preventDefault();
                if ($('#footer-wrap').hasClass('footer-open')) {
                    $('html,body').animate({
                        scrollTop: 0
                    }, 500);
                }
                if (!$('.freetrial-draw').hasClass('active')) {
                    $('.freetrial-draw').addClass('active');
                    $('.freetrial-desc-wrap').slideDown(300);
                    $('.freetrial-token-cnt, .freetrial-token-cnt *').fadeOut(300);
                    $('.close-coupon').fadeIn(300);
                    $('.coupon-mask').fadeIn(300);
                    $('html,body').css('overflow', 'hidden');
                    scrollDisable = true;
                } else {
                    $('.freetrial-draw').removeClass('active');
                    $('#close-coupon').trigger('click');
                }
            })
            $('#close-coupon').on('click', function() {
                $('.freetrial-draw').removeClass('active');
                $('.freetrial-desc-wrap').slideUp(300);
                $('.freetrial-token-cnt, .freetrial-token-cnt *').fadeIn(300);
                $('.close-coupon').fadeOut(300);
                $('.coupon-mask').fadeOut(300);
                $('html,body').css('overflow', 'auto');
                scrollDisable = false;
            })
            $('.coupon-mask').on('click', function() {
                $('#close-coupon').trigger('click');
            })
        })();
        $(function() {
            $('#show_lang').click(function() {
                $('.lang_select').slideToggle();
                return false;
            });
        });
        $('html').click(function() {
            $('.lang_select').slideUp();
        });
        (function() {
            var isiClose = true,
                    IE7diff = 0,
                    $footerWrap = $('#footer-wrap'),
                    winScrollTop, winHeight, docHeight;
            $.browser.msie && (parseInt($.browser.version) < 9) && (IE7diff = 60);
            window.onload = footerExpand;
            window.onscroll = footerExpand;
            window.onresize = footerExpand;

            function footerExpand() {
                winScrollTop = $(window).scrollTop(), winHeight = $(window).height(), fullDocHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
                docHeight = fullDocHeight - $('#footer-wrap').height();
                if (!device.isMobile) {
                    if ((winScrollTop + winHeight - 80) >= docHeight && isiClose) {
                        $footerWrap.addClass('footer-open');
                        isiClose = false;
                    } else if ((winScrollTop + winHeight - 80) < (docHeight - IE7diff) && isiClose == false) {
                        $footerWrap.removeClass('footer-open');
                        isiClose = true;
                    }
                } else {
                    $footerWrap.addClass('footer-open');
                }
            }
        })();
       /* device.isDesktop && !device.Touch && $("a[rel]").overlay({
            closeOnClick: false,
            onBeforeLoad: function() {
                var _this = this;
                _this.getOverlay().find('iframe')[0].src = "http://app.ustudio.com/embed/D75BOpAQrio7/U620H7283Sy6";
            },
            onClose: function() {
                var _this = this;
                _this.getOverlay().find('iframe')[0].src = "";
            },
            mask: {
                color: '#000',
                closeSpeed: 200,
                opacity: 0.7
            }
        });*/
        $("a#sciene-trig").tooltip({
            tip: '#sciene-tip',
            delay: 300,
            predelay: 0,
            effect: 'fade'
        });
        $("a#ecp-trig").tooltip({
            tip: '#ecp-tip',
            delay: 300,
            predelay: 0,
            effect: 'fade'
        });
        fontResize();
        sciColor();
        colorStudio();
    });

    function sciColor() {
        var lensCat = $('#lens-filter').find('li'),
                lenses = $('#lensblock').find('li').not('.dot-line'),
                lensWrap = $('#sci-wrap-main'),
                lensMain = lensWrap.find('#sci-lens-img img'),
                ringInner = lensWrap.find('#lens-ring1 img'),
                ringColor = lensWrap.find('#lens-ring2 img'),
                ringOuter = lensWrap.find('#lens-ring3 img');
        lenses.each(function() {
            $(this).data('lens-id', parseInt($(this).attr('data-lensid')));
        });

        function lensFilter() {
            lensCat.on('click', function() {
                lensCat.removeClass('active');
                $(this).addClass('active');
                lenses.filter('.' + $(this).attr('data-lenscat')).stop(true).fadeTo(500, 1).addClass('enabled').removeClass('disabled');
                lenses.not('.' + $(this).attr('data-lenscat')).stop(true).fadeTo(500, 0.4).addClass('disabled').removeClass('active enabled');
                ;
            });
        }

        function moaSci() {
            lenses.on('click', function() {
                if ($(this).hasClass('disabled')) {
                    return;
                }
                lensMain.css('top', '-' + ($(this).data('lens-id') - 1) * 100 + '%');
                ringInner.css('top', '-' + ($(this).data('lens-id') - 1) * 100 + '%');
                ringColor.css('top', '-' + ($(this).data('lens-id') - 1) * 100 + '%');
                ringOuter.css('top', '-' + ($(this).data('lens-id') - 1) * 100 + '%');
                lenses.filter('.active').removeClass('active');
                $(this).addClass('active');
            });
        }
        lensFilter();
        moaSci();
    }

    function fontResize() {
        $('.font-chng').each(function() {
            $(this).attr('data-font-size', parseInt($(this).css('font-size')));
        });
        var fontResize = $('#font-resize').find('a');
        fontResize.filter('.small').on('click', function() {
            $('.font-chng').each(function() {
                $(this).css('font-size', parseInt($(this).attr('data-font-size')) + 'px');
            });
            $('#color-science').find('.sci-wrap .pointer').each(function() {
                $(this).removeAttr('style');
            });
        });
        fontResize.filter('.normal').on('click', function() {
            $('.font-chng').each(function() {
                $(this).css('font-size', parseInt($(this).attr('data-font-size')) + 2 + 'px');
            });
            $('#color-science').find('.font-chng').each(function() {
                $(this).css('font-size', parseInt($(this).attr('data-font-size')) + 1 + 'px');
            });
            $('#color-science').find('.sci-wrap .pointer').each(function() {
                $(this).removeAttr('style');
                $(this).css({
                    left: parseInt($(this).css('left')) + 10 + 'px',
                    width: parseInt($(this).css('width')) - 10 + 'px'
                });
            });
        });
        fontResize.filter('.larger').on('click', function() {
            $('.font-chng').each(function() {
                $(this).css('font-size', parseInt($(this).attr('data-font-size')) + 4 + 'px');
            });
            $('#color-science').find('.font-chng').each(function() {
                $(this).css('font-size', parseInt($(this).attr('data-font-size')) + 2 + 'px');
            });
            $('#color-science').find('.sci-wrap .pointer').each(function() {
                $(this).removeAttr('style');
                $(this).css({
                    left: parseInt($(this).css('left')) + 10 + 'px',
                    width: parseInt($(this).css('width')) - 10 + 'px'
                });
            });
        });
        $(".scroll_top_button").on("click", function() {
            $(window).scrollTop(0);
        });
    }

    function colorStudio() {
        var csIframe = $('#cs_iframe')[0];
        $('#csmenu a').on('click', function() {
            csIframe.src = "https://staging-dot-alconvmo.appspot.com/?project=alcon-us&lang=en" + $(this).attr('data-tab');
        });
    }

    function homeModelModule() {
        var lensList = $('#lens-list a[data-lens-src]'),
                homeModelMain = $('#home-model-main');
        lensList.each(function() {
            (new Image()).src = $(this).attr('data-lens-src');
        }).on('click', function() {
            homeModelMain[0].src = $(this).attr('data-lens-src');
        });
    }
}(jQuery));