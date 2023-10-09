import './style.css'

const APIKEY = "39f9436e4d81c8e85a0bc392a13deb51";
const form = document.querySelector("form");
      const locationEl = document.getElementById("location");
      const timeEl = document.getElementById("time");
      const tempEl = document.getElementById("temperature");
      const humEl = document.getElementById("humidity");
      const descEl = document.getElementById("description");
      const cloudEl =document.getElementById("cloudiness");
      const precEl =document.getElementById("precipitation");

      form.addEventListener("submit", e => {
        e.preventDefault();
        const city = document.getElementById("city").value;
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

        fetch(endpoint)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            const location = data.name;
            const time = new Date(data.dt * 1000).toLocaleTimeString();
            const temperature = Math.round(data.main.temp - 273.15);
            const humidity = data.main.humidity;
            const description = data.weather[0].description;
            const cloudiness = data.clouds.all;
            const precipitation = data.rain?.['1h'] || data.snow?.['1h'] || 0;

            
            locationEl.textContent = location;
            timeEl.textContent = time;
            tempEl.textContent = temperature;
            humEl.textContent = humidity;
            descEl.textContent = description;
            cloudEl.textContent = cloudiness;
            precEl.textContent = precipitation;
          })
          .catch(error => console.error(error));
      });

const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);


let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = cloud => {
  cloud.style.setProperty("--cloud-left", `${rand(-10, 100)}%`);
  cloud.style.setProperty("--cloud-top", `${rand(-40, 80)}%`);

  cloud.style.animation = "none";
  cloud.offsetHeight;
  cloud.style.animation = "";
}

for(const cloud of document.getElementsByClassName("magic-cloud")) {
  setTimeout(() => {
    animate(cloud);
    
    setInterval(() => animate(cloud), 1000);
  }, index++ * (interval / 3))
}