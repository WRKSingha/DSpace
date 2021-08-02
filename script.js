// smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

//nav-bar
$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

$('.nav a').click(function () {
  $(".menu-toggle").toggleClass("is-active");
  $(".nav").toggleClass("mobile-nav");
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

// owl carousel
$(document).ready(function(){
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false,
      },
      600:{
        items: 2,
        nav: false,
      },
      1000:{
        items: 3,
        nav: false,
      }
    }
  });
});
