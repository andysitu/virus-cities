var ui = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width - 5;
		this.height = height;
	},
	changeMenu() {
		menu.style.width = this.width + "px";
		menu.style.height = this.height + "px";
	}
}