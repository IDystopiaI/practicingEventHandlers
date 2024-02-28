// comparing jQuery and vanilla js
const $otherElement = "<div class='$otherElement'></div>";
const otherElement = "<div class='$otherElement'></div>";

// jQuery way
let $elem = $(".someClass");
$elem.remove();
$elem.prepend($otherElement);
$elem.before($otherElement);
$elem.after($otherElement);
$elem.replaceWith($otherElement);
$elem.closest("div"); // parent

$elem.fadeIn();

$elem.animate(
  {
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px",
  },
  1500
);

// AJAX
$.ajax("https://some.url", {
  success: (data) => {
    /* do something with data */
  },
});

// vanilla JavaScript
let elem = document.querySelector(".someClass");
elem.remove();
elem.prepend(otherElement);
elem.before(otherElement);
elem.after(otherElement);
elem.replaceWith(otherElement);
elem.closest("div"); // parent

// see style.css for initial element state
elem.style.display = "block";
requestAnimationFrame(() => (elem.style.opacity = 1));

// using web animations API
// more powerful than jQuery, able to specify frames
elem.animate(
  [
    {
      transform: "translateY(-1000px) scaleY(2.5) scaleX(2.5)",
      transformOrigin: "50% 0",
      filter: "blur(40px)",
      opacity: 0,
    },
    {
      transform: "translateY(0) scaleY(1) scaleX(1)",
      transformOrigin: "50% 50%",
      filter: "blur(0)",
      opacity: 1,
    },
  ],
  1000
);

// fetch API
fetch("https://some.url")
.then(response => response.json())
.then(data => {
  // do something with data
})

