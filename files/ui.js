var ui = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width;
		this.height = height;
		menu.style.width = width + "px";
		menu.style.height = height + "px";
	},
	selected: {},
	setSelected(obj) {
		this.selected = obj;
	},
	display(str) {
		menu.textContent = str;
	},
	displayMsg(str) {
		var msg = this.selectedInfo() + "\n" + str;

		this.display(msg);
	},
	displayInfo(type) {
	  // Note: obj is not that actual land instance. It's just
	  // the obj containing selected key & values.
		var str = this.selectedInfo(type);
		
		if (type == "land") {
			str += "\nMenu:\nPress \"s\" to settle here";
		} else if (type == "settlement") {

		} else {
			throw "ui.selectedInfo: " + type;
		}

		this.display(str);
	},
	selectedInfo() {
	// Makes the string for displayInfo to use.
		var str = "Selected:\n",
			obj = this.selected;

		for (var key in obj) {
			str += " " + key + ": " + obj[key] + "\n";
		}

		return str;
	},
	noMoneySettle() {
		this.displayMsg("You don't have enough money to settle again.");
	},
	settle() {
		var sel = this.selected;
		this.displayMsg("You settled at " + sel["x, y"]);
	},
	notLand() {
		this.displayMsg("That's not land.");
	}
};