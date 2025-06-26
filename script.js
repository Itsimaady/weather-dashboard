const apiKey = "65fe78b69d4c23e7a72cc1a7175b7b48"; //valid OpenWeatherMap key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = `${data.main.temp} °C`;
    document.getElementById("humidity").innerText = `${data.main.humidity} %`;
    document.getElementById("description").innerText = data.weather[0].description;

    document.getElementById("weatherInfo").classList.remove("hidden");
  } catch (error) {
    alert("Error: " + error.message);
  }
}
