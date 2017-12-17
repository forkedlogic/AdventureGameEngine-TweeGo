// Player Macros
Macro.add('player', {
	handler : function() {
		if (this.args.length < 2) {
			return this.error('incorrect number of arguments');
		} else {
			if (this.args[0] == "setname") {

				variables().player.name = this.args[1];

			} else if (this.args[0] == "setroom") {

				variables().player.curRoom = this.args[1];

				if (variables().config.energy == true) {
					var res = variables().energy.current - variables().energy.cost;
					if (res > variables().energy.max) {
						res = variables().energy.max;
					} else if (res < 0) {
						res = 0;
						variables().player.curRoom = variables().energy.collapse;
					}
					variables().energy.current = res;
				}

			}
		}
	}
});
