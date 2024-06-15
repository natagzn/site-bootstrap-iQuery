/* scripts.js */

$(document).ready(function() {
  // Плавна прокрутка до розділів по кліку на посилання навігаційного меню
  $('a.nav-link').on('click', function(event) {
      if (this.hash !== '') {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function() {
              window.location.hash = hash;
          });
      }
  });
});
