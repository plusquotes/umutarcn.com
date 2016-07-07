

jQuery(document).ready(function() {
	jQuery("body").append("<div class='demo-settings'></div>");
	jQuery(".demo-settings").append("<a href='#show-settings' class='demo-button'><i class='fa fa-gear'></i>Settings</a>");
	jQuery(".demo-settings").append("<div class='demo-options'>"+
										"<div class='title'>Demo Settings</div>"+
										"<a href='#demo' rel='font-options' class='option'><img src='images/demo/image-1.png' class='demo-icon' alt='' /><span>Font Settings</span><font>Change Fonts</font></a>"+
										"<div class='option-box' rel='font-options'>"+
											"<div alt='font-options'>"+
												"<b class='sub-title'>Titles & Menu Font</b>"+
												"<a href='#' class='font-bulb active' style='font-family:\"Titillium Web\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Source Sans Pro\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Alegreya Sans SC\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Ruda\", sans-serif;'>Aa</a>"+
												"<a href='#' class='font-bulb' style='font-family:\"Marvel\", sans-serif;'>Aa</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='color-options' class='option'><img src='images/demo/image-2.png' class='demo-icon' alt='' /><span>Color Options</span><font>Color schemes</font></a>"+
										"<div class='option-box' rel='color-options'>"+
											"<div alt='color-options'>"+
												"<b class='sub-title'>Main Color Scheme</b>"+
												"<a href='#' class='color-bulb active' style='background: #F05C37;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #7EAC22;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #65615c;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #B1436F;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #593972;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<div class='option-box sequal' rel='color-options'>"+
											"<div alt='footer-colors'>"+
												"<b class='sub-title'>Footer Color</b>"+
												"<a href='#' class='color-bulb active' style='background: #282828;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #332B25;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #5D6A6B;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #70516A;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: #39643E;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='background' class='option'><img src='images/demo/image-3.png' class='demo-icon' alt='' /><span>Background</span><font>Backgorund textures</font></a>"+
										"<div class='option-box' rel='background'>"+
											"<div alt='background'>"+
												"<b class='sub-title'>Background Texture</b>"+
												"<a href='#' class='color-bulb active' style='background: url(images/background-1.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-3.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-1.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-2.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-4.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background: url(images/background-texture-5.jpg);'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-1.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-2.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-3.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
												"<a href='#' class='color-bulb' style='background-image: url(images/background-photo-4.jpg);background-size: 100%; background-attachment: fixed;'>&nbsp;</a>"+
											"</div>"+
										"</div>"+
										"<a href='#demo' rel='page-width' class='option'><img src='images/demo/image-4.png' class='demo-icon' alt='' /><span>Change Width</span><font>Boxed or Full-Width</font></a>"+
										"<div class='option-box' rel='page-width'>"+
											"<div alt='option-box'>"+
												"<b class='sub-title'>Switch Page Width</b>"+
												"<a href='#' class='option-bulb' rel='full'>Full-Width</a>"+
												"<a href='#' class='option-bulb active' rel='boxed'>Boxed-Width</a>"+
											"</div>"+
										"</div>"+
									"</div>");
	
	jQuery(".demo-settings a[href=#demo]").click(function(){
		var thiselem = jQuery(this);
		if(thiselem.parent().find("div[rel="+thiselem.attr("rel")+"]").hasClass("thisis") == false){
			thiselem.parent().find("div.thisis").removeClass("thisis").animate({
				height: 'toggle',
				paddingTop: 'toggle',
				opacity: 'toggle'
			}, 150);
		}
		thiselem.parent().find("div[rel="+thiselem.attr("rel")+"]").toggleClass("thisis").animate({
			height: 'toggle',
			paddingTop: 'toggle',
			opacity: 'toggle'
		}, 150);
		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background-color");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "color-options"){
			jQuery(".main-menu > ul > li > ul, .ot-menu-toggle, #writecomment p input[type=submit], .tag-cloud-body a, .big-message h2, .breaking-news .breaking-title, .header .header-right, div:not(.footer) .widget .tagcloud a, #sidebar .widget > .ot-tabbed").css("background-color", newcolor);
			jQuery(".small-sidebar .widget > h3").css("color", newcolor).css("border-bottom", "3px solid "+newcolor);
			jQuery("div:not(.footer) .read-more-link, .widget .article-block .item-content > span a, .tag-cloud-body a").css("color", newcolor);
			jQuery("#sidebar .widget > h3").css("border-left", "3px solid "+newcolor);
			jQuery(".main-title").css("border-left", "4px solid "+newcolor);
			jQuery("#writecomment").css("border-top", "3px solid "+newcolor);
		}else
		if(thiselem.parent().attr("alt") == "footer-colors"){
			jQuery(".footer").css("background-color", newcolor);
		}

		return false;
	});
	
	jQuery(".option-box div .color-bulb").click(function(){
		var thiselem = jQuery(this);
		var newcolor = thiselem.css("background-image");
		var newcolor_1 = thiselem.css("background-position");
		var newcolor_2 = thiselem.css("background-repeat");
		var newcolor_3 = thiselem.css("background-attachment");
		var newcolor_4 = thiselem.css("background-origin");
		var newcolor_5 = thiselem.css("background-clip");
		var newcolor_6 = thiselem.css("background-color");
		var newcolor_7 = thiselem.css("background-size");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "background"){
			jQuery(".dat-menu-container").css("background-image", newcolor).css("background-position", newcolor_1).css("background-repeat", newcolor_2).css("background-attachment", newcolor_3).css("background-origin", newcolor_4).css("background-clip", newcolor_5).css("background-color", newcolor_6).css("background-size", newcolor_7);
		}

		return false;
	});
	
	jQuery(".option-box div .font-bulb").click(function(){
		var thiselem = jQuery(this);
		var newfont = thiselem.css("font-family");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "font-options"){
			jQuery("body").css("font-family", newfont);
		}

		return false;
	});
	
	jQuery(".option-box div .option-bulb").click(function(){
		var thiselem = jQuery(this);
		var newsize = thiselem.attr("rel");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "option-box"){
			if(newsize == "boxed"){
				jQuery(".boxed").addClass("active").removeClass("width1000");
			}else
			if(newsize == "full"){
				jQuery(".boxed").removeClass("active").removeClass("width1000");
			}else
			if(newsize == "1000px"){
				jQuery(".boxed").addClass("active").addClass("width1000");
			}
		}

		return false;
	});
	
	jQuery(".option-box div .header-bulb, .option-box div .option-bulb").click(function(){
		var thiselem = jQuery(this);
		var newsize = thiselem.attr("rel");
		thiselem.siblings().removeClass("active");
		thiselem.addClass("active");

		if(thiselem.parent().attr("alt") == "header-box"){
			if(newsize == "style-1"){
				jQuery(".wraphead").fadeOut(function(){
					jQuery(".wraphead").removeClass("header-2-content").addClass("header-1-content").fadeIn();
				});
			}else
			if(newsize == "style-2"){
				jQuery(".wraphead").fadeOut(function(){
					jQuery(".wraphead").removeClass("header-1-content").addClass("header-2-content").fadeIn();
				});
			}
		}

		if(thiselem.parent().attr("alt") == "menu-box"){
			if(newsize == "single"){
				jQuery("#top-sub-menu").animate({
					height: 0,
					opacity: 0
				}, 180);
			}else
			if(newsize == "double"){
				jQuery("#top-sub-menu").animate({
					height: 44,
					opacity: 1
				}, 180);
			}
		}

		return false;
	});

	var leavetime = '';
	
	jQuery(".demo-settings").mouseleave(function(){
		var thiselem = jQuery(this);
		leavetime = setTimeout(function(){
			thiselem.removeClass("active");
		}, 600);
		return false;
	});
	
	jQuery(".demo-settings").mouseover(function(){
		clearTimeout(leavetime);
		return false;
	});
	
	jQuery(".demo-settings .demo-button").click(function(){
		jQuery(".demo-settings").addClass("active");
		return false;
	});
});

