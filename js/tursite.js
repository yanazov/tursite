var current_slide = 1;
var next_slide = 1;
var opacity_current = 1;
var opacity_next = 0;
var arrow = 0;
var current_hot = 1;
var current_icon = 1;
var step_slider = 0.05;
var current_step = 0;

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
}
	
function js_main_slide(arrow){
	
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
			return 0;
		}
		if(opacity_next < 1){
			var slider_timer= setTimeout(function() {js_main_slide(arrow)});
		}
	}
	if(arrow == "next"){
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
			return 0;
		}
		if(opacity_next < 1){
			var slider_timer= setTimeout(function() {js_main_slide(arrow)});
		}
	}
}

function js_hot_next(){
	if(document.body.clientWidth < 550){
		if(current_step == 0){
			current_hot += 1;
		}
		current_step += step_slider;
		if(current_step >= 1){
			clearTimeout(slider_timer);
			current_step = 0;
			return 0;
		}
		for(i= 1; i < 5; i++){
			document.getElementById("hot-unit"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("hot-unit"+i).style.position = "absolute"; 
			if(i-current_hot > -1){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot + 1 - current_step) + "px";   
			}
			if(i-current_hot < -1){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot + 1 - current_step) + 247*4 + "px";   
			}
		}
		if(current_hot > 3){
			current_hot = 0;
		}
		if(current_step < 1){
			var slider_timer= setTimeout(function() {js_hot_next()});
		}
	}
}
function js_hot_prev(){
	if(document.body.clientWidth < 550){
		current_hot -= 1;
		for(i= 1; i < 5; i++){
			document.getElementById("hot-unit"+i).style.display = "block";   /* b-width 268px   */
			document.getElementById("hot-unit"+i).style.position = "absolute"; 
			if(i-current_hot > -1){
				document.getElementById("hot-unit"+i).style.left = -242*1.5 + document.body.clientWidth/2 + 247*(i-current_hot) + "px";   
			}
			if(i-current_hot > 3){
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
}