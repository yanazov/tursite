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
var id_data_number;

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
		document.getElementsByClassName('b-tour__b-galery')[0].style.opacity = 0;
	}
	if(document.getElementById("name_page").innerHTML == "avia_in"){
		t=setTimeout('startTime()',10);
	}
	if(document.getElementById("name_page").innerHTML == "hotels_in"){
		var elem_length = document.getElementsByClassName('b-hotels-in__coment-elem_b-detail').length;
		for(i = 0; i <elem_length; i++ ){	
			var end_rating = 0;
			var valuation = parseInt(document.getElementsByClassName('coment-rating-place-number')[i].innerHTML);
			end_rating += valuation/6;
			document.getElementsByClassName('coment-rating-place-color')[i].style.width = 19 * valuation + 'px';
			if(valuation < 3){
				document.getElementsByClassName('coment-rating-place-color')[i].style.backgroundColor = "#ffd200";
			}
			if(valuation == 3){
				document.getElementsByClassName('coment-rating-place-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(valuation > 3){
				document.getElementsByClassName('coment-rating-place-color')[i].style.backgroundColor = "#00adc7";
			}
			var valuation = parseInt(document.getElementsByClassName('coment-rating-service-number')[i].innerHTML);
			end_rating += valuation/6;
			document.getElementsByClassName('coment-rating-service-color')[i].style.width = 19 * valuation + 'px';
			if(valuation < 3){
				document.getElementsByClassName('coment-rating-service-color')[i].style.backgroundColor = "#ffd200";
			}
			if(valuation == 3){
				document.getElementsByClassName('coment-rating-service-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(valuation > 3){
				document.getElementsByClassName('coment-rating-service-color')[i].style.backgroundColor = "#00adc7";
			}
			var valuation = parseInt(document.getElementsByClassName('coment-rating-room-number')[i].innerHTML);
			end_rating += valuation/6;
			document.getElementsByClassName('coment-rating-room-color')[i].style.width = 19 * valuation + 'px';
			if(valuation < 3){
				document.getElementsByClassName('coment-rating-room-color')[i].style.backgroundColor = "#ffd200";
			}
			if(valuation == 3){
				document.getElementsByClassName('coment-rating-room-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(valuation > 3){
				document.getElementsByClassName('coment-rating-room-color')[i].style.backgroundColor = "#00adc7";
			}
			var valuation = parseInt(document.getElementsByClassName('coment-rating-fun-number')[i].innerHTML);
			end_rating += valuation/6;
			document.getElementsByClassName('coment-rating-fun-color')[i].style.width = 19 * valuation + 'px';
			if(valuation < 3){
				document.getElementsByClassName('coment-rating-fun-color')[i].style.backgroundColor = "#ffd200";
			}
			if(valuation == 3){
				document.getElementsByClassName('coment-rating-fun-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(valuation > 3){
				document.getElementsByClassName('coment-rating-fun-color')[i].style.backgroundColor = "#00adc7";
			}
			var valuation = parseInt(document.getElementsByClassName('coment-rating-food-number')[i].innerHTML);
			end_rating += valuation/6;
			document.getElementsByClassName('coment-rating-food-color')[i].style.width = 19 * valuation + 'px';
			if(valuation < 3){
				document.getElementsByClassName('coment-rating-food-color')[i].style.backgroundColor = "#ffd200";
			}
			if(valuation == 3){
				document.getElementsByClassName('coment-rating-food-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(valuation > 3){
				document.getElementsByClassName('coment-rating-food-color')[i].style.backgroundColor = "#00adc7";
			}
			var valuation = parseInt(document.getElementsByClassName('coment-rating-price-number')[i].innerHTML);
			end_rating += valuation/6;
			document.getElementsByClassName('coment-rating-price-color')[i].style.width = 19 * valuation + 'px';
			if(valuation < 3){
				document.getElementsByClassName('coment-rating-price-color')[i].style.backgroundColor = "#ffd200";
			}
			if(valuation == 3){
				document.getElementsByClassName('coment-rating-price-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(valuation > 3){
				document.getElementsByClassName('coment-rating-price-color')[i].style.backgroundColor = "#00adc7";
			}
			document.getElementsByClassName('coment-end-ratind')[i].innerHTML = end_rating.toFixed(1);
			document.getElementsByClassName('coment-end-rating-color')[i].style.width = 19 * end_rating + 'px';
			if(end_rating <= 2){
				document.getElementsByClassName('coment-end-rating-color')[i].style.backgroundColor = "#ffd200";
			}
			if((end_rating > 2) && (end_rating < 4)){
				document.getElementsByClassName('coment-end-rating-color')[i].style.backgroundColor = "#ff8a00";
			}
			if(end_rating >= 4){
				document.getElementsByClassName('coment-end-rating-color')[i].style.backgroundColor = "#00adc7";
			}
			
			
			
		}
		var tmp = 0;
	}
	if(document.getElementById("name_page").innerHTML == "counties_in"){
/* ================== begin timer ============================ */
		var image = document.getElementById("img"); 
		var image2 = document.getElementById("img2"); 
		var image_fon = document.getElementById("img_fon"); 
	 
		//создаем переменную под новую картинку
		img = new Image(); 
		img2 = new Image(); 
		img_fon = new Image(); 
		// url картинки
		img.src = image.src; 
		img2.src = image2.src; 
		img_fon.src = image_fon.src; 
	 
		// получаем canvas элемент
		var canvas = document.getElementById("rotate"); 
		var canvas2 = document.getElementById("rotate2"); 
		var canvas_fon = document.getElementById("rotate_fon"); 
	 
		// устанавливем размеры canvas элемента исходя из размеров самого изображения
		canvas.width  = image.width;
		canvas.height = image.height;
		canvas2.width  = image2.width;
		canvas2.height = image2.height;
		canvas_fon.width  = image_fon.width;
		canvas_fon.height = image_fon.height;
	 
		// создаем переменную для работы с canvas
		img.context = canvas.getContext("2d");
		img.canvas = canvas;
		img.radians = Math.PI/180; 
		
		img_fon.context = canvas_fon.getContext("2d");
		img_fon.canvas = canvas_fon;
		img_fon.radians = Math.PI/180; 
		
		img2.context = canvas2.getContext("2d");
		img2.canvas = canvas2;
		img2.radians = Math.PI/180; 
		//
		img.onload = function() {
			var _this = this;
			var _angle = 0;
	 
			// устанавливаем таймер
			var timer = setInterval(function() {
				// очищаем canvas
				_this.context.clearRect(0,0,_this.width, _this.height); 
				var hours = new Date().getHours();
				var minuts = new Date().getMinutes();
				_angle =6*minuts;
				// поварачиваем картинку и рисуем ее
				canvas_rotate.call(_this, _angle);
				document.getElementsByClassName("time-zone-city-value")[0].innerHTML = hours + ':' + minuts;
			}, 1000);
	 
		}
		img2.onload = function() {
			var _this = this;
			var _angle = 0;
	 
			// устанавливаем таймер
			var timer = setInterval(function() {
				// очищаем canvas
				_this.context.clearRect(0,0,_this.width, _this.height); 
				var hours = new Date().getHours();
				var minuts = new Date().getMinutes();
				_angle =30*(hours+1*(minuts/60));
				// поварачиваем картинку и рисуем ее
				canvas_rotate.call(_this, _angle);
				
			}, 1000);
	 
		}
		img_fon.onload = function() {
			var _this2 = this;
			var _angle2 = 0;
	 
			// устанавливаем таймер
			var timer_fon = setInterval(function() {
				// очищаем canvas
				_this2.context.clearRect(0,0,_this2.width, _this2.height); 
	 
				// поварачиваем картинку и рисуем ее
				canvas_rotate.call(_this2, _angle2);
				_angle2 +=0;
			}, 1000);
	 
		} 
/* =================== end timer ============================= */
/* ================== begin timer2 ============================ */
		var image_2 = document.getElementById("img_2"); 
		var image2_2 = document.getElementById("img2_2"); 
		var image_fon_2 = document.getElementById("img_fon_2"); 
	 
		//создаем переменную под новую картинку
		img_2 = new Image(); 
		img2_2 = new Image(); 
		img_fon_2 = new Image(); 
		// url картинки
		img_2.src = image_2.src; 
		img2_2.src = image2_2.src; 
		img_fon_2.src = image_fon_2.src; 
	 
		// получаем canvas элемент
		var canvas_2 = document.getElementById("rotate_2"); 
		var canvas2_2 = document.getElementById("rotate2_2"); 
		var canvas_fon_2 = document.getElementById("rotate_fon_2"); 
	 
		// устанавливем размеры canvas элемента исходя из размеров самого изображения
		canvas_2.width  = image_2.width;
		canvas_2.height = image_2.height;
		canvas2_2.width  = image2_2.width;
		canvas2_2.height = image2_2.height;
		canvas_fon_2.width  = image_fon_2.width;
		canvas_fon_2.height = image_fon_2.height;
	 
		// создаем переменную для работы с canvas
		img_2.context = canvas_2.getContext("2d");
		img_2.canvas = canvas_2;
		img_2.radians = Math.PI/180; 
		
		img_fon_2.context = canvas_fon_2.getContext("2d");
		img_fon_2.canvas = canvas_fon_2;
		img_fon_2.radians = Math.PI/180; 
		
		img2_2.context = canvas2_2.getContext("2d");
		img2_2.canvas = canvas2_2;
		img2_2.radians = Math.PI/180; 
		//
		img_2.onload = function() {
			var _this = this;
			var _angle = 0;
	 
			// устанавливаем таймер
			var timer = setInterval(function() {
				// очищаем canvas
				_this.context.clearRect(0,0,_this.width, _this.height); 
				var hours = new Date().getHours();
				var minuts = new Date().getMinutes();
				_angle =6*minuts;
				// поварачиваем картинку и рисуем ее
				canvas_rotate.call(_this, _angle);
				
			}, 1000);
	 
		}
		img2_2.onload = function() {
			var _this = this;
			var _angle = 0;
	 
			// устанавливаем таймер
			var timer = setInterval(function() {
				// очищаем canvas
				_this.context.clearRect(0,0,_this.width, _this.height); 
				var hours = new Date().getHours();
				var minuts = new Date().getMinutes();
				//   сдвиг часового пояса  
				var delta_hour = 10;
				var new_hours = hours + delta_hour;
				if(new_hours > 24){
					new_hours -=24;
				}
				document.getElementsByClassName("time-zone-city-value")[1].innerHTML = new_hours + ':' + minuts;
				_angle =30*(hours+1*(minuts/60)+delta_hour);
				// поварачиваем картинку и рисуем ее
				canvas_rotate.call(_this, _angle);
				
			}, 1000);
	 
		}
		img_fon_2.onload = function() {
			var _this2 = this;
			var _angle2 = 0;
	 
			// устанавливаем таймер
			var timer_fon = setInterval(function() {
				// очищаем canvas
				_this2.context.clearRect(0,0,_this2.width, _this2.height); 
	 
				// поварачиваем картинку и рисуем ее
				canvas_rotate.call(_this2, _angle2);
				_angle2 +=0;
			}, 1000);
	 
		} 
/* =================== end timer2 ============================= */		
		
		
	}
	window.onresize();
}
function canvas_rotate(rotate) { 
	// save the current co-ordinate system 
	// before we screw with it
	this.context.save(); 
 
	// move to the middle of where we want to draw our image
	this.context.translate(this.width/2, this.height/2);
 
	// rotate around that point, converting our 
	// angle from degrees to radians 
	this.context.rotate(rotate * this.radians);
 
	// draw it up and to the left by half the width
	// and height of the image 
	this.context.drawImage(this, -(this.width/2), -(this.height/2));
		 
	// and restore the co-ords to how they were when we began
	this.context.restore(); 
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
		
		var scale_display = 1;
		if(img.naturalWidth > document.body.clientWidth*scale_display){
			scale = document.body.clientWidth*scale_display/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*scale_display){
			scale = windowHeight()*scale_display/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 + "px";
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
	if(document.getElementById("name_page").innerHTML == "search"){
		document.getElementById("open_search_extended").style.display = "block";
		document.getElementById("mini_search").style.display = "none";
		return 0;
	}
	document.getElementById("open_search").style.display = "block";
	document.getElementById("mini_search").style.display = "none";
}
function js_close_search(){
	if(document.getElementById("name_page").innerHTML == "search"){
		document.getElementById("open_search_extended").style.display = "none";
		document.getElementById("mini_search").style.display = "block";
		return 0;
	}
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
		var scale_display = 1;
		if(img.naturalWidth > document.body.clientWidth*scale_display){
			scale = document.body.clientWidth*scale_display/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*scale_display){
			scale = windowHeight()*scale_display/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 + "px";
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
		var scale_display = 1;
		if(img.naturalWidth > document.body.clientWidth*scale_display){
			scale = document.body.clientWidth*scale_display/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*scale_display){
			scale = windowHeight()*scale_display/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 + "px";
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
		var scale_display = 1;
		if(img.naturalWidth > document.body.clientWidth*scale_display){
			scale = document.body.clientWidth*scale_display/img.naturalWidth;
		}
		if(img.naturalHeight*scale > windowHeight()*scale_display){
			scale = windowHeight()*scale_display/img.naturalHeight;
		}
		img.style.width = img.naturalWidth*scale + "px";
		img.style.height = img.naturalHeight*scale + "px";
		img.style.left = (windowWidth() - img.naturalWidth*scale)/2 + "px";
		img.style.top = (windowHeight() - img.naturalHeight*scale)/2 + "px";
	}
}
function js_galery_dwn(){
/*	$("html, body").animate({scrollTop:0},"slow");*/
	var block = document.getElementsByClassName("b-tour__b-galery__scroll")[0];
	var tmp_scroll = block.scrollTop + 300; 
	$(".b-tour__b-galery__scroll").animate({scrollTop:tmp_scroll},"slow");
	
/*	$(".b-tour__b-galery__scroll").scrollTo('300px', 500);*/
	
/*	block.scrollTop = tmp_scroll;*/
/*	$("#b-galery__scroll").animate({scrollTop:300},"slow");*/
/*	document.getElementsByClassName("b-tour__b-galery__scroll")[0].scrollTop = 300;*/

}
function js_galery_up(){
	var block = document.getElementsByClassName("b-tour__b-galery__scroll")[0];
	var tmp_scroll = block.scrollTop - 300;
	$(".b-tour__b-galery__scroll").animate({scrollTop:tmp_scroll},"slow");
/*	$(".b-tour__b-galery__scroll").scrollTop(100);*/
}
function js_open_select_month(){
	document.getElementById('calendar-body__select-month').style.height = 253 + 'px';
}
function js_select_month(t){
	document.getElementById('calendar-body__month').innerHTML = t.innerHTML;
	document.getElementById('calendar-body__select-month').style.height = 0 + 'px';
	var Month_number = 0;
	switch(t.innerHTML) {
		case "Январь":	{ Month_number = "0"; break;}
		case "Февраль":	{ Month_number = "1"; break;}
		case "Март":	{ Month_number = "2"; break;}
		case "Апрель":	{ Month_number = "3"; break;}
		case "Май":		{ Month_number = "4"; break;}
		case "Июнь":	{ Month_number = "5"; break;}
		case "Июль":	{ Month_number = "6"; break;}
		case "Август":	{ Month_number = "7"; break;}
		case "Октябрь":	{ Month_number = "8"; break;}
		case "Сентябрь":{ Month_number = "9"; break;}
		case "Ноябрь":	{ Month_number = "10"; break;}
		case "Декабрь":	{ Month_number = "11"; break;}  
	}
	createCalendar("calendar-body__fild", document.getElementById('calendar-body__year').innerHTML, Month_number);
}
function js_open_select_year(){
	document.getElementById('calendar-body__select-year').style.height = 73 + 'px';
}
function js_select_year(t){
	document.getElementById('calendar-body__year').innerHTML = t.innerHTML;
	document.getElementById('calendar-body__select-year').style.height = 0 + 'px';
	var Month_number = 0;
	switch(document.getElementById('calendar-body__month').innerHTML) {
		case "Январь":	{ Month_number = "0"; break;}
		case "Февраль":	{ Month_number = "1"; break;}
		case "Март":	{ Month_number = "2"; break;}
		case "Апрель":	{ Month_number = "3"; break;}
		case "Май":		{ Month_number = "4"; break;}
		case "Июнь":	{ Month_number = "5"; break;}
		case "Июль":	{ Month_number = "6"; break;}
		case "Август":	{ Month_number = "7"; break;}
		case "Октябрь":	{ Month_number = "8"; break;}
		case "Сентябрь":{ Month_number = "9"; break;}
		case "Ноябрь":	{ Month_number = "10"; break;}
		case "Декабрь":	{ Month_number = "11"; break;}  
	}
	createCalendar("calendar-body__fild", t.innerHTML, Month_number);
}
function js_calendar_open(number){
	var tmp_x = document.getElementsByClassName("time_fild")[number].offsetTop;
	var position = document.getElementsByClassName("time_fild")[number].getBoundingClientRect();
	var scroll;
	createCalendar("calendar-body__fild", 2014, 1);
	document.getElementById('calendar-body').style.overflow = 'visible';
	id_data_number = number;
	if(windowWidth() >= 680){
		document.getElementById('calendar-body').style.top = position.top + 40 + window.pageYOffset + 'px';
		document.getElementById('calendar-body').style.left = position.left + 20 + 'px';
	}
	if(windowWidth() < 680){
		document.getElementById('calendar-body').style.top = position.top -20 + window.pageYOffset + 'px';
		document.getElementById('calendar-body').style.left =   20 + 'px';
		if(id_data_number == 1){
			document.getElementById('calendar-body').style.left =   windowWidth() - 20 - 250 + 'px';
		}
	}
	document.getElementById('calendar-body').style.height = 'auto';
	document.getElementById('calendar-body__month').innerHTML = 'Февраль';
	document.getElementById('calendar-body__year').innerHTML = '2014';
	if(document.getElementById("name_page").innerHTML == "search"){
		document.getElementById('calendar-body').style.left = position.left - 60 + 'px';
	}
}
function select_data(current_td){
	document.getElementById('calendar-body').style.overflow = 'visible';
	document.getElementById('calendar-body').style.top = - 1000 + 'px';
	
	var select_number = current_td.innerHTML;
	var select_montth = document.getElementById('calendar-body__month').innerHTML;
	var select_year = document.getElementById('calendar-body__year').innerHTML
	var Month_number;
	switch(select_montth) {
		case "Январь":	{ Month_number = "01"; break;}
		case "Февраль":	{ Month_number = "02"; break;}
		case "Март":	{ Month_number = "03"; break;}
		case "Апрель":	{ Month_number = "04"; break;}
		case "Май":		{ Month_number = "05"; break;}
		case "Июнь":	{ Month_number = "06"; break;}
		case "Июль":	{ Month_number = "07"; break;}
		case "Август":	{ Month_number = "08"; break;}
		case "Октябрь":	{ Month_number = "09"; break;}
		case "Сентябрь":{ Month_number = "10"; break;}
		case "Ноябрь":	{ Month_number = "11"; break;}
		case "Декабрь":	{ Month_number = "12"; break;}  
	}
	document.getElementsByClassName('time_fild')[id_data_number].value = select_number+"."+Month_number+"."+select_year;
	
	
}
function js_open_select_place(number){
	document.getElementsByClassName("search-select-place")[number].style.height = 'auto';
}
function js_close_select_place(number, t){
	document.getElementsByClassName("b-search__place__input")[number].value = t.innerHTML;
	document.getElementsByClassName("search-select-place")[number].style.height = 0 + 'px';
}
function js_select_number_men(){
	document.getElementsByClassName("b-tour__select-number-men")[0].style.height = 'auto';
}
function js_select_number_men_2(number){
	document.getElementsByClassName("b-tour__select-number-men")[number].style.height = 'auto';
}
function js_close_select_number_men(t){
	document.getElementsByClassName("select_number_men")[0].value = t.innerHTML;
	document.getElementsByClassName("b-tour__select-number-men")[0].style.height = 0 + 'px';
}
function js_close_select_number_men_avia_in(t, number){
	document.getElementsByClassName("b-avia-in-order__unit-fild")[number].value = t.innerHTML;
	document.getElementsByClassName("b-tour__select-number-men")[number].style.height = 0 + 'px';
}
function js_close_select_number_men_search(t, number){
	document.getElementsByClassName("b-search-e__input")[number].value = t.innerHTML;
	document.getElementsByClassName("b-tour__select-number-men")[number].style.height = 0 + 'px';
}
function js_open_menu320(){
	if(document.getElementById('b-menu-320').style.display == 'block'){
		document.getElementById('b-menu-320').style.display = 'none';
		document.getElementsByClassName("header__menu320__btn__img")[0].style.backgroundPosition = "0px -490px";
		return 0;
	}
	document.getElementById('b-menu-320').style.display = 'block';
	document.getElementsByClassName("header__menu320__btn__img")[0].style.backgroundPosition = "0px -1080px";
}
function startTime(){
	var tm=new Date();
	var d=tm.getDate();
	var h=tm.getHours();
	var m=tm.getMinutes();
	var s=tm.getSeconds();
	var end = new Date(2014, 2,1);
	var elapsed = end - tm;
	document.getElementById('b-campaign__day').innerHTML= div(elapsed, 86400000);
	elapsed = elapsed - div(elapsed, 86400000)*86400000;
	h = div(elapsed, 3600000);
	h=checkTime(h);
	elapsed = elapsed - h*3600000;
	m = div(elapsed, 60000);
	m=checkTime(m);
	elapsed = elapsed - m*60000;
	s = div(elapsed, 1000);
	s=checkTime(s);
	document.getElementById('b-campaign__hour').innerHTML=h;
	document.getElementById('b-campaign__second').innerHTML=s;
	document.getElementById('b-campaign__minut').innerHTML=m;
	t=setTimeout('startTime()',500);
/*	document.getElementById('b-campaign__second').style.top = 42 + 'px';
	$('#b-campaign__second').addClass('animated_timer_end');*/

}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
function div(val, by){
    return (val - val % by) / by;
}
function js_open_b_add(t){
	var number = $('.found_elem__btn').index(t);
	if(document.getElementsByClassName("found_elem__b-add")[number].style.height == 'auto'){
		document.getElementsByClassName("found_elem__b-add")[number].style.height = 0 + 'px';
		document.getElementsByClassName("found_elem__b-add")[number].style.borderTop = "0px solid #e1e5e8";
		t.innerHTML = 'еще 8<span class="found_elem__btn__arrow"></span>';		
		document.getElementsByClassName("found_elem__btn__arrow")[number].style.backgroundPosition = "0px -39px";
		return 0;
	}
	document.getElementsByClassName("found_elem__b-add")[number].style.height = 'auto';
	document.getElementsByClassName("found_elem__b-add")[number].style.borderTop = "1px solid #e1e5e8";
	t.innerHTML = 'свернуть<span class="found_elem__btn__arrow"></span>';
	document.getElementsByClassName("found_elem__btn__arrow")[number].style.backgroundPosition = "0px -60px";
}
function js_resttypes_open(t){
	var number = $('.b-resttypes__elem__another').index(t);
	if(t.parentNode.classList.contains('b-resttypes__elem__cont-city__anim')){
		t.parentNode.classList.remove('b-resttypes__elem__cont-city__anim');		
		document.getElementsByClassName("b-resttypes__elem__arrow")[number].style.backgroundPosition = "0px -60px";
		return 0;
	}
	t.parentNode.classList.add('b-resttypes__elem__cont-city__anim');
	document.getElementsByClassName("b-resttypes__elem__arrow")[number].style.backgroundPosition = "0px -40px";
	
	/*document.getElementsByClassName("b-resttypes__elem__cont-city")[number].style.height = 'auto';*/
}
function js_hotels_rating_select(t){
	if(t.style.backgroundColor == "rgb(255, 255, 255)" || t.style.backgroundColor == ""){
		t.style.backgroundColor = "#00adc7";
		t.style.color = "#fff";
		t.firstElementChild.style.backgroundPosition = "0px -1260px";
		return 0;
	}
	if(t.style.backgroundColor == "rgb(0, 173, 199)"){
		t.style.backgroundColor = "#fff";
		t.style.color = "#383d43";
		t.firstElementChild.style.backgroundPosition = "0px -1240px";
	}
}
function js_hotels_in_map_close(){
	document.getElementsByClassName("b-hotels-in__b-map")[0].style.height = 305 + 'px';
	document.getElementsByClassName("b-hotels-in__b-map__btn-close")[0].style.display = 'none';
	document.getElementsByClassName("b-hotels-in__b-map__btn-open")[0].style.display = 'block';
	document.getElementsByClassName("b-hotels-in__map-dimmer")[0].style.opacity = '0.5';
	
}
function js_hotels_in_map_open(){
	document.getElementsByClassName("b-hotels-in__b-map")[0].style.height = 'auto';
	document.getElementsByClassName("b-hotels-in__b-map__btn-close")[0].style.display = 'block';
	document.getElementsByClassName("b-hotels-in__b-map__btn-open")[0].style.display = 'none';
	document.getElementsByClassName("b-hotels-in__map-dimmer")[0].style.opacity = '0';
	
}
function js_rating_star__off(elem){
	if(document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML == 0){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#c3cbd1";
	}
	if(document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML == 1){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ffd200";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 19 + "px";
	}
	if(document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML == 2){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ffd200";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 38 + "px";
	}
	if(document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML == 3){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ff8a00";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 57 + "px";
	}
	if(document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML == 4){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#00adc7";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 76 + "px";
	}
	if(document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML == 5){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#00adc7";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 95 + "px";
	}
	
	
}
function js_rating_star(elem, number_star){
	if(number_star == 1){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ffd200";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 19 + "px";
	}
	if(number_star == 2){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ffd200";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 38 + "px";
	}
	if(number_star == 3){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ff8a00";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 57 + "px";
	}
	if(number_star == 4){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#00adc7";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 76 + "px";
	}
	if(number_star == 5){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#00adc7";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 95 + "px";
	}
}
function js_rating_star_select(elem, number_star){
	if(number_star == 1){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ffd200";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 19 + "px";
	}
	if(number_star == 2){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ffd200";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 38 + "px";
	}
	if(number_star == 3){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#ff8a00";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 57 + "px";
	}
	if(number_star == 4){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#00adc7";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 76 + "px";
	}
	if(number_star == 5){
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.backgroundColor = "#00adc7";
		document.getElementsByClassName("b-add-coment-elem__b-rating__color")[elem].style.width = 95 + "px";
	}
	document.getElementsByClassName("b-add-coment-elem__value")[elem].innerHTML = number_star;
}
function js_hotels_in_month(t){
	document.getElementsByClassName("b-add-coment-elem__input_month")[0].value = t.innerHTML;
	document.getElementById("b-hotels-in__select-month").style.display = "none";

}
function js_hotels_in_month_open(){
	document.getElementById("b-hotels-in__select-month").style.display = "block";
}
function js_hotels_in(number){
	if(number == 1){
		document.getElementsByClassName("b-hotels-in__menu_li")[1].style.backgroundColor = "#fff";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.backgroundColor = "#ebeef0";
		document.getElementsByClassName("b-hotels-in__menu_li")[1].style.borderTop = "1px solid #c3cbd1";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.borderTop = "1px solid #e1e5e8";
		document.getElementsByClassName("b-hotels-in__menu_li")[1].style.borderBottom = "1px solid #fff";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.borderLeft = "1px solid #ebeef0";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.borderBottom = "1px solid #c3cbd1";
		
		document.getElementsByClassName("flex-container1")[0].style.display = "none";
		document.getElementsByClassName("flex-container2")[0].style.display = "block";
		if(windowWidth() < 550){
			document.getElementsByClassName("b-hotels-in__b-rating")[0].style.display = "block";		
		}
	}
	if(number == 0){
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.backgroundColor = "#fff";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.borderTop = "1px solid #c3cbd1";
		document.getElementsByClassName("b-hotels-in__menu_li")[1].style.backgroundColor = "#ebeef0";
		document.getElementsByClassName("b-hotels-in__menu_li")[1].style.borderTop = "1px solid #e1e5e8";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.borderLeft = "1px solid #c3cbd1";
		document.getElementsByClassName("b-hotels-in__menu_li")[0].style.borderBottom = "1px solid #fff";		
		document.getElementsByClassName("b-hotels-in__menu_li")[1].style.borderBottom = "1px solid #c3cbd1";
	
		document.getElementsByClassName("flex-container1")[0].style.display = "flex";
		document.getElementsByClassName("flex-container2")[0].style.display = "none";
		document.getElementsByClassName("flex-container3")[0].style.display = "none";
		if(windowWidth() < 550){
			document.getElementsByClassName("b-hotels-in__b-rating")[0].style.display = "none";		
		}
	}
}
function js_hotels_in_coment_new(){
	document.getElementsByClassName("flex-container2")[0].style.display = "none";
	document.getElementsByClassName("flex-container3")[0].style.display = "block";
	if(windowWidth() < 550){
		document.getElementsByClassName("b-hotels-in__b-rating")[0].style.display = "none";		
	}
}
function js_hotels_in_coment_new_close(){
	document.getElementsByClassName("flex-container3")[0].style.display = "none";
	document.getElementsByClassName("flex-container2")[0].style.display = "block";
}
function js_hotels_in_detail_coment(t){
	var number = $('.b-hotels-in__coment-elem_detail').index(t);
	if(document.getElementsByClassName("b-hotels-in__coment-elem_b-detail")[number].style.height == 0 ||
		document.getElementsByClassName("b-hotels-in__coment-elem_b-detail")[number].style.height == "0px"){
		document.getElementsByClassName("b-hotels-in__coment-elem_b-detail")[number].style.height = "auto";
		t.innerHTML = "свернуть <span class='b-hotels-in__coment-elem_detail__arrow'></span>";
		document.getElementsByClassName("b-hotels-in__coment-elem_detail__arrow")[number].style.backgroundPosition = "0px -1300px";
		
		return 0;	
	}
	if(document.getElementsByClassName("b-hotels-in__coment-elem_b-detail")[number].style.height == "auto"){
		document.getElementsByClassName("b-hotels-in__coment-elem_b-detail")[number].style.height = 0 + "px";
		t.innerHTML = "подробнее <span></span>";
	}
}
function js_close_select_cash(number, t){
	document.getElementsByClassName("select_cash__input")[number].value = t.innerHTML;
	document.getElementsByClassName("search-select-cash")[number].style.height = 0 + 'px';
}
function js_open_select_cash(){
	document.getElementsByClassName("search-select-cash")[0].style.height = "auto";
}







