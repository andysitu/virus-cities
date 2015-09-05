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
	displayInfo(obj, type) {
	  // Note: obj is not that actual land instance. It's just
	  // the obj containing selected key & values.
		var str = this.selectedInfo(obj, type);

		this.display(str);
	},
	selectedInfo(obj, type) {
	// Makes the string for displayInfo to use.
		var str = "Selected:\n";

		for (var key in obj) {
			str += " " + key + ": " + obj[key] + "\n";
		}

		if (type == "land") {
			str += "\nMenu:\nPress \"s\" to settle here";
		} else if (obj instanceof Land) {
			
		} else {
			throw "ui.selectedInfo: " + type;
		}
			return str;
	}
}