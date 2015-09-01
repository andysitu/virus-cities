// Page is for onload function for window
var canvas,
	ctx,
	menu;

window.addEventListener("load", function(e) {
	// Make canvas, set screen.width & height with screen.setWidthHeight,
	// set ui.width & height with ui.setWidthHeight.
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		canvas_heightratio = 0.95,
		canvas_widthratio = 4/5,
		ui_widthratio = 1/5;

	menu = document.getElementById("menu");

	canvas = document.createElement("canvas");
	var container = document.getElementById("container");
	container.insertBefore(canvas, menu);
	width = Math.floor(width * canvas_widthratio);
	height = Math.floor( height * canvas_heightratio);

	screen.setWidthHeight(width, height);
	ui.setWidthHeight(Math.floor(width * ui_widthratio), height);
	canvas.width = width;
	canvas.height = height;
	canvas.id = "canvas";

	ui.changeMenu();

	ctx = canvas.getContext('2d');

	ctx.fillStyle = 'red';
	ctx.fillRect(0,0, width, height);
});