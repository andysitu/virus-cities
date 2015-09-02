function Settlement(inherited) {
	// Idea here is that it inherits an Land instance and saves it
	this.inherited = inherited;
	this.id = "settlement";
	inheritLand(this, inherited);
}

var test;