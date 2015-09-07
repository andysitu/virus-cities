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
	});
};

Player.prototype.addCity = function(city) {
	var str = city.x + "_" + city.y;
	this.cities[str] = city;
};

Player.prototype.removeCity = function(city) {
	var str = city.x + "_" + city.y;
	delete this.cities[str];
};


Player.prototype.settle = function(land) {
	if (this.change(-land.cost, 1)) {
		var settlement = new Settlement(land),
			coord = land.getCoord();

		this.addCity(settlement);
		map.setBlock(coord.x, coord.y, settlement);
		return settlement;
	} else {
		ui.noMoneySettle();
	}
};

Player.prototype.run = function() {
	// This is run in the game loop.
	var cities = this.cities;

	for (var key in cities) {
		cities[key].run();
	}
}