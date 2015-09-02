function Land(x,y) {
	this.fertility = Math.floor(Math.random() * 1000); 
	this.livestock = Math.floor(Math.random() * 4901) + 100;
	this.resistance = Math.floor(Math.random() * 5) + 1;
	this.id = "land";
	this.x = x;
	this.y = y;
}

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
}

Land.prototype.infect = function(virusAmount) {
	var log = Math.log(VirusAmount),
		fert = this.fertility,
		live = this.livestock
		res = this.resistance;

	var fert = log / res,
		live = log,
		res = log * 0.01;

	this.changeAmounts(fert, live, res);
}