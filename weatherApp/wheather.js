const apiKey = "e5881c3a34826a5423fccd2024b0db07";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const condition = data.weather[0].main.toLowerCase();

    if (condition === "clouds") weatherIcon.src = "images/clouds.png";
    else if (condition === "clear") weatherIcon.src = "images/clear.png";
    else if (condition === "rain") weatherIcon.src = "images/rain.png";
    else if (condition === "drizzle") weatherIcon.src = "images/drizzle.png";
    else if (condition === "mist") weatherIcon.src = "images/mist.png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value.trim());
});