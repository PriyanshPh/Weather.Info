const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a936f2d8a5msh9af089550b9755dp1d6b2djsn17f2e618e708',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temperature.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidityDisplay.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    windDisplay.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(cityy.value)
})
getWeather("Delhi")

const getWeatherr = (city) => {
    cityNaam.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct1.innerHTML = response.cloud_pct
    temp1.innerHTML = response.temp
    feels_like1.innerHTML = response.feels_like
    humidity1.innerHTML = response.humidity
    min_temp1.innerHTML = response.min_temp
    max_temp1.innerHTML = response.max_temp
    wind_speed1.innerHTML = response.wind_speed
    wind_degree1.innerHTML = response.wind_degrees
    sunrise1.innerHTML = response.sunrise
    sunset1.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
getWeatherr("Noida")

const Weatherr = (city) => {
    Area.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct0.innerHTML = response.cloud_pct
    temp0.innerHTML = response.temp
    feels_like0.innerHTML = response.feels_like
    humidity0.innerHTML = response.humidity
    min_temp0.innerHTML = response.min_temp
    max_temp0.innerHTML = response.max_temp
    wind_speed0.innerHTML = response.wind_speed
    wind_degree0.innerHTML = response.wind_degrees
    sunrise0.innerHTML = response.sunrise
    sunset0.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
Weatherr("Mumbai")

const Weather = (city) => {
    inArea.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct01.innerHTML = response.cloud_pct
    temp01.innerHTML = response.temp
    feels_like01.innerHTML = response.feels_like
    humidity01.innerHTML = response.humidity
    min_temp01.innerHTML = response.min_temp
    max_temp01.innerHTML = response.max_temp
    wind_speed01.innerHTML = response.wind_speed
    wind_degree01.innerHTML = response.wind_degrees
    sunrise01.innerHTML = response.sunrise
    sunset01.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
Weather("Kolkata")

const Climate = (city) => {
    areaOf.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct10.innerHTML = response.cloud_pct
    temp10.innerHTML = response.temp
    feels_like10.innerHTML = response.feels_like
    humidity10.innerHTML = response.humidity
    min_temp10.innerHTML = response.min_temp
    max_temp10.innerHTML = response.max_temp
    wind_speed10.innerHTML = response.wind_speed
    wind_degree10.innerHTML = response.wind_degrees
    sunrise10.innerHTML = response.sunrise
    sunset10.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
Climate("Lucknow")

const climateForcast = (city) => {
    atArea.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct11.innerHTML = response.cloud_pct
    temp11.innerHTML = response.temp
    feels_like11.innerHTML = response.feels_like
    humidity11.innerHTML = response.humidity
    min_temp11.innerHTML = response.min_temp
    max_temp11.innerHTML = response.max_temp
    wind_speed11.innerHTML = response.wind_speed
    wind_degree11.innerHTML = response.wind_degrees
    sunrise11.innerHTML = response.sunrise
    sunset11.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
climateForcast("Chennai")

const Forcast = (city) => {
    loc.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
    console.log(response)

    cloud_pct18.innerHTML = response.cloud_pct
    temp18.innerHTML = response.temp
    feels_like18.innerHTML = response.feels_like
    humidity18.innerHTML = response.humidity
    min_temp18.innerHTML = response.min_temp
    max_temp18.innerHTML = response.max_temp
    wind_speed18.innerHTML = response.wind_speed
    wind_degree18.innerHTML = response.wind_degrees
    sunrise18.innerHTML = response.sunrise
    sunset18.innerHTML = response.sunset
})
.catch(err => console.error(err));
}
Forcast("Moradabad")
