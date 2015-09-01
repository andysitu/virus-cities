// Page is for onload function for window
var canvas,
	ctx;

window.addEventListener("load", function(e) {
	// Getting width & height for canvas
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		canvas_heightratio = 0.95,
		canvas_widthratio = 4/5;


	canvas = document.createElement("canvas");
	var canvas_div = document.getElementById("canvas_container");
	canvas_div.appendChild(canvas);
	width = Math.floor(width * canvas_widthratio);
	height = Math.floor( height * canvas_heightratio);

	screen.setWidthHeight(width, height);
	ui.setWidthHeight(width, canvas.width, height);
	canvas.width = width;
	canvas.height = height;

	ctx = canvas.getContext('2d');

	ctx.fillStyle = 'red';
	ctx.fillRect(0,0, screen.width, screen.height);
});