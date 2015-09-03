var ui = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width;
		this.height = height;
		menu.style.width = width + "px";
		menu.style.height = height + "px";
	},
	display(str) {
		menu.textContent = str;
	},
	displayInfo(obj) {
		var str = this.selectedInfo(obj);

		this.display(str);
	},
	selectedInfo(obj) {
		var str = "Selected:\n";

		for (var key in obj) {
			str += " " + key + ": " + obj[key] + "\n";
		}

		return str;
	},
	displayMenu(letter) {
		if (letter == "menu") {
			this.display("Menu");
		}
	}
}