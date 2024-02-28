/* eslint-disable-next-line */
function loadDoc() {
  // $get() similar to load but will not load data into an element
  $.get("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
    function (data, status) {
      console.log("Data: " + data + "\nStatus: " + status);
    })

    // $.post() is similar, but you are passing data to a server instead of asking for data
    // takes an extra parameter as an {object} to send data
    $.post("https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
    {
      name: "SpongeBob SquarePants",
      city: "Bikini Bottom"
    },
    // handle any server response
      function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
      })

  /*
  // load + optional callback and error handling
  $("#demo").load(
    "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
    // optional callback function
    function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success") {
        alert("External content loaded successfully!");
        // console.log(responseTxt);
        // responseTxt = Subscribe to the freeCodeCamp YouTube channel!
      }
      if (statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
    }
    );
    */
  // https://cors-anywhere.herokuapp.com/ proxy for dealing with insecure website/cors issue
  // normally you would want both websites to be secure and need to add specific headers
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status === 200) {
  //     document.getElementById("demo").innerHTML = this.responseText;
  //   }
  // };
  // xhttp.open(
  //   "GET",
  //   "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt",
  //   true
  // );
  // xhttp.send();
}
