map = {
	len1: 10,
	len2: 10,
	map: [],
	makeMap() {
		var len1 = this.len1,
			len2 = this.len2,
			map = this.map;

		for (var i = 0; i < len1; i++) {
			map.push([]);
			for (var j = 0; j< len2; j++) {
				map[i].push("e");
			}
		}
	},
}