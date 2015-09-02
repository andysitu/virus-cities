// Page is for onload function for window
var canvas,
	uiCanvas,
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

	height *= 0.95;

	// width & height blocks are the blocks across the canvas shown
	var heightBlocks = Math.floor(height / blockSize),
		widthBlocks = Math.floor(width * canvas_widthratio / blockSize);
	height = heightBlocks * blockSize;
	cwidth = widthBlocks * blockSize;
	display.setMaxBlocks([widthBlocks, heightBlocks]);

	menu = document.getElementById("menu");

	canvas = document.getElementById("game-canvas");
	uiCanvas = document.getElementById("ui-canvas");

	display.setWidthHeight(cwidth, height);
	ui.setWidthHeight( width - cwidth - 40, height);
	canvas.width = cwidth;
	uiCanvas.width = cwidth;
	canvas.height = height;
	uiCanvas.height = height;
	canvas.id = "canvas";

	ui.changeMenu();

	ctx = canvas.getContext('2d');
	ctx.font = '20pt Calibri';

	// canvas click event listener
	canvas.addEventListener('click', display.click, false);
	canvas.addEventListener('mousemove', display.highlight, false);

	display.displayStartMenu();
});