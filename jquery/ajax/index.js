/* eslint-disable-next-line */
function loadDoc() {
  $("#demo").load(
    "https://cors-anywhere.herokuapp.com/http://carnes.cc/code/ajax_example.txt"
  );

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
