"use strict";

$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").slideToggle(300);
  }); // dropdown menu

  $(".menu-item").on("mouseover", function () {
    $(this).addClass('active');
    $(this).find(".menu-dropdown").slideDown(300);
  });
  $(".menu-item").on("mouseleave", function () {
    $(this).removeClass('active');
    $(this).find(".menu-dropdown").slideUp(300);
  });
});