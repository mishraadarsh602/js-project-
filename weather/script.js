
 var city;
// if(city===""){
//  city="Delhi";
// }else{
   let cityBox = document.getElementById("cityBox");
   
   let searchbtn = document.getElementById("searchbtn");
   searchbtn.addEventListener("click",(e)=>{
       e.preventDefault();
        city =cityBox.value;
        getWeather(city);

        //console.log(city);
   })
//}

//console.log(city);
function getWeather(city){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
     
    document.getElementById("cityName").innerHTML=city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c47535c4f8msh0a0a4b6c00eabb7p19e9a5jsn30758d0c1943',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response =  fetch(url, options);
    response.then((val)=>{
       
        return val.json();
       
    }).then((val)=>{
         document.getElementById("temp2").innerHTML  =val.temp;
         document.getElementById("feels_like").innerHTML =val.feels_like;
         document.getElementById("humidity").innerHTML=val.humidity;
         document.getElementById("humidity2").innerHTML=val.humidity;
         document.getElementById("min_temp").innerHTML=val.min_temp;
        document.getElementById("max_temp").innerHTML=val.max_temp;
        document.getElementById("wind_speed").innerHTML=val.wind_speed;
        document.getElementById("wind_speed2").innerHTML=val.wind_speed;
        document.getElementById("wind_degrees").innerHTML=val.wind_degrees;
           
    })

}


getWeather("Delhi");



//other city weather
function getOtherCityWeather(city,id){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
     
    document.getElementById("othercity"+id).innerHTML=city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c47535c4f8msh0a0a4b6c00eabb7p19e9a5jsn30758d0c1943',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response =  fetch(url, options);
    response.then((val)=>{
    
        return val.json();
    }).then((val)=>{
         document.getElementById("othertemp"+id).innerHTML  =val.temp;
         document.getElementById("otherhumid"+id).innerHTML=val.humidity;
       
        document.getElementById("otherwind"+id).innerHTML=val.wind_speed;
           
    })

   

}


getOtherCityWeather("Mumbai",1);
getOtherCityWeather("Agra",2);

getOtherCityWeather("Bangkok",3);
getOtherCityWeather("New York",4);







