function Settlement(inherited) {
	// Idea here is that it inherits an Land instance and saves it
	this.inherited = inherited;
	this.id = "settlement";
	inheritLand(this, inherited);
	this.population = 100 + Math.round(Math.random() * 400);
	this.employed = 0;
	this.infected = 0;
	this.profit = 0;
	this.treasure = 0;
	this.food = 0;

	// This will be persistence in all instances (even inherited);
	this.type = "settlement";
}

Settlement.prototype.click = function() {
	return {
		type: this.id,
		fertility: this.fertility,
		livestock: this.livestock,
		resistance: this.resistance,
		"x, y": [this.x, this.y],
		population: this.population,
		food: this.food
	};
};

Settlement.prototype.calculatePop = function() {
	this.population += Math.floor( this.food / 100 * (this.population - this.infected) );
};

Settlement.prototype.run = function() {
	this.calculatePop();
};