// Energy Macros
Macro.add('energy', {
	handler : function() {
		if (this.args.length < 1) {
			return this.error('incorrect number of arguments');
		} else {
			if (this.args[0] == "add") {

				var energy = variables().energy.current;
				var max = variables().energy.max
				var res = energy + parseInt(this.args[1]);

				if (res < 0) {
					variables().energy.current = 0;
				} else if (res > max) {
					variables().energy.current = max;
				} else {
					variables().energy.current = res;
				}

			} else if (this.args[0] == "sub") {

				var energy = variables().energy.current;
				var max = variables().energy.max
				var res = energy - parseInt(this.args[1]);

				if (res < 0) {
					variables().energy.current = 0;
				} else if (res > max) {
					variables().energy.current = max;
				} else {
					variables().energy.current = res;
				}

			} else if (this.args[0] == "set") {

				var energy = variables().energy.current;
				var max = variables().energy.max
				var res = this.args[1];

				if (res < 0) {
					variables().energy.current = 0;
				} else if (res > max) {
					variables().energy.current = max;
				} else {
					variables().energy.current = res;
				}

			} else if (this.args[0] == "setmax") {

				var max = variables().energy.max;
				variables().energy.max = parseInt(this.args[1]);

			} else if (this.args[0] == "setcost") {

				var cost = variables().energy.cost;
				variables().energy.cost = parseInt(this.args[1]);

			} else if (this.args[0] == "setday") {

				var day = variables().energy.day;
				variables().energy.day = parseInt(this.args[1]);

			} else if (this.args[0] == "setcollapse") {

				variables().energy.collapse = this.args[1];

			} else if (this.args[0] == "sleep") {

				var day = variables().energy.day;
				var max = variables().energy.max;
				variables().energy.day = day + 1;
				variables().energy.current = max;

			}
		}
	}
});
