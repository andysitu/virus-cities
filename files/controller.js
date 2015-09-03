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
	keyPressed(e) {
		//Note: keyCode is deprecated

		var that = controller
		switch(true) {
			case (e.keyCode == 77): // m
				ui.displayMenu("menu", that.selected.click());
		}
	},
	// reference to instance that user has selected
	selected: null,
	
	clicked(e){
		// handles click of user. Displays info of the clicked
		// cell normally by calling on ui.
		var that = controller;

		if (that.showMenu == false) {
			var blockSize = that.blockSize,
				world = map.getWorld();

			var x = Math.floor( (e.clientX - that.offsetLeft) / blockSize),
				y = Math.floor( (e.clientY - that.offsetTop) / blockSize);

			// Returns obj of what to display (for ui.displayInfo).
			// world[x][y] is a pointer into an instance which has click method
			var obj = world[x][y].click();

			that.selected = world[x][y];
			ui.displayInfo(obj);
		} else {
			that.showMenu();
		}
	},

	highlighted: [0,0],
	highlight(e) {
		// when user scrolls mouse over canvas, this will activate
		// and gives x, y to canvas for which block to highlight
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