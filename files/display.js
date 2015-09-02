var display = {
	width: 0,
	height: 0,
	xCenter: 0,
	yCenter: 0,
	maxBlocks: [0,0],
	setMaxBlocks(arr) {
	// [0] is for width, [1] for height
		this.maxBlocks = arr;
	},
	getMaxBlocks() {
		return this.maxBlocks;
	},
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
		var that = display;
		if (that.showMenu == false) {
			console.log(e.clientX);
		} else {
			that.showMenu();
		}
		
	},

	// If showMenu is false, click will run as it normally does
	// meaning that clicks will register to map. Else, if it is
	// not false, it'll point to a function that'll will when
	// use clicks.
	showMenu: false,

	displayStartMenu() {
		// Note: it sets showMenu to point to startGame!
		this.showMenu = this.startGame;
		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		ctx.textAlign = 'center';
		ctx.fillText("Hello, please click to start", this.xCenter, this.yCenter - 50);
		ctx.restore();
	},
	startGame() {
		this.showMenu = false;

		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		ctx.textAlign = 'center';
		ctx.fillText("Hello", this.xCenter, this.yCenter - 50);
		ctx.restore();

		map.makeMap();
		this.readMap();
	},
	readMap(startX, startY, stopX, stopY) {
	// reads from map.world & displays it on canvas. If startX, etc
	// are undefined, then these values will just show the entirety
	// of the map.
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