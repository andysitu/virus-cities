pstatus = {
	width: 0,
	height: 0,
	setWidthHeight(width, height) {
		this.width = width;
		this.height = height;
		status_display.style.width = width + "px";
		status_display.style.height = height + "px";
	}
}