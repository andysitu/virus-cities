var controller = {
	// blockSize in display also needs to be changed if this is
	_blockSize: 25,
	get blockSize() {
		return this._blockSize;
	},
	offsetLeft: 0,
	offsetTop: 0,
	setOffset(x, y) {
		this.offsetLeft = x;
		this.offsetTop = y;
	},
	// If showMenu is false, click will run as it normally does
	// meaning that clicks will register to map. Else, if it is
	// not false, it'll point to a function that'll will when
	// use clicks.
	showMenu: false,
	startMenu() {
		// Note: it sets showMenu to point to startGame!
		this.showMenu = this.startGame;
		display.displayStartMenu();
	},
	startGame() {
		this.showMenu = false;
		map.makeMap();
		display.startGame();
	},
	clicked(e){
		var that = controller;

		if (that.showMenu == false) {
			var blockSize = that.blockSize,
				world = map.getWorld();

			var x = Math.floor( (e.clientX - that.offsetLeft) / blockSize),
				y = Math.floor( (e.clientY - that.offsetTop) / blockSize);

			// returns obj of what to display (for ui.displayInfo)
			var obj = world[x][y].click();
			ui.displayInfo(obj);
		} else {
			that.showMenu();
		}
	},

	highlighted: [0,0],
	highlight(e) {
		var that = controller;
		if (that.showMenu == false) {
			var hl = that.highlighted,
				blockSize = that.blockSize,
				world = map.world;

			var x = Math.floor( (e.clientX - that.offsetLeft) / blockSize),
				y = Math.floor( (e.clientY - that.offsetTop) / blockSize);
			if (hl[0] != x || hl[1] != y) {
				that.highlighted = [x,y];

				display.highlight(x,y);
			}
		}	
	}
};