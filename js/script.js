$(document).ready(function() {

  $("#contact-form").validate();


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

});

