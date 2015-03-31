$(document).ready(function() {
  console.log('main.js ready');
  scrollToSection();
});

function scrollToSection() {
  // on click for any nav item whose id begins with 'nav'
  $('[id^=nav]').click(function() {

    // to grab the id of the selected nav item, and dropping the first four characters 'nav-'
    var section = event.target.id.substring(4);
    console.log(section);

    $('html,body').animate({
      scrollTop: $('#'+section).offset().top
    }, 'slow');
  });
}

// redirect from blog to ../index.html and then scroll to section

