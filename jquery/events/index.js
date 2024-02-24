// document.ready() is deprecated, wrap code in a function prefixed with $ instead
$(function () {
  // If a paragraph element is clicked, print message to console
  // $("p").click(function () {
  //   console.log("You clicked a paragraph");
  // });

  // using the on method, any number of events can be added here
  $("p").on("click mouseEnter mouseleave", function () {
    console.log("You interacted with a paragraph");
  });

  // more advanced on usage, passing an obj
  $("p").on({
    click: function () {
      console.log("clicked");
    },
    mouseover: function () {
      console.log("hovered");
    },
  });

  // remove an event listener with .off
  $("p").off("click");

  // limit with .one()
  $("p").one({
    dblclick: function () {
      console.log("You double clicked! This message will only display once");
    },
  });

  // in jquery, most DOM events have a jQuery method
  // examples:
  // dblclick, mouseenter, mouseleave, mousedown, mouseup, hover

  // $("p").mouseleave(function () {
  //   console.log("Your mouse left the paragraph");
  // });
  // $("p").mouseenter(function () {
  //   console.log("Your mouse entered the paragraph");
  // });

  // hover is a combination of two functions, mouseenter and mouseleave
  $("p").hover(
    function () {
      console.log("You entered.");
    },
    function () {
      console.log("You left");
    }
  );

  // form events: focus, blur, change
  // focus listens for an form element to be in focus
  $("input").focus(function () {
    console.log("You selected the input field");
  });

  // blur listens for user to leave field
  $("input").blur(function () {
    console.log("You left the input field");
  });

  // listens for "enter" or for user to stop focusing on field
  // state must be modified from where it was when the user initially interacted with it
  $("input").change(function () {
    console.log("you entered something into the input field");
  });

  // these events are shorthand for the on method
});
