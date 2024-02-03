// Weather App

// Using query selector to get first element matching .<class>
// do not forget the . when trying to query for a class
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// Deactivate key!
const apiKey = "1234";

// adding async to event so that getWeather can use await
weatherForm.addEventListener("submit", async (event) => {
  // forms have a default function which refreshes the page
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    // try, could blow up
    try {
      const weatherData = await getWeatherData(city);
      // problem here or in getWeatherData not dealing with 404s ***************
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
    }
  } else {
    displayError("Error: Please enter a city");
  }
});

async function getWeatherData(city) {
  // console.log(city);
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // pass the url created and stored within getWeatherData
  const response = await fetch(apiUrl);

  // handle bad fetch request
  // !response.ok not propagating? **********************************
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

//
function displayWeatherInfo(data) {
  // console.log(data);
  // use object destructuring
  // access name, return city, access main return object
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";
}

function getWeatherEmoji(weatherId) {}

// check error propagation **************************
function displayError(message) {
  // create a paragraph to display error
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
