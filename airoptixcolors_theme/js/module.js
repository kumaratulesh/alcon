(function($) {
$('.accordion > dd').hide();$('.accordion > dt.expanded').next().show();$('.accordion > dt').click(function()
{ga_trackEvent('ao_faq_click','Clicks','ao_faq_click_all');$(this).next().slideToggle();if($(this).hasClass('expanded'))
{$(this).addClass('collapsed').removeClass('expanded');}
else
{$(this).addClass('expanded').removeClass('collapsed');}
return false;});;function scrollDown()
{$("html, body").animate({scrollTop:(400)},1500);}var home_content=$('.home-con').addClass('cloned-after').clone();$('.home-con').hide();function moveHomeCon(){if(device.isTab||device.isMobile){$('.products-area').prepend(home_content.addClass('cloned-before'));$('.products-area').find('.home-con:not(".cloned-before")').remove();}else{$('.products-area .lenses').before(home_content.addClass('cloned-after'));$('.products-area').find('.home-con:not(".cloned-after")').remove();}}
moveHomeCon();$(window).resize(function(){moveHomeCon();});function youTubeResize(){var vidHeight=window.innerHeight||document.documentElement.clientHeight;if(vidHeight<=690){vidHeight=vidHeight-330;videowidth=Math.floor((vidHeight*4)/3);$('.iframe-video-overlay').css('height',vidHeight+'px');$('.iframe-video-overlay').css('width',videowidth+'px');}else{if($('.iframe-video-overlay').hasClass('multifocal-video'))
vidHeight=vidHeight-340;else
vidHeight=vidHeight-300;videowidth=Math.floor((vidHeight*4)/3);$('.iframe-video-overlay').css('height',vidHeight+'px');$('.iframe-video-overlay').css('width',videowidth+'px');}}
setInterval(youTubeResize,100);$('.opens-video').click(function(){$(".iframe-video-overlay").append("<div id='iPlayerDesk' class='iPlayerDesk'></div>");onYouTubePlayerAPIReady();});
}(jQuery));