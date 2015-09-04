function Settlement(inherited) {
	// Idea here is that it inherits an Land instance and saves it
	this.inherited = inherited;
	this.id = "settlement";
	inheritLand(this, inherited);
}

Settlement.prototype.click = function() {
	return {
		type: this.id,
		fertility: this.fertility,
		livestock: this.livestock,
		resistance: this.resistance,
		"x, y": [this.x, this.y],
	};
};