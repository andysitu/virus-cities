map = {
	lenX: 10,
	lenY: 10,
	setLenX(value){
		this.lenX = value;
	},
	setLenY(value){
		this.lenY = value;
	},
	world: [],
	getWorld() {
		return this.world;
	},
	changeWorld(x,y, obj) {
		this.world[x][y] = obj;
	},
	makeMap() {
	// makes an array of arrays containing the data points for the
	// map. If the given lens are too small, then it'll increase
	// the size of the map until it fits the entire canvas.
		var lenX = this.lenX,
			lenY = this.lenY,
			world = this.world,
			maxBlocks = display.getMaxBlocks();

		if (lenX < maxBlocks[0]) {
			this.setLenX(maxBlocks[0]);
			lenX = this.lenX;
		}
		if (lenY < maxBlocks[1]) {
			this.setLenY(maxBlocks[1]);
			lenY = this.lenY;
		}

		for (var i = 0; i < lenX; i++) {
			world.push([]);
			for (var j = 0; j< lenY; j++) {
				var land = new Land(i,j);
				world[i].push(land);
			}
		}
	}
}