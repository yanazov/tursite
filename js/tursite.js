var current_slide = 1;
var next_slide = 1;
var opacity_current = 1;
var opacity_next = 0;
var arrow = 0;
var current_hot = 1;
var current_icon = 1;
var step_slider = 0.05;
var current_step = 0;
var galery_status = "close";
var galery_namber_elem = 0;
var img = new Image();

/*  document.location.href='http://anekdot.ru';  */

window.onload = function() {	
/*   *************************            для IE     ********************************               */
	if(document.getElementsByClassName == undefined) { 
	   document.getElementsByClassName = function(cl) { 
		  var retnode = []; 
		  var myclass = new RegExp('\\b'+cl+'\\b'); 
		  var elem = this.getElementsByTagName('*'); 
		  for (var i = 0; i < elem.length; i++) { 
			 var classes = elem[i].className; 
			 if (myclass.test(classes)) { 
				retnode.push(elem[i]); 
			 } 
		  } 
		  return retnode; 
	   } 
	}; 
/* **********************************************************************************                */
	if(document.getElementById("name_page").innerHTML == "main"){
		if(document.body.clientWidth < 550){
			for(i= 1; i < 4; i++){
				document.getElementById("hot-unit"+i).style.display = "block";   /* b-width 268px   */
				document.getElementById("hot-unit"+i).style.position = "absolute";  
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-1) + "px";   
			}
			for(i= 1; i < 7; i++){
				document.getElementById("icon"+i).style.display = "block";   /* b-width 268px   */
				document.getElementById("icon"+i).style.position = "absolute";  
				document.getElementById("icon"+i).style.top = 0 + "px";  
				document.getElementById("icon"+i).style.left = -162*1.5 + document.body.clientWidth/2 + 147*(i-1) + "px";   
			}
		}
		document.getElementById("b-map-feedback").style.opacity = 1;
	}
	if(document.getElementById("name_page").innerHTML == "tour"){
		var n = document.getElementsByClassName('details__shedule__column1__decor').length;
		for(i = 0; i < n-1; i++){
			var tmp_height = parseInt(document.getElementsByClassName('details__shedule__column2')[i+1].offsetHeight);
			document.getElementsByClassName('details__shedule__column1__decor')[i].style.height = tmp_height - 25 + "px";
		}
	}
	document.getElementsByClassName('b-tour__b-galery')[0].style.opacity = 0;
	window.onresize();
}
window.onresize = function() {
	if(document.getElementById("name_page").innerHTML == "tour"){
		current_width = document.body.clientWidth;
		if(current_width > 1260)
			current_width = 1260;
		document.getElementById("galery__body").style.width = current_width - 110 + "px";
		
		var n = parseInt((current_width - 110)/(200));
		var elem_width = parseInt((current_width - 110)/n - 10);
		var number_elem = document.getElementsByClassName('b-tour__b-galery__body__elem').length;
		for(i = 0; i < number_elem; i++){
			document.getElementsByClassName('b-tour__b-galery__body__elem')[i].style.width = elem_width + "px";
		}
		sort_block();
		img = document.getElementById('galery_popup_img');
		document.getElementById('galery_popup').style.height = windowHeight () + "px";	
		var scale = 1;
		if(img.naturalWidth > document.body.clientWidth*0.8){
			scale = document.body.clientWidth*0.8/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*0.8){
			scale = windowHeight()*0.8/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 - 8 + "px";
		img.style.top = (windowHeight() - img.naturalHeight*scale)/2 + "px";
		document.getElementById('galery__prev').style.top = windowHeight()/2 - 15 + "px";
		document.getElementById('galery__next').style.top = windowHeight()/2 - 15 + "px";
	}
}
function sort_block(){
	
			$('#galery__body').masonry({ // выбираем элемент-контейнер в котором расположены блоки для динамической верстки
				itemSelector: '.b-tour__b-galery__body__elem', // указываем класс элемента являющегося блоком в нашей сетке
				singleMode: true, // true - если у вас все блоки одинаковой ширины
				resizeable: true, // перестраивает блоки при изменении размеров окна
				isAnimated: true, // анимируем перестроение блоков при помощи css transitions и Modernizr
				// анимируем перестроение блоков
				animationOptions: { 
					queue: false, 
					duration: 500 
				}
				// опции анимации - очередь и продолжительность анимации
			}); 
		
}

window.onscroll = function ()
{
	var B = document.body, 
		DE = document.documentElement,
		O = Math.min (B.clientHeight, DE.clientHeight); if (!O) O = B.clientHeight;
	var S = Math.max (B.scrollTop, DE.scrollTop),
		C = Math.max (B.scrollHeight, DE.scrollHeight);
	if (O + S == C){   /* пришли в низ   */
		document.getElementById("btn-up").style.display = "block";
		
	}
}	
function js_scroll_up(){
	$("html, body").animate({scrollTop:0},"slow");
	
}
function js_open_search(){
	document.getElementById("open_search").style.display = "block";
	document.getElementById("mini_search").style.display = "none";
}
function js_close_search(){
	document.getElementById("open_search").style.display = "none";
	document.getElementById("mini_search").style.display = "block";
}
function js_main_slide(arrow){
	for(i = 1; i < 5; i++){
		document.getElementById("slider_point"+i).style.backgroundColor = "#fff";
	}
	if(arrow == "prev"){
		next_slide = current_slide - 1;
		if(next_slide < 1)
			next_slide = 4;
		opacity_current -= 0.03;
		if(opacity_current < 0.5){
			opacity_current = 0; 
			opacity_next += 0.02;
		}
		document.getElementById("slide"+current_slide).style.opacity = opacity_current;		
		document.getElementById("slide"+next_slide).style.opacity = opacity_next;		
	/*document.getElementById("slide"+main_slide).style.opacity = 1;*/
		if(opacity_next > 1){
			current_slide -= 1;
			opacity_current = 1;
			opacity_next = 0;
			if(current_slide < 1){
				current_slide = 4;
			}
			document.getElementById("slider_point"+current_slide).style.backgroundColor = "#ffd200";
			return 0;
		}
		if(opacity_next < 1){
			var slider_timer= setTimeout(function() {js_main_slide(arrow)});
		}
	}
	if(arrow == "next"){
		next_slide = current_slide + 1;
		if(next_slide > 4)
			next_slide = 1;
		opacity_current -= 0.03;
		if(opacity_current < 0.5){
			opacity_current = 0; 
			opacity_next += 0.02;
		}
		document.getElementById("slide"+current_slide).style.opacity = opacity_current;		
		document.getElementById("slide"+next_slide).style.opacity = opacity_next;
	/*	document.getElementById("slide"+main_slide).style.opacity = 1;*/
		if(opacity_next > 1){
			current_slide += 1;
			opacity_current = 1;
			opacity_next = 0;
			if(current_slide > 4){
				current_slide = 1;
			}
			document.getElementById("slider_point"+current_slide).style.backgroundColor = "#ffd200";
			return 0;
		}
		if(opacity_next < 1){
			var slider_timer= setTimeout(function() {js_main_slide(arrow)});
		}
	}
}

function js_hot_next(){
	if(document.body.clientWidth < 550){
		current_hot += 1;
		for(i= 1; i < 5; i++){
			document.getElementById("hot-unit"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("hot-unit"+i).style.position = "absolute"; 
			if(i-current_hot > -5){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot) + "px";   
			}
			if(i-current_hot < 0){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot) + 247*4 + "px";   
			}
		}
		if(current_hot > 3){
			current_hot = 0;
		}
	}
}
function js_hot_prev(){
	if(document.body.clientWidth < 550){
		current_hot -= 1;
		for(i= 1; i < 5; i++){
			document.getElementById("hot-unit"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("hot-unit"+i).style.position = "absolute"; 
			if(i-current_hot > -4){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot) + "px";   
			}
			if(i-current_hot > 2){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot) - 247*4 + "px";   
			}
		}
		if(current_hot < 0){
			current_hot = 3;
		}
	}
}

