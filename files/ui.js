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
	displayInfo(type) {
	  // Note: obj is not that actual land instance. It's just
	  // the obj containing selected key & values.
		var str = this.selectedInfo(type);

		this.display(str);
	},
	selected: {},
	setSelected(obj) {
		this.selected = obj;
	},
	selectedInfo(type) {
	// Makes the string for displayInfo to use.
		var str = "Selected:\n",
			obj = this.selected;

		for (var key in obj) {
			str += " " + key + ": " + obj[key] + "\n";
		}

		if (type == "land") {
			str += "\nMenu:\nPress \"s\" to settle here";
		} else if (type == "settlement") {

		} else {
			throw "ui.selectedInfo: " + type;
		}

		return str;
	},
	noMoneySettle() {
		this.display("You don't have enough money to settle again.");
	},
	settle(x,y) {
		this.display("You settled at " + x + ", " + y);
	},
	notLand() {
		this.display("That's not land.");
	}
};