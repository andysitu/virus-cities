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
		var that = screen;

		if (that.showMenu == false) {
			console.log(e.clientX);
		} else {
			that.showMenu();
		}
		
	},
	showMenu: false,
	displayStartMenu() {
		this.showMenu = this.startGame;
		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		ctx.textAlign = 'center';
		ctx.fillText("Hello, please click to start", this.xCenter, this.yCenter - 50);
		ctx.restore();
	},
	startGame() {
		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		ctx.textAlign = 'center';
		ctx.fillText("Hello", this.xCenter, this.yCenter - 50);
		ctx.restore();
	}
}