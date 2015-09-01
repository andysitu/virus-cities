// Page is for onload function for window
var canvas,
	ctx;

window.addEventListener("load", function(e) {
	// Getting width & height for canvas
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		canvas_heightratio = 0.90,
		canvas_widthratio = 3 / 4;


	canvas = document.createElement("canvas");
	var canvas_div = document.getElementById("canvas_container");
	canvas_div.appendChild(canvas);
	canvas.width = Math.floor(width * canvas_widthratio);
	canvas.height = Math.floor( height * canvas_heightratio);

	ctx = canvas.getContext('2d');

	ctx.fillStyle = 'red';
	ctx.fillRect(0,0, canvas.width, canvas.height);
});