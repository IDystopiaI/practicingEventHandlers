$(function () {
  $("button").click(function () {
    // using the .css() method to fetch values of various css properties
    // both camelCase and kebab-case work, camel probably preferred
    // only returns the value of the first p element
    // console.log( $("p").css("fontSize"));
    console.log($("p").css("font-size"));
    // using . to select p element with a class of big
    // console.log($("p.big").css("fontSize"));

    // set a property
    // $("p.big").css("fontSize", "100px");

    // pass an {object} instead to set multiple properties at once
    // must use camelCase
    // best practice is to keep css in .css and use js to add/remove classes
    /*

    $("p").css({
      fontSize: "50px",
      fontFamily: ["Arial", "Consolas", "sans-serif"],
      color: "blue",
      backgroundColor: "yellow",
    });
    */

    // when using addClass(), do not include the "."
    $("h1").addClass("red");
    // $("p").removeClass("big");
    $("p").toggleClass("big");

    // check for presence of class
    console.log($("h2").hasClass("big"));
    console.log($("h2").hasClass("red"));
  });
});
