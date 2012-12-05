# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$ ->
  $('#entries_container').masonry()
  $('#entries_list').infinitescroll {
    navSelector: '#page-nav',
    nextSelector: '#page-nav a',
    itemSelector: '#entries_list tr.entry',
    loading: {
      msgText: '...',
      finishedMsg: '',
      img: ''
    }
  }
  $('img.start_mark').slickWrap()
  $('.columns').columns()
  $('table.enable-crosstable').crossTable()
  $('div.enable-vgrid').vgrid()
  $('div.enable-equal-height').equalHeights()
  $('div.enable-noisy').noisy({
    intensity: 50,
    opacity: 0.5
  }).css("background-color", "#edebde")
  $('form.enable-exvalidation').exValidation {
    rules: {
      blog_title: "chkhankaku",
      blog_contents: "chkrequired",
      etc: "chkrequired",
    }
    customAddError: ->
      alert('失敗しました')
    errFocus: true,
  }
  $.filtrify('container_index', 'placeHolder')
