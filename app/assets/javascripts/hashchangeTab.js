/*--------------------------------------------------------------------------*
 *  
 *  hashchangeTab jQuery Plugin 1.0
 *  
 *  MIT-style license. 
 *  
 *  November 9th , 2011 Written by Keita Mori @ Ajike inc. http://www.ajike.co.jp/
 *  
 *--------------------------------------------------------------------------*/

(function($){
    $.fn.hashchangeTab=function(options){
	var defaults={
		nav:'#nav ul li',		//ナビ要素を指定
		currentNav:'current',		//ナビ要素のカレントクラス
		tabs:['#tab01', '#tab02'],	//タブ要素を指定
		fxType:'fade',				//エフェクトの種類 none|fade|toggle|slideDown
		fxSpeed:'1500',				//エフェクトのスピード slow|normal|fast|ミリ秒　
		firstShowFx:false			//ページを開いた際、エフェクト付きでタブ部分を表示するか　

	}
	var settings=$.extend({}, defaults, options);
    var o=settings;
	var index;
	var selectedTab;
	var currentTab;
	var cElement
	
	for ( var i = 0, l = o.tabs.length; i < l; i++ ) {
		var element = o.tabs[i];

		//一旦、タブを全て非表示に
		$(element).hide();
		
		//hashに一致するタブのインデックスを取得
		if(window.location.hash == element) {index = i;}
	}

	var selectedTab = window.location.hash;

	//hashが無い場合は最初のタブを選択
	index = index ? index : 0;
	selectedTab = selectedTab ? selectedTab : o.tabs[0];
	
	//取得したインデックスでタブをセレクト
	if(o.firstShowFx){ var effect = o.fxType;}else{ var effect = 'none';}
	switch (effect){
		case 'none' 	: $(selectedTab).show();break;
		case 'fade'		: $(selectedTab).fadeIn(o.fxSpeed);break;
		case 'toggle'	: $(selectedTab).toggle(o.fxSpeed);break;
		case 'slideDown'	: $(selectedTab).slideDown(o.fxSpeed);break;
	}
	cElement = o.nav + ':eq(' + index +')';
	$(cElement).addClass(o.currentNav);

	$(o.nav).find('a').click(function(){
		window.location.hash = $(this).attr("rel");
	});

	$(window).hashchange(function(){

    	//現在のhashからインデックスの値を取得
    	for ( var i = 0, l = o.tabs.length; i < l; i++ ) {
			var element = o.tabs[i];
			//hashに一致するタブのインデックスを取得
			if(window.location.hash == element) {index = i;}

		}
    	//hashが無い場合は最初のタブを選択
   		index = index ? index : 0;
		//取得したインデックスでタブをセレクト
		cElement = $(o.nav).parent().find("." + o.currentNav);
		currentTab = cElement.find('a').attr("rel");
		$(currentTab).hide();
		cElement.removeClass(o.currentNav);
		switch (o.fxType){
			case 'none' 	: $(o.tabs[index]).show();break;
			case 'fade'		: $(o.tabs[index]).fadeIn(o.fxSpeed);break;
			case 'toggle'	: $(o.tabs[index]).toggle(o.fxSpeed);break;
			case 'slideDown'	: $(o.tabs[index]).slideDown(o.fxSpeed);break;
		}			
		$(o.nav).eq(index).addClass(o.currentNav);
	});
	}
})(jQuery);
