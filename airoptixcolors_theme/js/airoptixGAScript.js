(function($) {
var isVignetteLoaded=false;$(document).ready(function(){$('[rel="external"]').click(function(){var pageName=ga_getExternalLinkName($(this).attr("href"));ga_trackPage(pageName);return true;});$('input.lifeStyleEle').click(function(){if($(this).is(':checked')){var elstr=$(this).attr("id")
var elstr2=elstr.replace(/lse_/,"");var elid=parseInt(elstr2);if(elid<=30)
ga_trackEvent("AO_Website_Homepage_Interaction","Video_Lifestyle_Statements",lifeStyleElementsGA[elid-1]);else if(elid>=31&&elid<=33)
ga_trackEvent("AO_Website_NewToContacts","NewToContacts_CL_Benefits",lifeStyleElementsGA[elid-1]);else if(elid>=34)
ga_trackEvent("AO_Website_NewToContacts","NewToContacts_Issues_Eyeglasses",lifeStyleElementsGA[elid-1]);}});$('._gaData').click(function(){var $this=$(this);var data=$this.metadata();if($this.is(":radio")||$this.is(":checkbox")){if($this.is(':checked')){ga_trackEvent(gaMatrix.category[data.C],gaMatrix.action[data.A],gaMatrix.label[data.L]);}}else{ga_trackEvent(gaMatrix.category[data.C],gaMatrix.action[data.A],gaMatrix.label[data.L]);}});$('._gaPage').click(function(){var data=$(this).metadata();ga_trackPage(data.A);});$('._gaDataValue').click(function(){var $this=$(this);var data=$this.metadata();if($this.is(":radio")||$this.is(":checkbox")){if($this.is(':checked')){ga_trackEventValue(gaMatrix.category[data.C],gaMatrix.action[data.A],gaMatrix.label[data.L],gaMatrix.value[data.V]);}}else{ga_trackEventValue(gaMatrix.category[data.C],gaMatrix.action[data.A],gaMatrix.label[data.L],gaMatrix.value[data.V]);}});$('._gaDataDefault').click(function(){var $this=$(this);var data=$this.metadata();if($this.is(":radio")||$this.is(":checkbox")){if($this.is(':checked')){ga_trackEventValue(data.C,data.A,data.L,data.V);}}else{ga_trackEventValue(data.C,data.A,data.L,data.V);}});});function ga_trackEventValue(category,action,optional_label,optional_value)
{try{pageTracker._trackEvent(category,action,optional_label,optional_value);}catch(err){}}
function ga_trackEvent(category,action,optional_label)
{try{pageTracker._trackEvent(category,action,optional_label);}catch(err){}}
function ga_trackPage(pageName)
{try{pageTracker._trackPageview(pageName);}catch(err){}}
function ga_getExternalLinkName(url)
{var str=url;str=str.replace(/http:\/\//i,"");str=str.replace(/www\./i,"");str="External_URL_"+str;return str;}
function ga_pageTracker(url)
{var pageName=ga_getExternalLinkName(url);ga_trackPage(pageName);}
}(jQuery));