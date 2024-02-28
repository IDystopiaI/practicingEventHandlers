// Adding and removing elements
$(function () {
  // equivalent to using .html with a callback to append to original
  $(".target")
    // append multiple items
    .append("<div class='child'>Append</div>", "<p> Hello!</p>")
    .prepend("<div class='child'>Prepend</div>")
    .before("<div class='sibling'>Before</div>")
    .after("<div class='sibling'>After</div>");

    $("p").append("<b>Spam!</b>")

    // .remove() removes the target and all of its child elements
    // $(".target").remove();
    // $("p").remove();  // removing all p elements

    // using a filter to selectively remove an element
    // selects all p elements and removes the one with a class of .filter
    $("p").remove(".filter")

    // .empty() keeps the target but removes all of child elements
    // $(".target").empty();
});
