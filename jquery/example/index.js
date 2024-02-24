// Syntax for jQuery
// $(selector).action()

// $(document).ready() is deprecated
// use $(function(){...}); instead

// use a document.ready event to wrap your code
// this prevents js from executing before the DOM has finished loading
// on button click hide all p elements

// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").hide();
//   });
// });

// on button click hide element with id="cereal"
// $(document).ready(function () {
//   $("button").click(function () {
//     $("#cereal").hide();
//   });
// });

// select a .class
$(document).ready(function () {
  $("button").click(function () {
    $(".unicycle").hide();
  });
});
