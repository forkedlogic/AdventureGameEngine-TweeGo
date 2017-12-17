// Money Macros
Macro.add('money', {
	handler : function() {
		if (this.args.length < 2) {
			return this.error('incorrect number of arguments');
		} else {
			if (this.args[0] == "add") {

				var money = variables().money.amount;
				variables().money.amount = money + parseInt(this.args[1]);

			} else if (this.args[0] == "sub") {

				var money = variables().money.amount;
				variables().money.amount = money - parseInt(this.args[1]);

			}
		}
	}
});
