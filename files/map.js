map = {
	len1: 10,
	len2: 10,
	world: [],
	getWorld() {
		return this.world;
	},
	makeMap() {
		var len1 = this.len1,
			len2 = this.len2,
			world = this.world;

		for (var i = 0; i < len1; i++) {
			world.push([]);
			for (var j = 0; j< len2; j++) {
				world[i].push("e");
			}
		}
	},
}