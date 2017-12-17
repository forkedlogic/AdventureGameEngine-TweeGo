// <<image>> macro
Macro.add('achievement', {
  handler : function () {

    var $wrapper  = $(document.createElement('div'));
    var className = "ach";
    var content = "<div class=\"text_wrap\"><p class=\"title\">Achievement!</p><span class=\"detail\">you achieved something</span></div><script>function achievementUnlocked(text){ var hasClass = $('.ach').hasClass('achieved'); if (hasClass){ return; } $('.title').html(\"Achievement Unlocked!\"); $('.detail').html(text); $('.ach').addClass(\"achieved\"); setTimeout(function(){ $('.ach').removeClass(\"achieved\"); },5000) } achievementUnlocked(\"" + this.args[0] + "\");</script>\\";

    $wrapper
    .wiki(content)
    .addClass(className)
    .appendTo(this.output);
  }
});
