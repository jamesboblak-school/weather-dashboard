// Store user text input to local storage and print to history-list
var updateTime = function () {
    var currentTime = moment().format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-0").text(currentTime);
    var oneTime = moment().add(86400000).format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-1").text(oneTime);
}
updateTime();
setInterval(updateTime, 1000);
function getCity() {
    var cityName =
        document.getElementById("city-name").value;
    document.getElementById(
        "list").innerHTML = cityName;
    localStorage.setItem("#city-name", cityName);
    console.log("cityName: " + localStorage.getItem("#city-name"));
    var info = fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=6391e3bcdc67c1a8254b41d12e058c92', {
            method: 'GET', //GET is the default.
        })
        .then(function (response) {
            console.log("response", response);
            return response.json();
        })
        .then(function (response) {
            console.log("all data: ", response);
            var tbl = $("<table/>").attr("id", "card1");
            $("#display-box").append(tbl);
            for (var i = 0; i < 1; i++) {
                var tr = "<tr>";
                var perc = "% Humidity";
                var tempF = Math.floor((((response["main"]["temp"] - 273) * 1.8) + 32));
                var tem = "° Fahrenheit";
                var imgTemp = src = "./assets/images/cloudy.png";
                var td0 = "<td id='city-name'>" + response["name"] + "</td>";
                var td1 = "<td id='temp-report'>" + tempF + tem + "</td>";
                var td2 = "<td id='weather-report'>" + response["weather"][0]["description"] + "</td>";
                var td3 = "<td id='humidity-report'>" + response["main"]["humidity"] + perc + "</td>";
                var td4 = "<td id='weather-icon'>" + "</td></tr>";

                $("#card1").append(tr + td0 + td1 + td2 + td3 + td4);
                $('<center><img src="./assets/images/cloudy.png" width="80%"></center>').appendTo(".card-body1");
            }
            var lat = Math.floor(response["coord"]["lat"]);
            console.log("lat: " + lat);
            var lon = Math.floor(response["coord"]["lon"]);
            console.log("lon: " + lon);

            var info2 = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly,alerts&appid=6391e3bcdc67c1a8254b41d12e058c92', {
                method: 'GET',
            })
            .then(function (response2) {
                console.log("response2", response2);
                return response2.json();
            }) 
            .then(function (response2) {
                console.log("all data2: ", response2);
                var tbl = $("<table/>").attr("id", "card2");
                $("#display-box").append(tbl);
                for (var i = 0; i < 1; i++) {
                    var tr = "<tr>";
                    var tempF = Math.floor((((response2["daily"]["1"]["temp"]["day"] - 273) * 1.8) + 32));
                    var tem = "° Fahrenheit";
                    var td5 = "<td id='temp-forecast-report'>" + tempF  + tem + "</td>";
                    var perc = "% Humidity";
                    var td6 = "<td id='perc-forecast-icon'>" + response2["daily"]["1"]["humidity"] + perc + "</td></tr>";
                    var wind = "mph";
                    // var td7 = "<td id='wind-report'>" + response2["daily"][1]["wind_speed"] + wind + "</td>";
                    var uviUnits = "UV Index: ";
                    // var td8 = "<td id='uvi-report'>" + uviUnits + response2["daily"][1]["uvi"] + "</td>";
                    var td9 = "<td id='uvi-report'>" + uviUnits + response2["daily"][0]["uvi"] + "</td>";
                    var td10 = "<td id='wind-report'>" + response2["daily"][0]["wind_speed"] + wind + "</td>";
                    if (response2["daily"][0]["uvi"] > 4) {
                        $("#uvi-report").addClass(".moderateUV");

                    }
                    
                    $("#card1").append(td10 + td9);
                    $("#card2").append(tr + td5 + td6);
                    $("#card[i]").append(tr + td5 + td6);
                    $('<center><img src="./assets/images/cloudy.png" width="80%"></center>').appendTo(".card-body2");
                }           
        });

    // var message = document.createElement("P"); // Create a <p> element
    // message.innerHTML = "Today in " + cityName; // Insert text
    // document.getElementById("card1").appendChild(message); // Append <p> to <div> with id="card1"

});
}
