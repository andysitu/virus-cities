var display = {
	width: 0,
	height: 0,
	xCenter: 0,
	yCenter: 0,
	_blockSize: 20,
	get blockSize() {
		return this._blockSize;
	},
	setWidthHeight(w, h) {
		this.width = w;
		this.height = h;
		this.xCenter = w/2;
		this.yCenter = h/2;
	},
	click(e) {
		// an even
		var that = display;

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

		map.makeMap();
		this.readMap();
	},
	readMap(startX, startY, stopX, stopY) {
		var blockSize = this.blockSize,
			width = this.width,
			height = this.height,
			world = map.getWorld(),
			len1 = world.length,
			len2 = world[0].length;

		if (startX === undefined) {
			startX = 0;
			startY = 0;
			stopX = len1;
			stopY = len2;
		}
		if (stopX * blockSize > width) {
			stopX = Math.floor( width / blockSize);
		}
		if (stopY * blockSize > height) {
			stopY = Math.floor( height / blockSize);
		}

		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		for (var i = 0; i < stopX; i++) {
			for (var j = 0; j < stopY; j++) {
				ctx.fillStyle = "red";
				ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
				ctx.fillStyle = "black";
				ctx.strokeRect(i * blockSize, j * blockSize, blockSize, blockSize);
			}
		}
		ctx.restore();
	}
}