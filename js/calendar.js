var month_top_height;
var calendar_y_tmp = 0;
var month_height_all = 0;
var number_top_month = 0;
var calendar_y_end = 0;


function createCalendar(id, year, month) {
	var elem = document.getElementById(id);
/*	var nowMonth = date.getMonth();*/
	
	
	var today = new Date();
	var nowDate = today.getDate();
	var nowMonth = today.getMonth();
	var nowYear = today.getFullYear();
	var Month_txt;
	
	if(month > 11){
		year += 1;
		month -= 12;
	}
	var mon = month;
	var d = new Date(year, mon);
	switch(month) {
		case 0:{ Month_txt = "Январь"; break;}
		case 1:{ Month_txt = "Февраль"; break;}
		case 2:{ Month_txt = "Март"; break;}
		case 3:{ Month_txt = "Апрель"; break;}
		case 4:{ Month_txt = "Май"; break;}
		case 5:{ Month_txt = "Июнь"; break;}
		case 6:{ Month_txt = "Июль"; break;}
		case 7:{ Month_txt = "Август"; break;}
		case 8:{ Month_txt = "Сентябрь"; break;}
		case 9:{ Month_txt = "Октябрь"; break;}
		case 10:{ Month_txt = "Ноябрь"; break;}
		case 11:{ Month_txt = "Декабрь"; break;}  
	}
	var table = /*'<span class="mon1">'+Month_txt+'</span><span class="year1">'+year+'</span>'+*/
				'<p/><span class="day_txt">Пн</span>'+
				'<span class="day_txt">Вт</span>'+
				'<span class="day_txt">Ср</span>'+
				'<span class="day_txt">Чт</span>'+
				'<span class="day_txt">Пт</span>'+
				'<span class="day_txt">Сб</span>'+
				'<span class="day_txt">Вс</span>'+
				'<table>';

	// заполнить первый ряд от понедельника
	// и до дня, с которого начинается месяц
	// * * * | 1  2  3  4
	for (var i=0; i<getDay(d); i++) {
		table += '<td></td>';
	}

  // ячейки календаря с датами
  while(d.getMonth() == mon) {
	if(d.getDate() == nowDate && d.getMonth() == nowMonth && d.getFullYear() == nowYear){
		table += '<td class="today" onclick = "select_data(this)">'+d.getDate()+'</td>';
	}
	else
	if(d < today){
		table += '<td class="last">'+d.getDate()+'</td>';
	}
	else
		if(d.getDate() != "")
			table += '<td class="td_active"  onmouseout="js_not_active_cell(this)"' +
						' onmouseover="js_active_cell(this)"'+
						' onclick = "select_data(this)">'+d.getDate()+'</td>';
		else
			table += '<td>'+d.getDate()+'</td>';
     
    if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate()+1);
  }

  // добить таблицу пустыми ячейками, если нужно
  if (getDay(d) != 0) {
    for (var i=getDay(d); i<7; i++) {
      table += '<td></td>';
    }
  }

  // закрыть таблицу
  table += '</tr></table>';

  // только одно присваивание innerHTML
  elem.innerHTML = table;
}
function js_active_cell(t){
	t.style.backgroundColor= "#ffd736";
	t.style.color= '#3a3e41';
}
function js_not_active_cell(t){
	t.style.color='#fff';
	t.style.backgroundColor='#00adc7';
}
function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

function select_data(current_td){
	/*current_td.style.color = "#ff0"; */
	current_td.style.backgroundColor = "#49b69c";
	var select_number = current_td.innerHTML;
	var month_id = current_td.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
	var select_montth = current_td.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("mon1")[0].innerHTML;
	var select_year = current_td.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("year1")[0].innerHTML;
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
	document.getElementsByClassName(data_fild)[0].value = select_number+"."+Month_number+"."+select_year;
	calendar_close = 1;
	if(document.getElementsByClassName("tab1_time_from_fild")[0].value != "" && document.getElementsByClassName("tab1_time_back_fild")[0].value != "" && tab1_people_open == 0){
		tab1_people_open = 0.2;
		document.getElementsByClassName("tab1_people")[0].style.display = "block";
		document.getElementsByClassName("tab1_people")[1].style.opacity = 0;
		jQuery('.order_tab1_main').jScrollPane();
	}
	if(document.getElementsByClassName("tab1_time_from_fild")[0].value != "" && tab1_check_status == 1){
		tab1_people_open = 0.2;
		document.getElementsByClassName("tab1_people")[0].style.display = "block";
		document.getElementsByClassName("tab1_people")[1].style.opacity = 0;
		jQuery('.order_tab1_main').jScrollPane();
	}
}

function bild_calendar(){
	var today = new Date();
	var nowMonth = today.getMonth();
	var nowYear = today.getFullYear();




	createCalendar("month0", nowYear, nowMonth+0);
	createCalendar("month1", nowYear, nowMonth+1);
	createCalendar("month2", nowYear, nowMonth+2);
	createCalendar("month3", nowYear, nowMonth+3);
	createCalendar("month4", nowYear, nowMonth+4);
	createCalendar("month5", nowYear, nowMonth+5);
	createCalendar("month6", nowYear, nowMonth+6);
	createCalendar("month7", nowYear, nowMonth+7);
	createCalendar("month8", nowYear, nowMonth+8);
	createCalendar("month9", nowYear, nowMonth+9);
	createCalendar("month10", nowYear, nowMonth+10);
	createCalendar("month11", nowYear, nowMonth+11);
	createCalendar("month12", nowYear, nowMonth+12);

}

function js_calendar_up(){
	if(calendar_move == 1){
		return;
	}
	number_top_month -=1;
	if(number_top_month < 0){
		number_top_month = 0;
		return;
	}
	
	calendar_y_end = calendar_y_tmp + document.getElementById("month"+number_top_month).offsetHeight;
	month_height_all = 0;
	if(number_top_month == 0){
		document.getElementsByClassName("calendar_up")[0].style.backgroundColor = "#d3d8db";
		document.getElementsByClassName("calendar_up")[0].style.cursor = "default";	
	}
	document.getElementsByClassName("calendar_dwn")[0].style.backgroundColor = "#fff";
	document.getElementsByClassName("calendar_dwn")[0].style.cursor = "pointer";
	calendar_move = 1;
}

function js_calendar_dwn(){
	if(calendar_move == 1){
		return;
	}
	if(number_top_month == 10){
		return 0;	
	}
	calendar_y_end = calendar_y_tmp - document.getElementById("month"+number_top_month).offsetHeight;
	month_height_all = 0;
	number_top_month +=1;
	if(number_top_month == 10){
		document.getElementsByClassName("calendar_dwn")[0].style.backgroundColor = "#d3d8db";
		document.getElementsByClassName("calendar_dwn")[0].style.cursor = "default";
	}
	document.getElementsByClassName("calendar_up")[0].style.backgroundColor = "#fff";
	document.getElementsByClassName("calendar_up")[0].style.cursor = "pointer";
	calendar_move = 1;
}

function js_calendar_close(){
	document.getElementById('calendar-body').style.top = - 1000 + 'px';
}