/*
	移动端布局rem
	设置元素width height 采用rem
*/
(function(win,doc){
	var docEl = doc.documentElement;
	var scripts = doc.querySelector('script[data-design]');
	var designWidth = scripts ? ~~(scripts.dataset.design):750;
	
	var fontEl = doc.createElement('style');
	var dpr = 1;
	var scale = 1 / dpr;
	var rem = 100 * (docEl.clientWidth / designWidth);
	if(!doc.querySelector('meta[name="viewport"]')){
		var metaEl = document.createElement("meta");
		metaEl.setAttribute('name','viewport');
		// 设置viewport
		metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale +', user-scalable=no');
		docEl.firstElementChild.appendChild(metaEl);
	}
	docEl.firstElementChild.appendChild(fontEl);
	var resizeEvt = ('orientationchange' in window) ? 'orientationchange' : 'resize';
	var recalc = function () {
        rem = 100 * (docEl.clientWidth/designWidth);
        fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
    }
    win.addEventListener(resizeEvt,recalc,false);
    recalc();	
})(window,document)