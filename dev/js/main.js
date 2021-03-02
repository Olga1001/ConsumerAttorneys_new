$(document).ready(function () {
  // burder
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".navmenu").slideToggle(300);
  });

  // dropdown menu
  $(".menu-item").on("mouseover", function () {
    $(this).addClass('active');
    $(this).find(".menu-dropdown").slideDown(300);
  });
  $(".menu-item").on("mouseleave", function () {
    $(this).removeClass('active');
    $(this).find(".menu-dropdown").slideUp(300);
  });

  // asked dropdown
  $(".asked-action").click(function () {
    $(this).toggleClass('active').parents().siblings().find(".asked-action").removeClass('active');
    $(this).siblings().slideToggle(300).parents().siblings().find(".asked-dropdown").slideUp(300);
  });

  // scroll on section
  $("a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});

