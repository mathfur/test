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
  $('#enable-tiny-scrollbar').tinyscrollbar {
    axis: 'x'
  }
  $('.sf-menu').superfish()
  $('#hatena').socialbutton('hatena')
  $('#enable-idtabs dl').idTabs('!mouseover')
  $('#enable-idtabs dl a').click ->
    return false

  @fooCtrl = ($scope) ->
    $scope.foo = "FOO"

  $('#accordion').accordion()
  $('#tabs').tabs()
  $('#breadCrumb').jBreadCrumb()
  $('[title]', '#breadCrumb').tipsy()
  $('#save_time').click ->
    t = new Date()
    time_str = t.getMinutes() + ':'  + t.getSeconds()
    if $.cookies.test()
      $.cookies.set("Time.now", time_str)
      alert("Save:" + time_str)
  $('#load_time').click ->
    if $.cookies.test()
      alert("Load:"+$.cookies.get("Time.now"))

  $('#droppy_nav').droppy()

  $('button#enable_highliner').click (event)->
    $.highliner(event)

  $('#waypoints footer.next').waypoint((event, direction) ->
    alert('waypoints loaded')
  , offset: '100%')

  $().hashchangeTab {
    nav: 'ul#hashchangeTab li',
    currentNav: 'current',
    tabs: [
      '#entry_181',
      '#entry_182',
      '#entry_183',
      '#entry_184',
      '#entry_185',
      '#entry_186',
      '#entry_187',
      '#entry_188',
      '#entry_189',
      '#entry_190'
    ]
  }
  $('.slideSpace').ferroSlider()
  $('#font_sizer_header a').fontSizer()
  $('#radmenu').radmenu {
    radius: 140,
    centerX: 200,
    centerY: 200,
  }
  $("#radmenu").radmenu("show")
  $('#jpages_holder').jPages {
    containerID: 'foo'
  }
  $('#roundabout').roundabout()
  $('#roundabout_prev').click -> trun('prev')
  $('#roundabout_next').click -> trun('next')
