const apiKey="3d9343ea223d8889a271fffaface2779";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";


const inputEl=document.querySelector("input");
const searchBtn=document.querySelector("button");
const weatherIcon=document.querySelector(".weather-icon");

searchBtn.addEventListener('click',function(){
    const city=inputEl.value;
    checkWheather(city);
})

inputEl.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        checkWheather(inputEl.value);
    }
})


async function checkWheather(city){

    const response=await fetch(apiUrl+ `&q=${city}`+`&appid=${apiKey}`);
    const data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    const weatherCondtion=data.weather[0].main.toLowerCase();
    const relPath="images/"+`${weatherCondtion}`+".png";
    weatherIcon.src=relPath;
    console.log(`images/${weatherCondtion}.png`);

    document.getElementsByClassName("weather")[0].style.display="block";

}

