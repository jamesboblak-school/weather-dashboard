// Store user text input to local storage and print to history-list

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
                var tempF = Math.floor((((response["main"]["temp"] - 273) * 1.8) + 32));
                var td1 = "<td id=temp-report>" + tempF + "</td>";
                var td2 = "<td id=weather-report>" + response["weather"][0]["description"] + "</td>";
                var td3 = "<td id=humidity-report>" + response["main"]["humidity"] + "</td></tr>";

                $("#card1").append(tr + td1 + td2 + td3);
                $("temp-report").append(" degrees");

            }
        });
    var para = document.createElement("P"); // Create a <p> element
    para.innerHTML = "Today's weather in " + cityName; // Insert text
    document.getElementById("display-box").appendChild(para); // Append <p> to <div> with id="display-box"
    console.log("OBJECT: " + info);
}
