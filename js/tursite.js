var current_slide = 1;
var next_slide = 1;
var opacity_current = 1;
var opacity_next = 0;
	
function js_main_slide(arrow){
	
	if(arrow == "prev"){
		
	
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
			return 0;
		}
		if(opacity_next < 1){
			var slider_timer= setTimeout(function() {js_main_slide(arrow)});
		}
		
	}
	
}


