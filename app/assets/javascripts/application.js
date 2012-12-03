// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery.masonry
//= require jquery.infinitescroll
//= require jquery.layout
//= require jquery.pageslide
//= require jquery.slickwrap
//= require jquery.ez-pinned-footer
//= require jquery.columns

$(function(){
  $('body').layout({
    applyDefaultStyles: true,
    north__closable: false,
    east__closable: true,
    south__closable: false,
    west__closable: true,
    north__resizable: false,
    east__resizable: true,
    south__resizable: false,
    west__resizable: true,

    slideTrigger_close: 'mouseover',
    east__togglerTip_open: "開く",

    togglerAlign_open: "top",
    togglerAlign_closed: "top",

    togglerLength_open: 30, // トグル領域の長さ
    togglerLength_closed: 30, // トグル領域の長さ

    sliderCursor: 'pointer',

    fxName: 'scale',
    fxSpeed: 'slow',

    east__initClosed: true,

    east__togglerContent_open: "<span>OPEN</span>",
    east__spacing_open: 30,
    east__spacing_closed: 30,

    west__size: 200,
  });
})
