function Player() {
	this.money = 20000;
}

Player.prototype.change = function(moneyValue) {
	this.money += moneyValue;
	this.dispInfo();
};

Player.prototype.dispInfo = function() {
	pstatus.displayInfo({
		"money": "$" +this.money
	});
};