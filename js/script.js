$(document).ready(function() {

  $("#contact-form").validate();

  $(window).scroll(function () {
    $(window).scrollTop() < 75 ? growHeading() : shrinkHeading()
  })

  function shrinkHeading() {
    TweenMax.to('#header-container', 0.5, { width: "25%" });
    TweenMax.to('#header-name', 0.5, { fontSize: "3.5rem", letterSpacing: "0.3rem" });
    TweenMax.to('#header-job-title', 0.5, { fontSize: "3rem", letterSpacing: "0rem", paddingLeft: "10%", onStart: function() {
        TweenMax.to('.header-nav', 1, { opacity: 1 });
        TweenMax.to('#header-projects', 0.5, { opacity: 0 });
        TweenMax.to('.projects-container', 1, { opacity: 1 });
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
        TweenMax.to('#header-projects', 0.5, { opacity: 1 });
        TweenMax.to('.projects-container', 0.5, { opacity: 0.2 });
      }
    });
  }

  $('#contact-link').on('click', function() {
    TweenMax.to('#contact', 0.4, { opacity: 1, display: 'block' });
    TweenMax.to('#main-bg-cover', 0.1, { display: 'block' });
  })

  $('#main-bg-cover, #contact-close').on('click', function() {
    TweenMax.to('#contact', 0.4, { opacity: 0, display: 'none' });
    TweenMax.to('#main-bg-cover', 0.1, { display: 'none' });
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

  return tl;
}

