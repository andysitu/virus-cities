var game = (function () {
	var prevTime = 0,
		loopId = 0;

	function runGameLoop() {
		var now = Date.now();

		if (now - prevTime > 1000) {
			p1.run();
			controller.run();

			prevTime = now;
		}

		loopId = window.setTimeout(runGameLoop, 350);
	}

	function killGameLoop() {
		window.clearTimeout(loopId);
	}

	return {
		run: runGameLoop,
		kill: killGameLoop
	};
})();
