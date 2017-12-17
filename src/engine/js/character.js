// Character Macros
Macro.add('character', {
	handler : function() {
		if (this.args.length < 2) {
			return this.error('incorrect number of arguments');
		} else {
			if (this.args[0] == "init") {

				if (this.args[1] in variables().characters) {
					return this.error('character ids must be unique');
				}

				else {
					var character = {
						"id": this.args[1],
						"name": this.args[1],
						"image": "none",
						"conversation": ""
					}
					variables().characters[character.id] = character;
					console.log(variables().characters);
				}

			} else if (this.args[0] == "setname") {

				var character = variables().characters[this.args[1]];
				character.name = this.args[2];

			} else if (this.args[0] == "move") {

				/*var character = variables().characters[this.args[1]];
				variables().rooms[this.args[2]].characters.push(character);*/
				var roomDest = variables().rooms[this.args[2]];
				var roomSource;
				var rm;
				for (rm in variables().rooms) {
					var i;
					for (i = 0; i < variables().rooms[rm].characters.length; i++) 					{
						var character = variables().rooms[rm].characters[i];
						if (character.id == this.args[1]) {
							roomSource = rm;
							break;
						}
					}
				}
				if (roomSource) {
					var character = variables().characters[this.args[1]];
					variables().rooms[this.args[2]].characters.push(character);
					console.log("Before delete:");
					console.log(variables().rooms[roomSource].characters);

					var x;
					for (x = 0; x < variables().rooms[roomSource].characters.length; x++) {
						if (variables().rooms[roomSource].characters[x].id == character.id) {
								variables().rooms[roomSource].characters.splice(x, 1);
								break;
						}
					}

					//variables().rooms[roomSource].characters.delete(character);
					console.log("After delete:");
					console.log(variables().rooms[roomSource].characters);
				} else {
					var character = variables().characters[this.args[1]];
					variables().rooms[this.args[2]].characters.push(character);
				}

			} else if (this.args[0] == "setimage") {

				var character = variables().characters[this.args[1]];
				character.image = this.args[2];

			} else if (this.args[0] == "conversation") {

				var character = variables().characters[this.args[1]];
				character.conversation = this.args[2];

			} else if (this.args[0] == "talk") {

				var character = variables().characters[this.args[1]];

				var $wrapper  = $(document.createElement('span'));
				var className = 'macro-' + this.name;
				var content;
				var i;

				if (character.conversation != "") {
					content = "[[Talk|" + character.id + "_" + character.conversation + "_conversation]]";
				} else {
					content = 'Error: No Conversation Tag Found';
				}

				$wrapper
				.wiki(content)
				.addClass(className)
				.appendTo(this.output);

			}

		}
	}
});
