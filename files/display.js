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
	_blockSize: 25,
	get blockSize() {
		return this._blockSize;
	},
	setWidthHeight(w, h) {
		this.width = w;
		this.height = h;
		this.xCenter = w/2;
		this.yCenter = h/2;
		canvas.width = w;
		canvas.height = h;
		uiCanvas.width = w;
		uiCanvas.height = h;
	},
	click(e) {
		var that = display,
			blockSize = that.blockSize,
			world = map.world;

		if (that.showMenu == false) {
			var x = Math.floor( (e.clientX - e.target.offsetLeft) / blockSize),
				y = Math.floor( (e.clientY - e.target.offsetTop) / blockSize);

			var obj = world[x][y].click();
			ui.displayInfo(obj);
		} else {
			that.showMenu();
		}
		
	},
	highlighted: [0,0],
	highlight(e) {
		var that = display;
		if (that.showMenu == false) {
			var that = display,
				hl = display.highlighted,
				blockSize = that.blockSize,
				world = map.world;

			var x = Math.floor( (e.clientX - e.target.offsetLeft) / blockSize),
				y = Math.floor( (e.clientY - e.target.offsetTop) / blockSize);

			if (hl[0] != x || hl[1] != y) {
				that.highlighted = [x,y];
				var hl = that.highlighted;

				uictx.clearRect(0,0, this.width, this.height);
				uictx.fillStyle = "red";
				uictx.fillRect(hl[0] * blockSize, hl[1] * blockSize, blockSize, blockSize);
				uictx.fillStyle = "black";
				uictx.strokeRect(hl[0] * blockSize, hl[1] * blockSize, blockSize, blockSize);
			}
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
	readMap(startX, startY) {
	// reads from map.world & displays it on canvas. If startX, etc
	// are undefined, then these values will just show the entirety
	// of the map.
		var blockSize = this.blockSize,
			width = this.width,
			height = this.height,
			world = map.getWorld(),
			max= this.maxBlocks;

		if (startX === undefined) {
			startX = 0;
			startY = 0;
		}

		var stopX = startX + max[0],
			stopY = startY + max[1];

		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		for (var i = 0; i < stopX; i++) {
			for (var j = 0; j < stopY; j++) {
				ctx.fillStyle = "rgba(0,204,0,0.5)";
				ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
				ctx.fillStyle = "black";
				ctx.strokeRect(i * blockSize, j * blockSize, blockSize, blockSize);
			}
		}
		ctx.restore();
	}
}