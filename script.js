//your JS code here. If required.
function updateTimer(){
	const timerElement= document.getElementById("timer")
	const now= new Data()

	timerElement.textContent=now.toLocaleString()
}

updateTimer();

setInterval(update,100)