$(document).ready(function () {


    (function (l) {
        var i, s = {
            touchend: function () {}
        };
        for (i in s) l.addEventListener(i, s)
    })(document); // sticky hover fix in iOS

    $('.mdl-layout__content').scroll(function() {
        if($('.mdl-layout__content').scrollTop() >= 50) {
            $('#js-header').addClass('header-bg', 250);
        } else {
            $('#js-header').removeClass('header-bg', 500);
        }
    })

    $('.read-more-wrap').click(function () {
        var btnText = $(this).children('.read-more-btn');
        var hiddenText = $(this).prev().children('li');

        if (!hiddenText.hasClass('active')) {
            $(this).parent().animate({
                top: '-289px'
            }, 300)
            hiddenText.parent().animate({
                opacity: '1'
            }, 300);
            hiddenText.show(300);
            btnText.html('Show Less');
            hiddenText.addClass('active');
        } else if (hiddenText.hasClass('active')) {
            hiddenText.hide(300);
            $(this).parent().animate({
                top: '0'
            }, 300);
            hiddenText.parent().animate({
                opacity: '0'
            }, 300);
            btnText.html('Read More');
            hiddenText.removeClass('active');
        }

    })

});

