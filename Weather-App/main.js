const API_KEY = `67c854ac3ab5e6b7108f5ecfa0e4683e`; 

//fetching data from API
const searchTemp = ()=>{
    const city = document.getElementById("city-name").value;
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url) 
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => displayTemp(data)); 
    //calling 'display' function with fetched data.
} 

//Setting data in HTML page.
const setInnerText = (id,text) => {
    // console.log(id, text)
    document.getElementById(id).innerText = text+"°C";
}

// displaying data in HTML with help of setInnerTest func.
const displayTemp = temperature =>{
    //console.log(temperature);
    setInnerText('city',temperature.name);
    setInnerText('temp',temperature.main.temp);
    setInnerText('weather',temperature.weather[0].main);
    
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);

}