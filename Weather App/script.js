const apiKey = "7f9030c18d71f944751c7f4018272a18";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city){
    // document.querySelector
    // apiUrl += cityName;
    document.querySelector('.error').style.display = "none";

    const response = await fetch(apiUrl +city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        return;
    }
    var data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerHTML =Math.round( data.main.temp )+ "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.weather-icon').src = `images/${data.weather[0].main}.png`;

}
searchBox.addEventListener("keyup",(event)=>{
    if(event.key === "Enter"){
        checkWeather(searchBox.value);
         searchBox.value = "";
         document.querySelector('.weather').style.display = "block";
    }
})
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    searchBox.value = "";
    document.querySelector('.weather').style.display = "block";
})

