// <<red>> macro
Macro.add('red', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "red";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<blue>> macro
Macro.add('blue', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "blue";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<pink>> macro
Macro.add('pink', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "pink";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<orange>> macro
Macro.add('orange', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "orange";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<purple>> macro
Macro.add('purple', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "purple";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<green>> macro
Macro.add('green', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "green";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<brown>> macro
Macro.add('brown', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "brown";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<black>> macro
Macro.add('black', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "black";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});

// <<white>> macro
Macro.add('white', {
	tags : null,
	handler : function () {
		var $wrapper  = $(document.createElement('span'));
		var className = "white";
		var content   = this.payload[0].contents;

		$wrapper
		.wiki(content)
		.addClass(className)
		.appendTo(this.output);
	}
});
