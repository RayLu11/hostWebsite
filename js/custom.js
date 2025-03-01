(function ($) {

"use strict";

  // AOS ANIMATIONS
  AOS.init();

  // NAVBAR
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // Language switching functionality
  window.switchLanguage = function(lang, modalId) {
      const modal = document.getElementById(modalId);
      const enContent = modal.querySelector('.content-en');
      const zhContent = modal.querySelector('.content-zh');
      
      if (lang === 'en') {
          enContent.style.display = 'block';
          zhContent.style.display = 'none';
      } else {
          enContent.style.display = 'none';
          zhContent.style.display = 'block';
      }
  }

  // Show English content by default when modal opens
  document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('show.bs.modal', function () {
          const enContent = this.querySelector('.content-en');
          const zhContent = this.querySelector('.content-zh');
          enContent.style.display = 'block';
          zhContent.style.display = 'none';
      });
  });

  // NEWS IMAGE RESIZE
  function NewsImageResize(){
    $(".navbar").scrollspy({ offset: -76 });
    
    var LargeImage = $('.large-news-image').height();

    var MinusHeight = LargeImage - 6;

    $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
  }

  $(window).on("resize", NewsImageResize);
  $(document).on("ready", NewsImageResize);

  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 66
        }, 1000);
      }
    }
  });
  
})(window.jQuery);

  
