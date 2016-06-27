$(document).ready(function() {

// Validate contact form
$("#contact-form").validate();

// Remove internal link hash from URL
if(window.location.hash === "projects" || window.location.hash === "contact-me") {
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
  TweenMax.to(e.target.hash, 0.75, {opacity: 0, ease:Quad.easeOut});
  } else {
    TweenMax.to(e.target.hash, 0.75, {opacity: 1, ease:Quad.easeOut});
  }
})


$('.projects-container').click(function(e) {
  // console.log($(this).children('div').children("a").attr("href"));
  window.location = $(this).children('div').children("a").attr("href");
})



animate();

});


function animate() {
  var masterTL= new TimelineMax({ paused: true });

  masterTL.add(fadeUp())
          .play();
}

function fadeUp() {
  var tl = new TimelineMax();
    tl.to('#main-background', 2, {opacity: 1, ease:Expo.easeOut}, 0.2);
    tl.to('#down-arrow-bg', 1, {opacity: 1}, 0.2);
    tl.to('#down-arrow-glow', 1, {opacity: 1, yoyo:true, repeat: 8, repeatDelay: 0.5}, 2);
    tl.to('#main-container', 0.75, {opacity: 1, ease:Quad.easeOut, onStart:function() {
    $('a[href="#projects"]').addClass('currentLink');
    }}, 0.2);
    tl.to('#header-container', 0.75, {opacity: 1, left: 0, ease:Quad.easeOut}, 0.5);
    tl.to('#projects', 2, {opacity: 1, ease:Quad.easeOut}, 1.1);

  return tl;

}


$(function () {
    $(window).scroll(function () {
        var projectHeight = $(window).height() / 1.8;
        var arrowHeight = $(window).height() / 8;
        if ($(this).scrollTop() >= arrowHeight) {
          TweenMax.to('#down-arrow-bg', 0.5, {opacity: 0});
          TweenMax.to('#down-arrow-glow', 0.5, {opacity: 0, repeat: 0});
        } else {
        TweenMax.to('#down-arrow-bg', 1, {opacity: 1});
        TweenMax.to('#down-arrow-glow', 1, {opacity: 1, yoyo:true, repeat: 8, repeatDelay: 0.5});
        }


        if ($(this).scrollTop() >= projectHeight) {
         TweenMax.to('#header-name', 2, {fontSize: "2.5rem", ease:Expo.easeOut});
          TweenMax.to('#header-job-title', 2, {fontSize: "1.5rem", ease:Expo.easeOut});
          TweenMax.to('.header-nav li', 2, {fontSize: "2rem", ease:Expo.easeOut});
          TweenMax.to('#header-container', 2, {width: "18%", ease:Expo.easeOut});
          $('.header-nav').css("margin-top", "4%");
          $('.header-nav li').css("display", "block");
        } else {
          TweenMax.to('#header-name', 2, {fontSize: "8.5rem", ease:Expo.easeOut});
          TweenMax.to('#header-job-title', 2, {fontSize: "5rem", ease:Expo.easeOut});
          TweenMax.to('.header-nav li', 2, {fontSize: "2.2rem", ease:Expo.easeOut});
          TweenMax.to('#header-container', 2, {width: "48%", ease:Expo.easeOut});
          $('.header-nav').css("margin-top", "2%");
          $('.header-nav li').css("display", "inline-block");
        }
    });
});

