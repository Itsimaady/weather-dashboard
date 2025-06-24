const apiKey = "96f5d075c7c34f5387871628252406";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name");

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // optional: shows the API response

    if (data.error) throw new Error(data.error.message);

    document.getElementById("cityName").innerText = data.location.name;
    document.getElementById("temperature").innerText = data.current.temp_c;
    document.getElementById("humidity").innerText = data.current.humidity;
    document.getElementById("description").innerText = data.current.condition.text;

    document.getElementById("weatherInfo").classList.remove("hidden");
  } catch (err) {
    alert("Error: " + err.message);
  }
}