function js_icon_next(){
	if(document.body.clientWidth < 550){
		current_icon += 1;
		for(i= 1; i < 7; i++){
			document.getElementById("icon"+i).style.display = "block";   
			document.getElementById("icon"+i).style.position = "absolute"; 
			if(i-current_icon > -1){
				document.getElementById("icon"+i).style.left = -162*1.5 + document.body.clientWidth/2 + 147*(i-current_icon) + "px";   
			}
			if(i-current_icon < 0){
				document.getElementById("icon"+i).style.left = -162*1.5 + document.body.clientWidth/2 + 147*(i-current_icon) + 147*6 + "px";   
			}
		}
		if(current_icon > 5){
			current_icon = 0;
		}
	}
	if(document.body.clientWidth > 550){
		current_step += step_slider;
		for(i= 1; i < 7; i++){
			document.getElementById("icon"+i).style.display = "block";   
			document.getElementById("icon"+i).style.position = "absolute"; 
			document.getElementById("icon"+i).style.top = 0 + "px"; 
			if(i-current_icon > -1){
				document.getElementById("icon"+i).style.left =  193*(i-current_icon - current_step) + "px";   
			}
			if(i-current_icon < 1){
				document.getElementById("icon"+i).style.left = 193*(i-current_icon - current_step) + 193*6 + "px";   
			}
		}
		if(current_icon > 5){
			current_icon = 0;
		}
		if(current_step >= 1){
			clearTimeout(slider_timer);
			current_step = 0;
			current_icon += 1;
			return 0;
		}
		if(current_step < 1){
			var slider_timer= setTimeout(function() {js_icon_next()});
		}
		
	}
}
function js_icon_prev(){
	if(document.body.clientWidth < 550){
		current_icon -= 1;
		for(i= 1; i < 7; i++){
			document.getElementById("icon"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("icon"+i).style.position = "absolute"; 
			if(i-current_icon > -6){
				document.getElementById("icon"+i).style.left = -162*1.5 + document.body.clientWidth/2 + 147*(i-current_icon) + "px";   
			}
			if(i-current_icon > 5){
				document.getElementById("icon"+i).style.left = -162*1.5 + document.body.clientWidth/2 + 147*(i-current_icon) - 147*6 + "px";   
			}
		}
		if(current_icon < 0){
			current_icon = 5;
		}
	}
	if(document.body.clientWidth > 550){
		current_step -= step_slider;
		for(i= 1; i < 7; i++){
			document.getElementById("icon"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("icon"+i).style.position = "absolute"; 
			document.getElementById("icon"+i).style.top = 0 + "px"; 
			if(i-current_icon > -6){
				document.getElementById("icon"+i).style.left = 193*(i-current_icon - current_step) + "px";   
			}
			if(i-current_icon > 4){
				document.getElementById("icon"+i).style.left = 193*(i-current_icon - current_step) - 193*6 + "px";   
			}
		}
		if(current_icon < 1){
			current_icon = 3;
		}
		if(current_step <= -1){
			clearTimeout(slider_timer);
			current_step = 0;
			current_icon -= 1;
			return 0;
		}
		if(current_step > -1){
			var slider_timer= setTimeout(function() {js_icon_prev()});
		}
	}
}
function js_map_open(){	
	if(document.body.clientWidth < 550){
		document.getElementById("map__online").style.zIndex = 100;
		document.getElementById("b-map__to-contact").style.display = "block";
		return 0;
	}
	if(document.body.clientWidth > 550){
		var map_opacity = parseFloat(document.getElementById("b-map-feedback").style.opacity);
		map_opacity -= .05;
		document.getElementById("b-map-feedback").style.opacity = map_opacity;
		if(map_opacity <= 0){
			document.getElementById("b-map-feedback").style.display = "none";
			document.getElementById("b-map__to-contact").style.display = "block";
			return 0;
		}
		var timer= setTimeout(function() {js_map_open()});	
	}
}
function js_map_close(){
	if(document.body.clientWidth < 550){
		document.getElementById("map__online").style.zIndex = 0;
		document.getElementById("b-map__to-contact").style.display = "none";
		return 0;
	}
	if(document.body.clientWidth > 550){
		document.getElementById("b-map-feedback").style.display = "block";
		var map_opacity = parseFloat(document.getElementById("b-map-feedback").style.opacity);
		map_opacity += .05;
		document.getElementById("b-map-feedback").style.opacity = map_opacity;
		if(map_opacity >= 1){
			document.getElementById("b-map__to-contact").style.display = "none";
			return 0;
		}
		var timer= setTimeout(function() {js_map_close()});	
	}
}
function js_galery_on_off(){
	if(galery_status == "close"){
		document.getElementsByClassName('b-tour__b-galery')[0].style.zIndex = 3;
		opacity = parseFloat(document.getElementsByClassName('b-tour__b-galery')[0].style.opacity);
		document.getElementsByClassName('b-tour__b-galery')[0].style.opacity = opacity + 0.1;
		if(opacity+0.1 >= 1){
			galery_status = "open";
			document.getElementsByClassName('b-tour__b-galery')[0].style.opacity = 1;
			document.getElementById("btn_galery_icon").style.backgroundPosition = "2px -800px";
			document.getElementsByClassName('b-tour__b-galery__scroll')[0].style.overflowY = "scroll";
			window.onresize();
			return 0;
		}
		var id_timer = setTimeout("js_galery_on_off()", 50);		
	}
	if(galery_status == "open"){		
		opacity = parseFloat(document.getElementsByClassName('b-tour__b-galery')[0].style.opacity);
		document.getElementsByClassName('b-tour__b-galery')[0].style.opacity = opacity - 0.1;
		if(opacity-0.11 <= 0){
			galery_status = "close";
			document.getElementsByClassName('b-tour__b-galery')[0].style.opacity = 0;
			document.getElementById("btn_galery_icon").style.backgroundPosition = "0px -700px";
			document.getElementsByClassName('b-tour__b-galery')[0].style.zIndex = 1;
			document.getElementsByClassName('b-tour__b-galery__scroll')[0].style.overflowY = "hidden";
			window.onresize();
			
			return 0;
		}
		var id_timer = setTimeout("js_galery_on_off()", 50);		
	}
}
function windowHeight() {
	var wh = document.documentElement;
	return self.innerHeight || (wh && wh.clientHeight) || document.body.clientHeight;
}
function windowWidth() {
	var ww = document.documentElement;
	return self.innerWidth || (ww && ww.clientWidth) || document.body.clientWidth;
}
function js_open_foto(t){
	galery_namber_elem = $('.b-tour__b-galery__body__elem').index(t);  
	document.getElementById('galery_popup').style.display = "block";
	document.getElementById('galery_popup').style.height = windowHeight () + "px";	
	document.body.style.overflowY = "hidden";
	document.body.style.paddingRight = 18 + "px";
	
	img = document.getElementById('galery_popup_img');
	img.style.opacity = 0;
	var tmp_str = t.firstElementChild.src;
	var name_pic = find_name(tmp_str);
	img.src = "galery/" + name_pic;
	img.style.display = "block";
	img.onload = function(){
		var scale = 1;
		if(img.naturalWidth > document.body.clientWidth*0.8){
			scale = document.body.clientWidth*0.8/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*0.8){
			scale = windowHeight()*0.8/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 - 8 + "px";
		img.style.top = (windowHeight() - img.naturalHeight*scale)/2 + "px";
		img.style.opacity = 1;
		document.getElementById('galery__prev').style.top = windowHeight()/2 - 15 + "px";
		document.getElementById('galery__next').style.top = windowHeight()/2 - 15 + "px";
	}
}
function js_galery_next(){
	galery_namber_elem += 1;
	if(galery_namber_elem > document.getElementsByClassName('b-tour__b-galery__body__elem').length - 1){
		galery_namber_elem = 0;	
	}
	var t = document.getElementsByClassName("b-tour__b-galery__body__elem")[galery_namber_elem];
	var tmp_str = t.firstElementChild.src;
	var name_pic = find_name(tmp_str);
	img.src = "galery/" + name_pic;
	img.onload = function(){
		var scale = 1;
		if(img.naturalWidth > document.body.clientWidth*0.8){
			scale = document.body.clientWidth*0.8/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*0.8){
			scale = windowHeight()*0.8/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 - 8 + "px";
		img.style.top = (windowHeight() - img.naturalHeight*scale)/2 + "px";
	}
}
function js_close_foto(event){
	event = event || window.event
	var t = event.target || event.srcElement
	  
	if(t.id == "galery_popup" || t.id == "galery__close" || t.id =="galery__close__icon"){
		document.body.style.overflowY = "";
		document.body.style.paddingRight = 0 + "px";
		document.getElementById('galery_popup').style.display = "none";
	/*	document.getElementsByClassName("pop_up")[0].style.display = "none";*/
	}
}
function find_name(tmp_str){
	var  start_name = 0;
	var length_str = tmp_str.length;
	for(i = length_str; i > 0; i--){
		if(tmp_str[i] == "/"){
			start_name = i+3;
			i = 0;
		}
	}
	var name = tmp_str.substring(start_name);
	return name;
}
function js_galery_prev(){
	galery_namber_elem -= 1;
	if(galery_namber_elem < 0){
		galery_namber_elem = document.getElementsByClassName('b-tour__b-galery__body__elem').length - 1;	
	}
	var t = document.getElementsByClassName("b-tour__b-galery__body__elem")[galery_namber_elem];
	var tmp_str = t.firstElementChild.src;
	var name_pic = find_name(tmp_str);
	img.src = "galery/" + name_pic;
	img.onload = function(){
		var scale = 1;
		if(img.naturalWidth > document.body.clientWidth*0.8){
			scale = document.body.clientWidth*0.8/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*0.8){
			scale = windowHeight()*0.8/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 - 8 + "px";
		img.style.top = (windowHeight() - img.naturalHeight*scale)/2 + "px";
	}
}
function js_galery_dwn(){
/*	$("html, body").animate({scrollTop:0},"slow");*/
/*	var block = document.getElementsByClassName("b-tour__b-galery__scroll")[0];
	var tmp_scroll = block.scrollTop + 300;
/*	block.scrollTop = tmp_scroll;*/
/*	$("#b-galery__scroll").animate({scrollTop:300},"slow");*/
	document.getElementsByClassName("b-tour__b-galery__scroll")[0].scrollTop = 300;
}
function js_galery_up(){
	var block = document.getElementsByClassName("b-tour__b-galery__scroll")[0];
	var tmp_scroll = block.scrollTop - 300;
	$(".b-tour__b-galery__scroll").animate({scrollTop:tmp_scroll},"slow");
}
