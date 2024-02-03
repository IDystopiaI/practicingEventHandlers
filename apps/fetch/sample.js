/* fetch
    A function used for making HTTP requests to fetch resources.
    (JSON style data, images, files)
    Simplifies asynchronous data fetching in Javascript and
    used for interacting with APIS to retrieve and send data
    asynchronously over the web.

    Fetch has two arguments, a url and an object of options
    default is {method:"GET"} - to get a resource
    {method:"POST"} - send some data
    {method:"PUT"} - replace some data
    {method:"DELETE"} - delete some data
    fetch(url, {options})

*/
// example of a url which will return a 404
// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
// fetch returns a promise which means you need to handle a
// response (resolve, reject) and a rejection

// https://pokeapi.co/ is the api that will be used
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    // if the response is not ok, handle the error
    if (!response.ok) {
      throw new Error("Sorry, we could not fetch resource");
    }
    return response.json();
  })
  // data is just an arbitrary argument to handle the Promise response
  .then((data) => console.log(data.id))
  .catch((error) => console.error(error));

// invoking fetchData
fetchData();

// Async/Await
async function fetchData() {
  try {
    // await the Promise returned by fetch("");
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/typhlosion"
    );
    // check if response (ok: true/false) resolves or 404s
    if (!response.ok) {
      throw new Error("Sorry, could not fetch resource");
    }
    // if it is ok: true
    // json returns a promise, which is why we use the await keyword
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
