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
//= require jquery.columns
//= require jQuery.equalHeights
//= require jquery.noisy
//= require filtrify
//= require jquery.crossTable
//= require jquery.easing
//= require jquery.vgrid
//= require exvalidation
//= require exchecker-ja
//= require jquery.megamenu
//= require hoverIntent
//= require superfish
//= require password_strength.min
//= require jquery.tinyscrollbar
//= require jquery.socialbutton
//= require jquery.idTabs.min
//= require ui.elements
//= require jquery-ui-1.9.2.custom
//= require jquery.jBreadCrumb.1.1
//= require jquery.tipsy
//= require jquery.cookies.2.2.0
//= require jquery.droppy
//= require jquery.highliner-0.0.2
//= require waypoints
//= require hashchangeTab
//= require jquery.ba-hashchange
//= require jquery.ferro.ferroSlider-1.2.min
//= require jquery.fontSizer
//= require jQuery.radmenu
//= require jPages
//= require jquery.roundabout
//= require jquery.autopager-1.0.0

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
    north__size: 100,
  });
})
