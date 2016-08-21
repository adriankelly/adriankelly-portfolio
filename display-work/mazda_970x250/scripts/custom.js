ready(InitHandler);

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


function InitHandler() { Animate(); };


  //////////////////////////
  // Exit Handler & Kills //
  //////////////////////////

  var container = document.getElementById('container');

  function kill() {
    TweenMax.killAll();
  }


  ////////////////
  // Animations //
  ////////////////

  function Animate() {

    var master = new TimelineMax({
      pause: true
    });

  container.onclick = function() {
    master.seek(30);
  };


    /* beautify preserve:start */
    master.add(revealAd())
          .add(scene1(), "scene1")
          .add(moveCarLeft('#fr1_bg1'), "scene1-=0.5")
          .add(scene2(), 3.2)
          .add(moveCarRight('#fr2_bg1'), 4)
          .add(scene3(), 6.8)
          .play();

    /**
     * Production Seeker
     */
    // master.seek(6);
    // master.pause(0.1);
    // master.timeScale(0.5);

    function revealAd() {
      var tl = new TimelineLite();
      tl.set('#container', {visibility:"visible"});
      return tl;
    }

    function moveCarLeft(backplate) {
      var tl = new TimelineLite();
      tl.to(backplate, 15, {x: 200});
      return tl;
    }

    function moveCarRight(backplate) {
      var tl = new TimelineLite();
      tl.to(backplate, 15, {x: -200});
      return tl;
    }

    function scene1() {
      var tl = new TimelineLite();
      tl.to('#gradient', 1, {x: -1940, ease: Expo.easeOut})
        .from('#fr1_title1', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 0.1)
        .from('#fr1_redline1', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 0.4)
        .to('#gradient', 4, {x: -2910, ease: Expo.easeInOut}, 2)
        .to('#fr1_title1', 1, {alpha: 0}, 3)
        .to('#fr1_redline1', 1, {alpha: 0}, 3)
        .to('#fr1_logo1', 1, {alpha: 0}, 3);
      return tl;
    }

    function scene2() {
      var tl = new TimelineLite();
      tl.to('#fr1_bg1', 1, {alpha:0, ease:Expo.easeIn}, "scene2_start")
        .to('#fr2_logo1', 1, {alpha: 1}, "scene2_start+=1")
        .from('#fr2_text1', 1, {alpha: 0, x: -970, ease: Expo.easeOut}, 1.3)
        .to('#gradient', 3.8, {x: -1940, ease: Expo.easeInOut}, 3)
        .to('#fr2_text1', 1, {alpha: 0}, 4)
        .to('#fr2_logo1', 1, {alpha: 0}, 4);
      return tl;
    }

    function scene3() {
      var tl = new TimelineLite();
      tl.to('#fr2_bg1', 1, {alpha:0, ease:Expo.easeIn}, "scene3_start")
        .to('#fr3_bg1', 10, {x: 125, ease: Expo.easeOut}, -0.5)
        .to('#fr3_logo1', 1, {alpha: 1}, "scene3_start+=1")
        .from('#fr3_title1', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 1.3)
        .from('#fr3_redline1', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 1.6)
        .from('#fr3_text1', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 1.9)
        .from('#fr3_text2', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 2.2)
        .from('#fr3_cta1', 1, {alpha: 0, x: 970, ease: Expo.easeOut}, 2.5)
        .from('#fr3_legal1', 1, {alpha: 0, top: 250, ease: Expo.easeOut}, 2.8);
      return tl;
    }

    /* beautify preserve:end */


    //////////////////////////
    // Animation Time Limit //
    //////////////////////////

    var maxAnimationTime = 14;
    TweenLite.delayedCall(maxAnimationTime, stopAnimation);

    function stopAnimation() {
      master.pause();
    }
  }

