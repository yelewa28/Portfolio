$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// Animation Portfolio
let boxLift = document.querySelectorAll(".box-container .box.l");
let boxRight = document.querySelectorAll(".box-container .box.r");
let i = 0;
let g = 0;
window.onscroll = function () {
  if (window.scrollY >= boxLift[i].offsetTop - 400) {
    boxLift[i].style.cssText = "left: 0;";
    if (i == boxLift.length - 1) {
      return false;
    }
    i++;
  }
  if (window.scrollY >= boxRight[g].offsetTop - 400) {
    boxRight[g].style.cssText = "right: 0;";
    if (g == boxRight.length - 1) {
      return false;
    }
    g++;
  }
};
