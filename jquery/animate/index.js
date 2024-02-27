// jQuery .animate
// .animate takes CSS properties

// .animate(properties [,duration][, easing][, complete])

// alternate syntax
// .animate(properties, options)

/* basic animation demo
$("#go").click(function () {
  $("#block").animate(
    {
      opacity: 0.5,
      // marginLeft in js margin-left in CSS
      marginLeft: "+=50",
      height: "400px",
    },
    3000,
    // default is "swing" which is slow start and end
    "linear",
    function () {
      $(this).after("<div>Animation complete.</div>");
    }
    );
  });
*/

// chaining animations
$("#go").click(function () {
  $("#block")
    .animate({ width: "90%" }, 1000)
    .animate({ fontSize: "40px" }, 1000)
    .animate({ borderLeftWidth: "30px" }, 1000);
});
