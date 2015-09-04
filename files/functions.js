function moneyFormatter(value) {
	// Makes number into correct format for money
	return Math.round(parseFloat(value) * 100) / 100
}

function makeCommas(value) {
	if (typeof value == 'number') {
		value = String(value);
	}
	return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}