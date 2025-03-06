 const API_KEY = "225e87744cba242c036a1722791b3ec9";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    function fetchWeather() {
    const city = document.getElementById("city").value;
    const weatherResult = document.getElementById("weatherResult");
    const error = document.getElementById("error");

    if (!city) {
    error.textContent = "Entrer une ville";
    return;
}

    fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {
    if (data.cod !== 200) {
    error.textContent = "Ville introuvable.";
    weatherResult.innerHTML = "";
    return;
}

    error.textContent = "";
    weatherResult.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>${data.weather[0].description}</p>
                        <p><strong>${data.main.temp}°C</strong></p>
                    `;
})
    .catch(() => {
    error.textContent = "Erreur de connexion";
});
}