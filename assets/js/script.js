// Store user text input to local storage and print to history-list

function getCity() {
    var cityName =
        document.getElementById("city-name").value;
    document.getElementById(
        "list").innerHTML = cityName;
    localStorage.setItem("#city-name", cityName);
    console.log("cityName: " + localStorage.getItem("#city-name"));
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Chicago&cnt=5&appid=xxxxxxxxxxxxxxxx', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error => follow: Automatically follow redirects. Unless otherwise stated the redirect mode is set to follow
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
}

// 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Chicago&cnt=5&appid=xxxxxxxxxxxxxxxx'

// 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=xxxxxxxxxxxxxxxx'