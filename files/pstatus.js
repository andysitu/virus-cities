pstatus = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width;
		this.height = height;
	},
	changeMenu() {
		status_display.style.width = this.width + "px";
		status_display.style.height = this.height + "px";
	},
}