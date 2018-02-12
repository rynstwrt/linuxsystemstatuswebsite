var timeElem = document.getElementById("uptime");
var time = 0;


function forceTwo(num) {
	if (num < 10)
		num = "0" + num;
	
	return num;
}


function updateTime() {
	time++;
	var hrs = Math.floor(time / 3600);
	var mins = Math.floor((time % 3600) / 60);
	var secs = time % 60;
	
	var formatted = forceTwo(hrs) + ":" + forceTwo(mins) + ":" + forceTwo(secs);
	timeElem.innerHTML = formatted;
}

setInterval(updateTime, 1000);