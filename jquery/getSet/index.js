// Don't forget to include #/. for id/class selectors
$(function () {
  $("#btn").click(function () {
    // select text within p tag using jquery
    // this only collects the text content and not any of the html
    // console.log($("#test").text());

    // print html to console <p id="">...</p>
    // console.log($("#test").html());

    console.log($("#fcc").attr("href"));
  });

  // select btn2 to set content
  /* no callback used
  $("#btn2").click(function () {
    // when a string is passed to text, it will replace the
    // existing text for the selected element
    $("#test").text("freeCodeCamp is awesome!");
  });
  */
  // using a callback
  $("#btn2").click(function () {
    // $("#test").text(function (i, origText) {

      // selecting all p elements instead of a single id
    $("p").text(function (i, origText) {
      // console.log(i, origText);
      // append text using a return statement
      return "Old text: " + origText + " New text: freeCodeCamp is awesome! (index: " + i + ")";
    });
  });

  // add HTML with .html()
  $("#btn3").click(function () {
    // use the .html() method to add html tags
    $("#test").html("freeCodeCamp is <b>awesome!</b>");
  });

  // set value of an input field with .val()
  $("#btn4").click(function () {
    $("#name").val("Spongebob Squarepants");
    // print the value to console
    console.log($("#name").val());
  });
});
