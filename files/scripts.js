// Page is for onload function for window
var canvas,
	ctx,
	menu;

window.addEventListener("load", function(e) {
	// Make canvas, set display.width & height with display.setWidthHeight,
	// set ui.width & height with ui.setWidthHeight.
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		canvas_widthratio = 4/5,
		ui_widthratio = 1/5,
		blockSize = display.blockSize;

	height = Math.floor(height / blockSize) * blockSize;
	cwidth = Math.floor(width * canvas_widthratio / blockSize) * blockSize;

	menu = document.getElementById("menu");

	canvas = document.createElement("canvas");
	var container = document.getElementById("container");
	container.insertBefore(canvas, menu);

	display.setWidthHeight(cwidth, height);
	ui.setWidthHeight( width - cwidth - 40, height);
	canvas.width = cwidth;
	canvas.height = height;
	canvas.id = "canvas";

	ui.changeMenu();

	ctx = canvas.getContext('2d');
	ctx.font = '20pt Calibri';

	// canvas click event listener
	canvas.addEventListener('click', display.click, false);

	display.displayStartMenu();
});