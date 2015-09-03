function Player() {
	this.money = 20000;
	this.count = 0;
}

// any changes to prototype will lead to change in
// pstatus div changing.
Player.prototype.change = function(moneyValue, count) {
	this.money += moneyValue;
	this.count += count;
	this.dispInfo();
};

Player.prototype.dispInfo = function() {
	pstatus.displayInfo({
		"money": "$" +this.money,
		"# of cities": this.count
	});
};