var screen = {
	width: 0,
	height: 0,
	setWidthHeight(w, h) {
		this.width = canvas.width = w;
		this.height = canvas.height = h;
	},
	makeCanvas() {
		// Getting width & height for canvas
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			canvas_heightratio = 0.90,
			canvas_widthratio = 3 / 4;


		canvas = document.createElement("canvas");
		var canvas_div = document.getElementById("canvas_container");
		canvas_div.appendChild(canvas);
		width = Math.floor(width * canvas_widthratio);
		height = Math.floor( height * canvas_heightratio);

		// sets screen.width & height & changes canvas width & height
		this.setWidthHeight(width, height);

		ctx = canvas.getContext('2d');

		ctx.fillStyle = 'red';
		ctx.fillRect(0,0, canvas.width, canvas.height);
	}
}