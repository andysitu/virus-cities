var canvas,
	ctx;

window.addEventListener("load", function(e) {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	canvas = document.createElement("canvas");
	var canvas_div = document.getElementById("canvas_container");
	canvas_div.appendChild(canvas);
	canvas.width = Math.floor(width * 3 / 4);
	canvas.height = Math.floor( height * 0.90);

	ctx = canvas.getContext('2d');

	ctx.fillStyle = 'red';
	ctx.fillRect(0,0, canvas.width, canvas.height);
});