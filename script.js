$(document).ready(function () {
    console.log('ready');
    var loadMoreActive = false;
    $('.loadToggle').click(function (e) {
        var target = $(this);
        var hiddenText = target.parent().prev('.mdl-card__supporting-text').children('ul').children('li');
        var suppTextSize = $(hiddenText).length;
        if (!target.hasClass('active')) {
            $(hiddenText).show(300);
            target.html('Show Less');
            target.addClass('active');
        } else if (target.hasClass('active')) {
            $(hiddenText).hide(300);
            target.html('Read More');
            target.removeClass('active');
        }
    });



  $('.contact').on('click', function() {
    TweenMax.to('#contact', 0.4, { opacity: 1, display: 'block' });
    $('body').addClass('noscroll');
    TweenMax.to('#contact-bg-cover', 0.1, { display: 'block' });
  });

    $('#contact-bg-cover, #contact-close').on('click', function() {
    TweenMax.to('#contact', 0.4, { opacity: 0, display: 'none' });
    $('body').removeClass('noscroll');
    TweenMax.to('#contact-bg-cover', 0.1, { display: 'none' });
  });


(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS

});