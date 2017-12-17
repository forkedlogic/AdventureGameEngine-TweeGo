// Room Macros
Macro.add('room', {
	handler : function() {
		if (this.args.length < 2) {
			return this.error('incorrect number of arguments');
		} else {
			if (this.args[0] == "init") {

				if (this.args[1] in variables().rooms) {
					return this.error('room ids must be unique');

				}
				else {
					var room = {
						"id": this.args[1],
						"name": this.args[1],
						"image": true,
						"linkimage": "none",
						"exits": [],
						"items": [],
						"characters": []
					}
					variables().rooms[room.id] = room;
				}

			} else if (this.args[0] == "setname") {

				var room = variables().rooms[this.args[1]];
				room.name = this.args[2];

			} else if (this.args[0] == "setimage") {

				var room = variables().rooms[this.args[1]];
				room.linkimage = this.args[2];

			} else if (this.args[0] == "addexit") {

				var room = variables().rooms[this.args[1]];
				if (!room.exits.contains(this.args[2])) {
					room.exits.push(this.args[2]);
				}

			} else if (this.args[0] == "delexit") {

				var room = variables().rooms[this.args[1]];
				if (room.exits.contains(this.args[2])) {
					room.exits.delete(this.args[2]);
				}

			} else if (this.args[0] == "additem") {

				var room = variables().rooms[this.args[1]];
				if (!room.items.contains(this.args[2])) {
					room.items.push(this.args[2]);
				}

			} else if (this.args[0] == "delitem") {

				var room = variables().rooms[this.args[1]];
				if (room.items.contains(this.args[2])) {
					room.items.delete(this.args[2]);
				}

			} else if (this.args[0] == "moveitem") {

				var roomDest = variables().rooms[this.args[1]];
				var roomSource;
				var key;
				for (key in variables().rooms) {
					if (variables().rooms[key].items.contains(this.args[2])) {
						roomSource = variables().rooms[key];
						break;
					}
				}
				if (!roomDest.items.contains(this.args[2])) {
					roomSource.items.delete(this.args[2]);
					roomDest.items.push(this.args[2]);
				}

			} else if (this.args[0] == "image") {

				var room = variables().rooms[this.args[1]];

				if (this.args[2] == "true") {
					room.image = true;
				} else if (this.args[2] == "false") {
					room.image = false;
				}

			}
		}
	}
});
