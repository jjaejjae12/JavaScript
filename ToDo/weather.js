const API_KEY = "3a7296b22f92a5ee4fa86011136bc5a1";

function onGeoOk(posiotion) {
    const lat = posiotion.coords.latitude;
    const lon= posiotion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then( response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError() {
    alert("Can`t find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)