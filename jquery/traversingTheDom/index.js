// Traversing the DOM

$(function () {
  // selects the parent of the li element
  /*

  $("li").parent().css({
    // keys can be quoted or unquoted
    color: "chocolate",
    border: "2px solid chocolate",
  });
  */
  // remember to be as specific as possible
  /*

 $("span").parent().css({
   // there are multiple spans in the DOM
   color: "chocolate",
   border: "2px dashed black",
  });
  */
  // select all parent elements
  // $("li").parents().css({
  //   // there are multiple spans in the DOM
  //   color: "orange",
  //   fontWeight: "bold",
  // });
  // limit .parents() with parentsUntil()
  /*
  $("li")
  .parentsUntil("div")
  .css({ color: "chocolate", border: "2px solid chocolate" });
  */
  // only selects direct descendants
  // $("span").children().css({ color: "chocolate", border: "2px solid chocolate" });
  /*

  // filter
  $("span")
  .children("h2")
  .css({ color: "chocolate", border: "2px solid chocolate" });
  */
  // find - selects descendants
  // $("ul").find("p").css({ color: "chocolate", border: "2px solid chocolate" })
  /*
     // all descendants
     $("ul").find("*").css({ color: "chocolate", border: "2px solid chocolate" })
     */

  // siblings() or siblings("p")
  // $("h2").siblings().css({ color: "chocolate", border: "2px solid chocolate" })

  // next sibling
  // $("h2").next().css({ color: "chocolate", border: "2px solid chocolate" })

  // previous .prev()
  // $("h2").prev().css({ color: "chocolate", border: "2px solid chocolate" })

  /*
  // nextAll/prevAll

  $("h2").nextAll().css({ color: "chocolate", border: "2px solid chocolate" })
  $("h2").prevAll().css({ color: "chocolate", border: "2px solid chocolate" })
  */

  // nextUntil/prevUntil
  $("span.child")
    .nextUntil("p")
    .css({ color: "chocolate", border: "2px solid chocolate" });
});
