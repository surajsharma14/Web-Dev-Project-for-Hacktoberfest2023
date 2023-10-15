let location1 = document.getElementById("location");
let cityName = document.getElementById("city");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let getWeather = document.getElementById("btn");
let searchBtn1 = document.getElementById("btn-1");
let unit = document.getElementById("unitSelect");
let useLocationBtn = document.getElementById("useLocationBtn");



useLocationBtn.addEventListener("click", () => {
    // Checking if the browser supports geolocation
    if ("geolocation" in navigator) {
        // Request geolocation permission
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // calling function which Use the geolocation coordinates to fetch weather data
            fetchWeatherByCoordinates(latitude, longitude);
        }, function (error) {
            console.error("Geolocation error:", error);
            alert("Geolocation permission denied. Please enter a location manually.");
        });
    }
    else {
        alert("Geolocation is not supported in your browser.");
    }
});

// Function to fetch weather data of current location  by coordinates 
async function fetchWeatherByCoordinates(latitude, longitude) {
    const unit = unitSelect.value;
    const apiKey = "d15cb638a3256635cd779150627fd14";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        const unitSymbol = unit === "metric" ? "°C" : "°F";
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.floor(data.main.temp) + unitSymbol;
        humidity.innerHTML = Math.floor(data.main.humidity) + "%";
        wind.innerHTML = Math.floor(data.wind.speed) + "Km/h";
    } catch (error) {
        console.error("Error:", error);
        alert("Weather data for your location is not available.");
    }
}




// making a function which call an api using api key and then fetching the data fron the api and converting the received data into json form and then showing received data 
async function weather(city, units) {
    let api_key = '0d15cb638a3256635cd779150627fd14';
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${units}`;

    try {
        const response = await fetch(apiurl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        else {
            let convertData = await response.json();
            console.log(convertData);
            const unitSymbol = units === "metric" ? " °C" : "°F ";
            console.log(unitSymbol);
            cityName.innerHTML = convertData.name;
            temperature.innerHTML = Math.floor(convertData.main.temp) + unitSymbol;
            humidity.innerHTML = Math.floor(convertData.main.humidity) + "%";
            wind.innerHTML = Math.floor(convertData.wind.speed) + "Km/h";
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Weather data for searched location is not available.");
    }

}

//  when click on the  cross mark  the searched location will be removed from the searchbar and search icon will be added
location1.addEventListener("input", () => {
    if (!location1.value) {
        searchBtn1.classList.remove('fa-xmark');
        searchBtn1.classList.add('fa-magnifying-glass');
    }
    else if (location1.value) {
        searchBtn1.classList.add('fa-xmark');
        getWeather.classList.remove('fa-magnifying-glass');
        if (location1.value) {
            searchBtn1.addEventListener("click", () => {
                location1.value = '';
                searchBtn1.classList.remove('fa-xmark');
                searchBtn1.classList.add('fa-magnifying-glass');
            });
        }
    }
});
// adding an click eventlistener on the button to get the searched location weather details
getWeather.addEventListener("click", () => {
    if (location1.value == '') {
        alert("Please enter a location");
    }
    else {
        unit.addEventListener("change", function () {
            // Get the selected unit (celsius or fohrenheit)
            const selectedUnit = unit.value;
            // Calling the weather function with the selected unit
            weather(location1.value, selectedUnit);
        });

        weather(location1.value, unit.value);
    }
});

