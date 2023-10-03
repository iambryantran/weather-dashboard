// Key adea4b71dfb69c3dd801b8e3e386f363

// URL https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}

var searchInputEl = document.getElementById('search-input');
var searchBtnEl = document.getElementById('search-button');

const APIKey = "adea4b71dfb69c3dd801b8e3e386f363";

var queryURL = "https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=" + {lat} + "&lon=" + {lon} +"&appid=" + APIKey;

fetch('https://api.openweathermap.org/data/3.0/onecall?lat=36.1627&lon=86.7816&appid=adea4b71dfb69c3dd801b8e3e386f363', {})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });