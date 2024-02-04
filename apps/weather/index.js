// Weather App

// Using query selector to get first element matching .<class>
// do not forget the . when trying to query for a class
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// Key can now be accessed from an external file

// adding async to event so that getWeather can use await
weatherForm.addEventListener("submit", async (event) => {
  // forms have a default function which refreshes the page
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    // try: user input, code could fail
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
      // 404 errors, city not in OpenWeather (likely result of typos by user)
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  // load API key from file
  let filehandle = await fetch("../Assets/APIs/OpenWeather.json");
  const fileData = await filehandle.json();
  const apiKey = fileData.key;

  // debug, is key loaded or undefined
  // console.log(apiKey);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // is url being created correctly
  // console.log(apiUrl);
  // pass the url created and stored within getWeatherData
  const response = await fetch(apiUrl);
  console.log(response);

  // handle bad fetch request

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }
  // convert response to json data and return it to the event listener
  return await response.json();
}


function displayWeatherInfo(data) {
  // debug see if data was retrieved correctly
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

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = `${description}`;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  // codes can be found here:
  // https://openweathermap.org/weather-conditions
  // use a switch to determine the emoji
  // examine the bool value of true
  // does the case evaluate to true, return that value
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "🌩️";
    case weatherId >= 300 && weatherId < 400:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId == 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";

    default:
      return "❓";
  }
}

function displayError(message) {
  // create a paragraph to display error
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
