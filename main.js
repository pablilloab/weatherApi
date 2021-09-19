const apiKey = '8eb6e8a7d5ae405db06145440211909'
const baseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`


const button = document.querySelector(".send-location")
button.addEventListener("click",(event)=>{
    event.preventDefault()
    let location = document.querySelector(".location").value
    getWeatherData (location)

})


async function getWeatherData (location) {
    
    let result = await fetch (`${baseURL}${location}`)
            .then(result => result.json())
    console.log(result)


    let statusHtml = `<h1>${result.current.temp_c} °C</h1>
    <h1>${result.current.condition.text}</h1>
    <h2>${result.current.wind_kph} km/h</h2>
    <h2>${result.current.humidity} %</h2>
    <h2>${result.current.pressure_mb} hPa</h2>
    <h4>${result.location.name}, ${result.location.tz_id}</h4>`
    
    let statusToHTML = document.querySelector(".status")
    statusToHTML.innerHTML = statusHtml
    
}