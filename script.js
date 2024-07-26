const search_button=document.querySelector(".bi-search");
const search_bar=document.querySelector(".search-box input");
const apikey="7fd7629818247e445a7173f6fe8d4e04";
const description=document.getElementById("info");
const tempeature=document.getElementById("temp");
const humidity=document.querySelector(".humidity p");
const wind=document.querySelector(".wind p");
const weatherbox=document.querySelector(".weather-box");
const weatherdetails=document.querySelector(".weather-details")
const container= document.querySelector(".container");
const error=document.querySelector(".error");
const image=document.querySelector(".image");

function handler(){
    const city=search_bar.value.trim();
   if(city===""){
       return;
   }
   console.log("hi yash")

    console.log("hi rajat")
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`).then(response=>response.json()).then(response=>{

     
      if(response.cod!==200){
        weatherbox.classList.remove("fade");
        weatherdetails.classList.remove("fade");
        container.classList.remove("size_for_content");
        weatherbox.style.display="none"
        weatherdetails.style.display="none"
        container.classList.add("size_for_error");
        error.classList.remove("fade")
        error.style.display="flex";
        error.classList.add("fade");
        return;

      }

      const data=response;
      console.log(response)
      description.innerHTML=data.weather[0].description;
      tempeature.innerHTML=`${parseInt(data.main.temp)} &#176C`;
      humidity.innerHTML=`${data.main.humidity} %`;
      wind.innerHTML=`${data.wind.speed} m/s`;
      image.style.backgroundImage=`url(./assets/${data.weather[0].main}.png)`;
      container.classList.remove("size_for_error");
      error.style.display="none"
      container.classList.add("size_for_content");
      weatherbox.style.display="block";
      weatherdetails.style.display="flex";
      weatherbox.classList.add("fade");
      weatherdetails.classList.add("fade");






   })
}


search_button.addEventListener("click",handler);

search_bar.addEventListener("keypress",()=>{
    if(event.key=='Enter'){
        handler();
    }
})