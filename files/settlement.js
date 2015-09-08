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
	this.queue = {};
	this.buildings = [];

	// This will be persistence in all instances (even inherited);
	this.type = "settlement";
}

Settlement.prototype.click = function() {
	// info obj given to ui obj which will display as it is.
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

Settlement.prototype.addQueue = function(type, func, queueTime) {
	if (!(type in this.queue)) {
		this.queue[type] = {run: func, time: queueTime};
	} else {
		ui.queueInCityFull(this.x, this.y, type)
		// return false so that running functions could use
		// alternative type id if possible
		return false;
	}
};

Settlement.prototype.runQueue = function() {
	for (var key in this.queue) {
		if (this.queue[key].time <= 0) {
			this.queue[key].time--;
		} else {
			this.queue[key].run();
		}
	}
}

Settlement.prototype.calculatePop = function() {
	this.population += Math.floor( this.food / 100 * (this.population - this.infected) );
};

Settlement.prototype.run = function() {
	// Player instance calls on this for every settlement
	this.calculatePop();
	this.runQueue();
};

Settlement.prototype.increaseFood = function(value) {
	this.food += value;
}

Settlement.prototype.getPopulation = function() {
	return this.population;
}

Settlement.prototype.buildMenu = function() {
	this.build(Farm);
	console.log("I want to build a building!");
};

Settlement.prototype.build = function(Building) {
	var building = new Building();
	console.log(building);
}

Settlement.prototype.getType = function() {
	return this.type;
}