$(document).ready(function() {

// Slow-scroll to linked sections
$('a[href*="#"]:not([href="#"])').click(function() {
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
$("#contact-form").validate();

// Remove internal link hash from URL
if(window.location.hash === "projects" || window.location.hash === "contact-me") {
  loadContent(window.location.hash);
}

function animate() {
  var masterTL= new TimelineMax({ paused: true });
  masterTL.add(reveal())
          .play();
}

function reveal() {
  var tl = new TimelineMax();
    tl.to('#main-background', 1, {opacity: 1, ease:Expo.easeOut}, 0.1);
    tl.to(['#main-container','#header-container', '#bio-container', '#projects', '.projects-container', '#contact'], 0.5, {opacity: 1, ease:Quad.easeOut}, 0.1);
  return tl;
}

animate();



}); // End of document.ready