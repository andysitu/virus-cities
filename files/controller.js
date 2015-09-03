var controller = {
	// x & y might be used later in order to change which
	// part of map is displayed.
	x: 0,
	y: 0,
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
	
	// If canvasMenu is false, click will run as it normally does
	// meaning that clicks will register to map. Else, if it is
	// not false, it'll point to a function that'll will when
	// use clicks.
	_canvasMenu: false,
	set canvasMenu(status) { this._canvasMenu = status; },
	get canvasMenu() { return this._canvasMenu; },
	// menu is for the city selections. Prevents keypresses.
	_menu: false,
	set menu(status) { this._menu = status; },
	get menu() { return this._menu; },

	// There is a start menu due to plans later (options selected by player)
	startMenu() {
		// Note: it sets CanvasMenuStatus to point to startGame!
		this.canvasMenu = this.startGame;
		display.displayStartMenu();
	},
	startGame() {
		this.canvasMenu = false;
		p1 = new Player();
		p1.dispInfo();
		map.makeMap();
		display.startGame();
	},
	keyPressed(e) {
		//Note: keyCode is deprecated
		var that = controller;

		if (that.canvasMenu == false) {
			switch(true) {
				case (e.keyCode == 32): // space
					ui.displayMenu("menu", that.selected.click());
					e.preventDefault();
					that.menu = true;
					break;
				case (that.menu == true && e.keyCode == 83):
					var sel = that.selected;
					if (sel instanceof Land) {
						that.settle(p1, sel);
						that.menu = false;
					} else {
						ui.display("That's not land.");
					}
					break;
			};
		}
	},
	// reference to instance that user has selected
	selected: null,
	
	clicked(e){
		// handles click of user. Displays info of the clicked
		// cell normally by calling on ui.
		var that = controller;
		that.menu = false;

		if (that.canvasMenu == false) {
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
			(that.canvasMenu).bind(that)();
		}
	},

	highlighted: [0,0],
	highlight(e) {
		// when user scrolls mouse over canvas, this will activate
		// and gives x, y to canvas for which block to highlight
		var that = controller;
		if (that.canvasMenu == false) {
			var hl = that.highlighted,
				blockSize = that.blockSize;

			var x = Math.floor( (e.clientX - that.offsetLeft) / blockSize),
				y = Math.floor( (e.clientY - that.offsetTop) / blockSize);
			if (hl[0] != x || hl[1] != y) {
				that.highlighted = [x,y];

				display.highlight(x,y);
			}
		}	
	},
	settlements: {},

	settle(player, land) {
		var settlement = new Settlement(land),
			coord = land.getCoord();

		this.settlements["settlement" + player.count] = settlement;
		map.setBlock(coord.x, coord.y, settlement);
		player.change(-land.cost, 1);
		ui.display("You settled at " + coord.x + ", " + coord.y);
	}
};