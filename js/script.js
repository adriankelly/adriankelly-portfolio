$(document).ready(function() {


  // Slow-scroll to linked sections

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 600);
          return false;
        }
      }
    });




  // Validate contact form

  // $("#contact-me-form").validate();




  // Remove internal link hash from URL

  if(window.location.hash === "projects" || window.location.hash === "contact-me") {
    loadContent(window.location.hash);
  }


}); // End of document.ready