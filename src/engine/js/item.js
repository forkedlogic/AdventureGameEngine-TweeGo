// Item Macros
Macro.add('item', {
	handler : function() {
		if (this.args.length < 2) {
			return this.error('incorrect number of arguments');
		} else {
			if (this.args[0] == "init") {

				if (this.args[1] in variables().items) {
					return this.error('item ids must be unique');
				} else {
					var item = {
						"id": this.args[1],
						"name": this.args[1],
						"image": "none"
					}
					variables().items[item.id] = item;
				}

			} else if (this.args[0] == "setname") {

				var item = variables().items[this.args[1]];
				item.name = this.args[2];

			} else if (this.args[0] == "setimage") {

				var item = variables().items[this.args[1]];
				item.image = this.args[2];

			}
		}
	}
});
