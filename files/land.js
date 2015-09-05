function inheritLand(context, land){
	(function(land){
		this.fertility = land.fertility 
		this.livestock = land.livestock
		this.resistance = land.resistance
		this.x = land.x;
		this.y = land.y;
	}).call(context, land)
}

function Land(x,y) {
	this.fertility = Math.floor(Math.random() * 1000); 
	this.livestock = Math.floor(Math.random() * 500);
	this.resistance = Math.floor(Math.random() * 5) + 1;
	this.id = "land";
	this.x = x;
	this.y = y;
	this.cost = 10000;

	// This will be persistence in all instances (even inherited);
	this.type = "land";
}

Land.prototype.getCoord = function() {
	return {x: this.x, y: this.y};
};

Land.prototype.changeAmounts = function(fert,live,res) {
	if (fert == undefined) { fert = 0; }
	if (live == undefined) { live = 0; }
	if (res == undefined) { res = 0; }
	this.fertility += fert;
	this.livestock += live
	this.resistancce += res;

	if (this.resistance < 1) {
		this.resistance = 1;
	}
};

Land.prototype.infect = function(virusAmount) {
	var log = Math.log(VirusAmount),
		fert = this.fertility,
		live = this.livestock
		res = this.resistance;

	var fert = log / res,
		live = log,
		res = log * 0.01;

	this.changeAmounts(fert, live, res);
};

Land.prototype.click = function() {
	return {
		type: this.id,
		fertility: this.fertility,
		livestock: this.livestock,
		resistance: this.resistance,
		"x, y": [this.x, this.y],
		"cost to settle here": this.cost
	};
};