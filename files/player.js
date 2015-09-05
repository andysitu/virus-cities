function Player() {
	this.money = 20000;
	this.count = 0;
	this.cities = {};
}

// any changes to prototype will lead to change in
// pstatus div changing.
Player.prototype.change = function(moneyValue, count) {
	if (-moneyValue <= this.money) {
		this.money += moneyFormatter(moneyValue);
		this.count += count;
		this.dispInfo();
		return true;
	} else {
		return false;
	}
};

Player.prototype.dispInfo = function() {
	pstatus.displayInfo({
		"money": "$" + makeCommas(this.money),
		"# of cities": this.count
	});
};

Player.prototype.addCity = function(city) {
	var str = city.x + "_" + city.y;
	this.cities[str] = city;
};

Player.protoype.removeCity = function(city) {
	var str = city.x + "_" + city.y;
	delete obj[str];
};
};