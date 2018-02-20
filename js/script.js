/*bg change with status*/
var input, statusIcon, main_body;
input = document.querySelector('#status').innerHTML;
statusIcon = document.getElementById('statusIcon');
main_body = document.getElementsByClassName('main_body');
	if (input == "cloudy" ) {
		statusIcon.src = 'img/icon_cloudy.png' ;
		mainBody.style.backgroundImage = "url('img/cover_cloudy.jpg')" ;
	} 
	else if (input == 'sunny') {
		statusIcon.src = 'img/icon_sunny.gif' ;
		mainBody.style.backgroundImage = "url('img/cover_sunny.jpg')" ;
	}
	else{
		statusIcon.src = 'img/icon_rainy.png' ;
		mainBody.style.backgroundImage = "url('img/cover_rainy.gif')" ;
	}