var screen = {
	width: 0,
	height: 0,
	xCenter: 0,
	yCenter: 0,
	setWidthHeight(w, h) {
		this.width = w;
		this.height = h;
		this.xCenter = w/2;
		this.yCenter = h/2;
	},
	click(e) {
		console.log(e.clientX);
	},
	showMenu: false,
	displayStartMenu() {
		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		ctx.textAlign = 'center';
		ctx.fillText("Hello", this.xCenter, this.yCenter - 50);
	}
}