// Store user text input to local storage and print to history-list

var updateTime = function () {
    var msecDay = 86400000
    var currentTime = moment().format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-0").text(currentTime);
    var oneTime = moment().add(msecDay).format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-1").text(oneTime);
    var twoTime = moment().add(msecDay * 2).format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-2").text(twoTime);
    var threeTime = moment().add(msecDay * 3).format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-3").text(threeTime);
    var fourTime = moment().add(msecDay * 4).format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-4").text(fourTime);
    var fiveTime = moment().add(msecDay * 5).format("MMM Do, YYYY", "mm:dd:yyyy");
    $("#date-5").text(fiveTime);
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
                var td3 = "<td id='humidity-report'>" + response["main"]["humidity"] + perc + "</td></tr>";
                $("#card1").append(tr + td0 + td1 + td2 + td3);
                $('<img src="http://openweathermap.org/img/wn/04d@2x.png" width="300%">').appendTo(".card-body1");
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
                    var uviUnits = "UV Index: ";
                    // card 1
                    var td9 = "<td id='uvi-report'>" + uviUnits + response2["daily"][0]["uvi"] + "</td>";
                    var td10 = "<td id='wind-report'>" + response2["daily"][0]["wind_speed"] + wind + "</td>";
                    var td11 = "<td id='temp-forecast-report1'>" + tempF  + tem + "</td>";
                    var td12 = "<td id='perc-forecast-icon1'>" + response2["daily"]["0"]["humidity"] + perc + "</td></tr>";
                    // card 2
                    var td19 = "<td id='weather-report2'>" + response2["daily"]["1"]["weather"][0]["description"] + "</td>";
                    var tempF2 = Math.floor((((response2["daily"]["1"]["temp"]["day"] - 273) * 1.8) + 32));
                    var td13 = "<td id='temp-forecast-report2'>" + tempF2  + tem + "</td>";
                    var td14 = "<td id='perc-forecast-icon2'>" + response2["daily"]["1"]["humidity"] + perc + "</td></tr>";
                    // card 3
                    var td20 = "<td id='weather-report3'>" + response2["daily"]["2"]["weather"][0]["description"] + "</td>";
                    var tempF3 = Math.floor((((response2["daily"]["2"]["temp"]["day"] - 273) * 1.8) + 32));
                    var td15 = "<td id='temp-forecast-report3'>" + tempF3  + tem + "</td>";
                    var td16 = "<td id='perc-forecast-icon3'>" + response2["daily"]["2"]["humidity"] + perc + "</td></tr>"; 
                    // card 4
                    var td21 = "<td id='weather-report4'>" + response2["daily"]["3"]["weather"][0]["description"] + "</td>";
                    var tempF4 = Math.floor((((response2["daily"]["3"]["temp"]["day"] - 273) * 1.8) + 32));
                    var td17 = "<td id='temp-forecast-report4'>" + tempF4  + tem + "</td>";
                    var td18 = "<td id='perc-forecast-icon4'>" + response2["daily"]["3"]["humidity"] + perc + "</td></tr>"; 
                    //  card 5
                    var td22 = "<td id='weather-report5'>" + response2["daily"]["4"]["weather"][0]["description"] + "</td>";
                    var tempF5 = Math.floor((((response2["daily"]["4"]["temp"]["day"] - 273) * 1.8) + 32));
                    var td17 = "<td id='temp-forecast-report5'>" + tempF5  + tem + "</td>";
                    var td18 = "<td id='perc-forecast-icon5'>" + response2["daily"]["4"]["humidity"] + perc + "</td></tr>"; 
                    //  card 6
                    var td23 = "<td id='weather-report6'>" + response2["daily"]["5"]["weather"][0]["description"] + "</td>";
                    var tempF6 = Math.floor((((response2["daily"]["5"]["temp"]["day"] - 273) * 1.8) + 32));
                    var td24 = "<td id='temp-forecast-report6'>" + tempF6  + tem + "</td>";
                    var td25 = "<td id='perc-forecast-icon5]6'>" + response2["daily"]["5"]["humidity"] + perc + "</td></tr>"; 

                    if (Math.floor(response2["daily"][0]["uvi"]) >= 8) {
                        $("#card1").addClass("severeUV");
                        alert("UVI is high in that location today: " + response2["daily"][0]["uvi"]);
                        console.log("UVI: " + response2["daily"][0]["uvi"]);
                    }   else if ((Math.floor(response2["daily"][0]["uvi"])) >= 4) {
                        $("#card1").addClass("moderateUV");
                        alert("UVI is moderate in that location today: " + response2["daily"][0]["uvi"])
                    }   else {
                        alert("UVI is healthy in that location today: " + response2["daily"][0]["uvi"])

                    };

                    }
                    
                    $("#card1").append(td10 + td9);
                    $("#card2").append(tr + td19 + td5 + td6);
                    $("#card3").append(tr + td20 + td11 + td12);
                    $("#card4").append(tr + td21 + td13 + td14);
                    $("#card5").append(tr + td22 + td15 + td16);
                    $("#card6").append(tr + td23 + td24 + td25);


                    var imgSource = "./assets/images/cloudy.png"
                    $('<img src="http://openweathermap.org/img/wn/01d@2x.png" width="300%">').appendTo(".card-body2");
                    $('<img src="http://openweathermap.org/img/wn/10d@2x.png" width="300%">').appendTo(".card-body3");
                    $('<img src="http://openweathermap.org/img/wn/11d@2x.png" width="300%">').appendTo(".card-body4");
                    $('<img src="http://openweathermap.org/img/wn/02d@2x.png" width="300%">').appendTo(".card-body5");
                    $('<img src="http://openweathermap.org/img/wn/03d@2x.png" width="300%">').appendTo(".card-body6");




                })          
        });

    // var message = document.createElement("P"); // Create a <p> element
    // message.innerHTML = "Today in " + cityName; // Insert text
    // document.getElementById("card1").appendChild(message); // Append <p> to <div> with id="card1"

};

