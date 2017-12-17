// <<image>> macro
Macro.add('image', {
	tags : null,
	handler : function () {

		if (this.args[0] == "add") {

			var $wrapper  = $(document.createElement('span'));
			var className;
			var content;

			if (this.args.length == 2) {
				content   = "<a href='#' data-featherlight='" + this.payload[0].contents + "'><img src='" + this.payload[0].contents + "' /></a>";
				//content   = "<img src='" + this.payload[0].contents + "' />";
				className = this.args[1].trim();
			} else {
				content   = "<a href='#' data-featherlight='" + this.payload[0].contents + "'><img src='" + this.payload[0].contents + "' /></a>";
				className = "macro-image-wrapper";
			}

			$wrapper
			.wiki(content)
			.addClass(className)
			.appendTo(this.output);

		} else if (this.args[0] == "replace") {

			var $wrapper  = $(document.createElement('span'));
			var className;
			var content;
			var el;

			if (this.args.length == 2) {
				content   = "<a href='#' data-featherlight='" + this.payload[0].contents + "'><img src='" + this.payload[0].contents + "' /></a>";
				el = "." + this.args[1].trim();
				className = this.args[1].trim();
			} else {
				content   = "<a href='#' data-featherlight='" + this.payload[0].contents + "'><img src='" + this.payload[0].contents + "' /></a>";
				el = ".macro-image-wrapper";
				className = "macro-image-wrapper";
			}

			// use a postdisplay to get at the fully-rendered DOM
			postdisplay['insert-task-' + el] = function (taskName) {
				$(el).children().replaceWith(content);  // clear target element

				/*$wrapper
				.wiki(content)
				.addClass(className)
				.appendTo(el);*/

				delete postdisplay[taskName]; // single-use task

			}
		}
	}
});
