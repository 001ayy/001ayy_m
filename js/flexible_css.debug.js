(function() {
	// flexible.css
	var cssText = "" +
		"@charset \"utf-8\";*{box-sizing:border-box;-webkit-box-sizing:border-box;outline:0 none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%}html,body{height:100%}body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,pre,form,fieldset,legend,input,textarea,optgroup,p,blockquote,figure,hr,menu,dir,thead,tbody,tfoot,th,td{margin:0;padding:0}ul,ol{list-style-type:none;list-style-image:none}img{width:100%;max-width:100%;height:auto;display:block;border:0;margin:0 auto}body{font-family:\"microsoft yahei\"}h1,h2,h3,h4,h5,h6{font-style:normal;font-weight:normal}input,select,textarea{font-size:100%}em,i{font-style:normal}a{color:#4664a0;text-decoration:none}a:active{background-color:transparent}a:hover{color:#4664a0;text-decoration:none}table{border-collapse:collapse;border-spacing:0}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance: button;};"
	// cssText end

	var styleEl = document.createElement("style");
	document.getElementsByTagName("head")[0].appendChild(styleEl);
	if (styleEl.styleSheet) {
		if (!styleEl.styleSheet.disabled) {
			styleEl.styleSheet.cssText = cssText;
		}
	} else {
		try {
			styleEl.innerHTML = cssText
		} catch (e) {
			styleEl.innerText = cssText;
		}
	}
}());