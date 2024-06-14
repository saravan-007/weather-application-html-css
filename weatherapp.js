const apikey = "b7e51ac78f4a8c8724e848c46d2c580a";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl + city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="countdownimages/clouds.png";

    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src ="countdownimages/clear.png";

    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src ="countdownimages/rain.png";

    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src ="countdownimages/drizzle.png";

    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src ="countdownimages/mist.png";

    }
    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display="none";

}
}
searchbtn.addEventListener("click",()=>
{
 checkWeather(searchbox.value); 
})

