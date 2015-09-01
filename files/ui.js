var ui = {
	startWidth: 0,
	endWidth: 0,
	height: 0,
	setWidthHeight(start, end, height) {
		this.startWidth = start + 1;
		this.endWidth = end;
		this.height = height;
	}
}