//nav-bar
$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

// main_text animation
(function () {
  var home_text;
  $(document).ready(function () {
    return home_text.init();
  });
  home_text = {
    text: 'CODING MADE POSSIBLE!',
    index: 0,
    chars: 0,
    speed: 170,
    container: '.text .content',
    init: function () {
      this.chars = this.text.length;
      return this.write();
    },
    write: function () {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function () {
          return home_text.write();
        }, this.speed);
      }
    }
  };
}.call(this));