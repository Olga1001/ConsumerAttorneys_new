$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").slideToggle(300);
  });

});