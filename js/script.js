$(document).ready(function() {
  // Validate contact form
  $("#contact-form").validate();
  // Remove internal link hash from URL
  if (window.location.hash === "projects" || window.location.hash === "contact-me") {
    loadContent(window.location.hash);
  }

  // Go to project website
  $('.projects-container').click(function(e) {
    window.location = $(this).children('div').children("a").attr("href");
  })

  // Switch
    $('#switch').click(function() {
      $('#main-blackout').toggleClass('main-bg-blackout');
      if ($('#main-blackout').hasClass('main-bg-blackout')) {
        TweenMax.to('#header-container', 0.5, { width: "18%" });
        TweenMax.to('#header-name', 0.5, { fontSize: "2.5rem", letterSpacing: "0.3rem" });
        TweenMax.to('#header-job-title', 0.5, { fontSize: "1.3rem", letterSpacing: "0rem", onStart: function() {
            TweenMax.to('.header-nav', 1, { opacity: 1 });
            // $('a[href="#projects"]').addClass('currentLink');
          }
        });
        TweenMax.delayedCall(3, showProjects);
      } else {
        TweenMax.to('#header-container', 0.5, { width: "48%" });
        TweenMax.to('#header-name', 0.5, { fontSize: "10rem" });
        TweenMax.to('#header-job-title', 0.5, {
          fontSize: "3.5rem",
          onStart: function() {
            TweenMax.to('.header-nav', 0.5, { opacity: 0 });
          }
        });
        TweenMax.delayedCall(3, hideProjects);
      }
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
  tl.to('#down-arrow-bg', 1, { opacity: 1 }, 0.2);
  tl.to('#down-arrow-glow', 0.5, { opacity: 1, yoyo: true, repeat: 8, repeatDelay: 0.5 }, 2);
  tl.to('#main-container', 0.75, {
    opacity: 1,
    ease: Quad.easeOut
  }, 0.2);
  tl.to('#header-container', 0.75, { opacity: 1, left: 0, ease: Quad.easeOut }, 0.5);

  return tl;

}

function showProjects() {
  console.log('showProjects');
}

function hideProjects() {
  console.log('hideProjects');
}
