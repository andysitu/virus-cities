function Building() {
	this.type = "building";
}


function Farm() {
	this.id = "farm";
	this.cost = 500;
	this.foodProduction = 1;
	this.queue = 3;
}

Farm.prototype.build = function() {
	this.settlement = settlement;
	this.settlement.increaseFood(this.foodProduction);
}

Farm.prototype.run = function() {

};