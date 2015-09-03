// There is an intentional link between Player and pstatus.

pstatus = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width;
		this.height = height;
		status_display.style.width = width + "px";
		status_display.style.height = height + "px";
	},
	display(str) {
		status_display.textContent = str;
	},
	displayInfo(obj) {
		var str = this.selectedInfo(obj);

		this.display(str);
	},
	selectedInfo(obj) {
		var str = "";

		for (var key in obj) {
			str += " " + key + ": " + obj[key] + "\n";
		}

		return str;
	}
}