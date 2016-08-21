$(document).ready(function() {

  $("#contact-form").validate();

  $(window).scroll(function () {
    $(window).scrollTop() < 125 ? growHeading() : shrinkHeading()
  })

  function shrinkHeading() {
    TweenMax.to('#header-container', 0.5, { width: "25%" });
    TweenMax.to('#header-name', 0.5, { fontSize: "3.5rem", letterSpacing: "0.3rem" });
    TweenMax.to('#header-job-title', 0.5, { fontSize: "3rem", letterSpacing: "0rem", paddingLeft: "10%", onStart: function() {
        TweenMax.to('.header-nav', 1, { opacity: 1 });
        TweenMax.to('#header-projects', 0.5, { opacity: 0 });
        TweenMax.to('.project-wrap', 2, { opacity: 1 });
      }
    });
  }

  function growHeading() {
    TweenMax.to('#header-container', 0.5, { width: "40%" });
    TweenMax.to('#header-name', 0.5, { fontSize: "10rem" });
    TweenMax.to('#header-job-title', 0.5, {
      fontSize: "3.5rem",
      onStart: function() {
        TweenMax.to('.header-nav', 0.5, { opacity: 0 });
        TweenMax.to('#header-projects', 1, { opacity: 1 });
        TweenMax.to('.project-wrap', 1, { opacity: 0 });
      }
    });
  }


  $('#mazda_970x250').on('click', function() {
    TweenMax.to('#display-work-bg-cover, #digital-display-target', 0.1, { display: 'block' });
    $('body').addClass('noscroll');
    $('#digital-display-target').append('<iframe id="digital-display-iframe" src="./display-work/mazda_970x250/index.html">Not supported</iframe>');
    TweenMax.to('#digital-display-iframe', 0.1, { display: 'block' });
  })

 $('#display-work-bg-cover').on('click', function() {
    TweenMax.to('#display-work-bg-cover, #digital-display-target', 0.1, { display: 'none' });
    $('body').removeClass('noscroll');
    $('#digital-display-iframe').remove();
  })

  $('#contact-link').on('click', function() {
    TweenMax.to('#contact', 0.4, { opacity: 1, display: 'block' });
    $('body').addClass('noscroll');
    TweenMax.to('#contact-bg-cover', 0.1, { display: 'block' });
  })

  $('#contact-bg-cover, #contact-close').on('click', function() {
    TweenMax.to('#contact', 0.4, { opacity: 0, display: 'none' });
    $('body').removeClass('noscroll');
    TweenMax.to('#contact-bg-cover', 0.1, { display: 'none' });
  })

  animate();

});

function animate() {
  var masterTL = new TimelineMax({ paused: true });
  masterTL.add(fadeUp())
          .play();
}

function fadeUp() {
  var tl = new TimelineMax();
  tl.to('#main-background', 2, { opacity: 1, ease: Expo.easeOut }, 0.2);
  tl.to('#main-container', 0.75, {
    opacity: 1,
    ease: Quad.easeOut
  }, 0.2);
  tl.to('#header-container', 0.75, { opacity: 1, left: 0, ease: Quad.easeOut }, 0.5);
  tl.to('#header-projects', 0.75, {scale: 1.05, yoyo: true, repeat: -1}, 0.5);
  return tl;
}

