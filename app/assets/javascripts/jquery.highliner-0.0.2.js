/*!
 * jQuery Highliner v0.0.2
 * http://jbaron.gr/
 *
 * Copyright 2010, Ioannis Barounis
 *
 * Demo at: http://jbaron.gr/jquery/
 *
 * Last Modification Date: 18 19 2010 
 * Creation Date: 27 9 2010
 * Release Date: 16 10 2010
 *
 * ChangeLog v0.0.2:
 * 	Now can terminate effect by clicking Esc button.
 *	Fixed some bugs causing effect not working properly.
 *	Fixed a bug, causing chrome flickering while terminating effect.
 *	Reduced Code.
 *
 * To Do:
 *	Remember space between panels after starting / terminating effect.
*/
/*
How to use:

$(document).ready(function(){	
$("#lineactivator").click(function(e){
$.highliner (e);
});
});

$.highliner (e,{selectorid:"something",showspeed:150,hidespeed:1000,opacity:0.8});
$.highliner (e,{selectorid:"something",showspeed:150,hidespeed:1000,opacity:0.8,closeOnEsc:false},function(){alert("Hello");});
$.highliner (e,{selectorid:"something",bgcolor:"red",hidespeed:1000,opacity:0.8},function(){alert("Hello");});
*/
(function ($){
 $.extend({
highliner :function(e,options,callbackFnk) {
var defaults={
	selectorid: "highliner", //defines a unique selector
	showspeed:100,
	hidespeed:1000,
	spacerClass:"cursorspacer", //define your class in your css , ex: .cursorspacer{margin-right:50px} .cursorspacer a{cursor:pointer;color:navy;} .cursorspacer a:hover{color:red;}
	spacerPlace:"left", //left or right
	spacerOpacity:1,
	bgcolor: "#000", //define a background color for the effect
	opacity: 0.6, //define the opacity of the effect
	closeOnEsc: true //stops effect after pressing Esc button
};  
var options = $.extend(defaults, options);
var spaceline=20;
var stop=false;
var sSymbol="#";
var sdivtop="top"+options.selectorid;
var sdivbottom="bottom"+options.selectorid;
var sdivspacer="spacer"+options.selectorid;
var sdivclose="close"+options.selectorid;
var sdivplus="plus"+options.selectorid;
var sdivminus="minus"+options.selectorid;

if(!$(sSymbol+options.selectorid).length){
$('body').append("<div style='display:none;' id='"+options.selectorid+"'>Creator Barounis Ioannis</div>");
$('body').append("<div id='"+sdivtop+"'></div>");
$('body').append("<div id='"+sdivbottom+"'></div>");
$('body').append("<div id='"+sdivspacer+"'></div>");
if(options.spacerPlace=="left"){
$(sSymbol+sdivspacer).append("<a id='"+sdivclose+"'>x</a> |");
$(sSymbol+sdivspacer).append(" <a id='"+sdivminus+"'>-</a>");
$(sSymbol+sdivspacer).append(" <a id='"+sdivplus+"'>+</a>");
}else{
$(sSymbol+sdivspacer).append("<a id='"+sdivplus+"'>+</a>");
$(sSymbol+sdivspacer).append(" <a id='"+sdivminus+"'>-</a>");
$(sSymbol+sdivspacer).append(" | <a id='"+sdivclose+"'>x</a>");
}
$(sSymbol+sdivtop).css({visibility:"visible",display:"scroll",position:"fixed",top:"0%",left:"0%",width:"100%","background-color":options.bgcolor,opacity:options.opacity,"-moz-opacity":options.opacity,"-ms-filter":"alpha(opacity="+options.opacity*10+")",filter:"alpha(opacity="+options.opacity*10+")",border:"black solid 1px","-moz-box-shadow":"0 0 10px #000","-webkit-box-shadow":"0 0 10px #000","box-shadow":"0 0 10px #000"});
$(sSymbol+sdivbottom).css({visibility:"visible",display:"scroll",position:"fixed",bottom:"0%",left:"0%",width:"100%","background-color":options.bgcolor,opacity:options.opacity,"-moz-opacity":options.opacity,"-ms-filter":"alpha(opacity="+options.opacity*10+")",filter:"alpha(opacity="+options.opacity*10+")",border:"black solid 1px","-moz-box-shadow":"0 0 10px #000","-webkit-box-shadow":"0 0 10px #000","box-shadow":"0 0 10px #000"});
$(sSymbol+sdivspacer).css({visibility:"visible",display:"scroll",position:"fixed",left:"10px","background-color":"#fff",padding:"0px 5px 0px 5px",opacity:options.spacerOpacity,border:"black solid 1px","-moz-border-radius":"5px","-webkit-border-radius":"5px","border-radius":"5px"}).addClass(options.spacerClass);
}

$(sSymbol+sdivtop).animate({  visibility:"visible",height: e.clientY-spaceline,opacity:options.opacity,"-ms-filter":"alpha(opacity="+options.opacity*10+")",filter:"alpha(opacity="+options.opacity*10+")"},options.showspeed);
$(sSymbol+sdivbottom).animate({ visibility:"visible",height: $(window).height()-e.clientY-spaceline,opacity:options.opacity,"-ms-filter":"alpha(opacity="+options.opacity*10+")",filter:"alpha(opacity="+options.opacity*10+")"},options.showspeed);
if(options.spacerPlace=="left") $(sSymbol+sdivspacer).css({visibility:"visible",top: e.clientY-$(sSymbol+sdivspacer).height()+10});
else $(sSymbol+sdivspacer).css({visibility:"visible",top: e.clientY-$(sSymbol+sdivspacer).height()+10,left:$(window).width()-$(sSymbol+sdivspacer).width()-20});

$(document).mousemove(function(e){if(!stop) dstuff(e);});
$(sSymbol+sdivplus).click(function(e){if(spaceline>200)spaceline=200; else spaceline+=10;dstuff(e);});
$(sSymbol+sdivminus).click(function(e){if(spaceline<20)spaceline=20; else spaceline-=10;dstuff(e);});

function dstuff(e){
$(sSymbol+sdivtop).css({height: e.clientY-spaceline});
$(sSymbol+sdivbottom).css({height: $(window).height()-e.clientY-spaceline});
$(sSymbol+sdivspacer).css({top: e.clientY-$(sSymbol+sdivspacer).height()+10});
}

$(sSymbol+sdivclose).click(function(e){
$(sSymbol+sdivtop).slideUp(options.hidespeed);
$(sSymbol+sdivbottom).slideUp(options.hidespeed);
$(sSymbol+sdivspacer).css({ visibility:"hidden"});
stop=true;
});
if(options.closeOnEsc){ $(document).keyup(function(e) { if (e.keyCode==27) $(sSymbol+sdivclose).click(); });}

if($.isFunction(callbackFnk)) callbackFnk.call(this);
}
});
})(jQuery);
