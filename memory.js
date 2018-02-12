/* all browsers prevent you from getting performance information for security purposes,
so I'm just doing it for simulation purposes. */

var element = document.getElementById("memoryused");

function updateMemory() {
	var rand = Math.floor(Math.random() * (201) - 100);
	var val = 512 + rand;
	element.innerHTML = val + "MB";
}

setInterval(updateMemory, 1500);