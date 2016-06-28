$(document).ready(function() {

    // Validate contact form
    $("#contact-form").validate();

    // Remove internal link hash from URL
    if (window.location.hash === "projects" || window.location.hash === "contact-me") {
      loadContent(window.location.hash);
    }


    $('.header-nav').click(function(e) {

        // remove classes from all
        // $(".nav-links").removeClass("currentLink");
        // add class to the one we clicked
        $(e.target).toggleClass("currentLink");



        // TweenMax.to('#projects', 0.75, {opacity: 0, ease:Quad.easeOut});
        // TweenMax.to('#contact', 0.75, {opacity: 0, ease:Quad.easeOut});
        var clicked = $(e.target.hash);
        var clickedOp = clicked[0].style.opacity;

        if (clickedOp === '1') {
          TweenMax.to(e.target.hash, 0.75, { opacity: 0, ease: Quad.easeOut });
        } else {
          TweenMax.to(e.target.hash, 0.75, { opacity: 1, ease: Quad.easeOut });
        }
      })


    $('.projects-container').click(function(e) {
        // console.log($(this).children('div').children("a").attr("href"));
        window.location = $(this).children('div').children("a").attr("href");
      })

    $('.down-arrow').click(function() {
      $('#main-background-black').toggleClass('full-black');
      if ($('#main-background-black').hasClass('full-black')) {
        TweenMax.to('#header-container', 0.5, { width: "18%" });
        TweenMax.to('#header-name', 0.5, { fontSize: "2.5rem" });
        TweenMax.to('#header-job-title', 0.5, { fontSize: "1.3rem", letterSpacing: "0rem", onStart: function() {
            TweenMax.to('.header-nav', 1, { opacity: 1 });
          }
        });
        TweenMax.delayedCall(3, showProjects);
      } else {
        TweenMax.to('#header-container', 0.5, { width: "48%" });
        TweenMax.to('#header-name', 0.5, { fontSize: "10rem" });
        TweenMax.to('#header-job-title', 0.5, {
          fontSize: "3.5rem",
          onStart: function() {
            TweenMax.to('.header-nav', 1, { opacity: 0 });
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
    ease: Quad.easeOut,
    onStart: function() {
      $('a[href="#projects"]').addClass('currentLink');
    }
  }, 0.2);
  tl.to('#header-container', 0.75, { opacity: 1, left: 0, ease: Quad.easeOut }, 0.5);
  tl.to('#projects', 2, { opacity: 1, ease: Quad.easeOut }, 1.1);

  return tl;

}

function showProjects() {
  console.log('showProjects');
}

function hideProjects() {
  console.log('hideProjects');
}
