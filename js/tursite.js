var current_slide = 1;
var next_slide = 1;
var opacity_current = 1;
var opacity_next = 0;
var arrow = 0;
var current_hot = 1;
var current_icon = 1;
var step_slider = 0.05;
var current_step = 0;

/*  document.location.href='http://anekdot.ru';  */

window.onload = function() {
	if(document.body.clientWidth < 550){
		for(i= 1; i < 4; i++){
			document.getElementById("hot-unit"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("hot-unit"+i).style.position = "absolute";  
			document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-1) + "px";   
		}
		for(i= 1; i < 6; i++){
			document.getElementById("icon"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("icon"+i).style.position = "absolute";  
			document.getElementById("icon"+i).style.top = 0 + "px";  
			document.getElementById("icon"+i).style.left = -162*1.5 + document.body.clientWidth/2 + 147*(i-1) + "px";   
		}
		
		
	}
	document.getElementById("b-map-feedback").style.opacity = 1;
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
function js_map_close(){	
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