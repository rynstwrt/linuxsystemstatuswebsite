var cursor = document.getElementById("cursor");
var bold = true;

function toggle() {
	bold = !bold;
	if (bold) 
		cursor.innerHTML = "&#x2588";
	else
		cursor.innerHTML = "";
}

setInterval(toggle, 600);