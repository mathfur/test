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
