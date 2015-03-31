$(document).ready(function() {
  // console.log('main.js ready');
  // console.log('document url ' + document.URL); // w or wo index.html
  // console.log('location origin ' + location.origin);
  // console.log('location.protocol ' + location.protocol);
  // console.log('location.host ' + location.host);
  clickEventListeners();
});

function clickEventListeners() {
  console.log('define Location');
  // on click for any nav item whose id begins with 'nav'
  $('[id^=nav]').click(function(event) {

    var fullUrl = document.URL;
    var baseUrl = location.origin;

    if (fullUrl === baseUrl || fullUrl === baseUrl + '/index.html') {
      // if url is from index then prevent default
      event.preventDefault();

      // to grab the id of the selected nav item, and dropping the first four characters 'nav-'
      var section = event.target.id.substring(4);

      // will only run from the index
      $('html,body').animate({
        scrollTop: $('#'+section).offset().top
        }, 'slow');

    }
  });
}

