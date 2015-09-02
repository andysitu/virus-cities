var screen = {
	width: 0,
	height: 0,
	xCenter: 0,
	yCenter: 0,
	setWidthHeight(w, h) {
		this.width = w;
		this.height = h;
		this.xCenter = w/2;
		this.yCenter = h/2;
	},
	}
}