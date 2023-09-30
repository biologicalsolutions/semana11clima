document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '90bcbf20de7bebdb7f884dc0b3120a8f';
    const city = 'Montevideo';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("clima");
            const cityName = data.name;
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;

            const weatherHtml = `
                <p>City: ${cityName}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
            `;

            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
});
