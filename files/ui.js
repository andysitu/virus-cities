var ui = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width;
		this.height = height;
	},
	changeMenu() {
		menu.style.width = this.width + "px";
		menu.style.height = this.height + "px";
	},
	display(str) {
		menu.textContent = str;
	},
	displayInfo(obj) {
		var str = "";

		for (var key in obj) {
			str += " " + key + ": " + obj[key] + "\n";
		}

		this.display(str);
	}
}