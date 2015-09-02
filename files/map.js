map = {
	lenX: 10,
	lenY: 10,
	world: [],
	getWorld() {
		return this.world;
	},
	makeMap() {
		var lenX = this.lenX,
			lenY = this.lenY,
			world = this.world;

		for (var i = 0; i < lenX; i++) {
			world.push([]);
			for (var j = 0; j< lenY; j++) {
				world[i].push("e");
			}
		}
	},
}