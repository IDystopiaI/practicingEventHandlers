// using $("selector").hide() to toggle visibility instead of setting display properties

// document.ready() is deprecated
$(function () {
  // $("img").hide();
  // hide also takes string arguments like slow, normal or fast, or time as a number in ms
  // number can be either a string or a Number data type
  // may have some issues with race conditions due to js being asynchronous
  $("img").hide("slow");
  $("img").show(1500);

  // $("h1").hide("500");
  // $("h1").show(1500);

  // slide up is responsible for hiding an element
  // slide down reveals an element
  // $(".p1").slideUp("slow");
  // $(".p1").slideDown("slow");

  // $(".p2").fadeOut("slow");
  // $(".p2").fadeIn(1500);

  $(".p3").toggle();
  $(".p3").slideToggle(1000);

  $("h1").hide(1000);
  // methods can execute asynchronously
  // the color blue is added before the element is fully hidden
  $("h1").fadeIn(2000).addClass("blue");

  // use an animation callback if you would like to defer until after something has happened
  $(".p4").hide("500");
  $(".p4").fadeIn(2000, function () {
    $(this).addClass("cyan");
  });

  // stop an animation using a callback
  // the element we are stopping the animation on does not need to be related to the element with the click event
  $("img").on("click", function () {
    $("h1").stop();
  });

  $(".p3").hide(500).delay(1000).show(300);
});
