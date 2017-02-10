$(document).ready(function () {


    (function (l) { var i, s = { touchend: function () { } }; for (i in s) l.addEventListener(i, s) })(document); // sticky hover fix in iOS

    $(function () {
        $("#main-nav-title").typed({
            strings: ["Adrian Kelly // Web Developer."],
            typeSpeed: 0,
            startDelay: 2000,
            cursorChar: "&#x2588;"
        });
    });



    $('.read-more-wrap').click(function() {
        var btnText = $(this).children('.read-more-btn');
        var hiddenText = $(this).prev().children('li');

    if (!hiddenText.hasClass('active')) {
        $(this).parent().animate({height: '700px'}, 300)
        hiddenText.show(300);
        btnText.html('Show Less');
        hiddenText.addClass('active');
    } else if (hiddenText.hasClass('active')) {
        hiddenText.hide(300);
        $(this).parent().animate({height: '289px'}, 300);      
        btnText.html('Read More');
        hiddenText.removeClass('active');
    }
        
    })

});