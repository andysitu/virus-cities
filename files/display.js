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
	highlighted: [0,0],
	setHighlighted(x,y) {
		this.highlighted = [x,y];
	},
	selected: [0,0],
	setSelected(x,y) {
		this.selected = [x,y];
	},
	highlight(x,y) {
		var blockSize = this.blockSize;

		uictx.clearRect(0,0, this.width, this.height);
		uictx.fillStyle = "red";
		uictx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
		uictx.fillStyle = "black";
		uictx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
	},

	displayStartMenu() {
		ctx.save();
		ctx.clearRect(0,0, this.width, this.height);
		ctx.textAlign = 'center';
		ctx.fillText("Hello, please click to start", this.xCenter, this.yCenter - 50);
		ctx.restore();
	},
	startGame() {
		this.readMap();
	},
	readMap(startX, startY) { // run when map is changed.
	// reads from map.world & displays it on canvas. If startX, etc
	// are undefined, then these values will just show the entirety
	// of the map.
		var blockSize = this.blockSize,
			width = this.width,
			height = this.height,
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
				ctx.fillStyle = this.mapTranslate(i,j);
				ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
				ctx.fillStyle = "black";
				ctx.strokeRect(i * blockSize, j * blockSize, blockSize, blockSize);
			}
		}
		ctx.restore();
	},
	mapTranslate(x,y) {
		// translates the type of block into a color.
		// Needs to be changed later for color to reflect
		// the infection status, but that should be easy.
		var block = map.getBlock(x,y);

		switch(true) {
			case (block instanceof Land):
				return "rgba(0,204,0,0.5)";
				break;
			case (block instanceof Settlement):
				return "gray";
				break;
		}
	}
}