setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	mrng_night = "AM";

	if (hour > 12) {
		hour -= 12;
		mrng_night = "PM";
	}
	if (hour == 0) {
		hr = 12;
		mrng_night = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + mrng_night ;
    // console.log(currentTime);
	document.getElementById("clock")
			.innerHTML = currentTime;
}
showTime();
