var app = new Vue({
    el: "#app",
    data: {
        weatherData: [],
        weatherForecast: [],
        forecastDates: [],
        search: "",
        view: ""
    },
    methods: {
        callAllFuncs() {
            var url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.search + "&appid=c86be36a020f3d6fc311354ac9cc9878&units=metric";
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.search + "&appid=c86be36a020f3d6fc311354ac9cc9878&units=metric";

            var currentDate;
            var forecastArr;
            var currentArr;
            var incorrect;
            var allDates;

            fetch(url, {
                    mode: "cors"
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (newJson) {
                    console.log(newJson)
                    app.weatherData = newJson
                    currentArr = newJson
                    currentDate = newJson.dt
                })
                .catch(error => console.log(error));

            fetch(url2, {
                    mode: "cors"
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (forecastJson) {
                    console.log(forecastJson)
                    app.weatherForecast = forecastJson.list
                    forecastArr = forecastJson
                    incorrect = forecastJson;
                    message()
//                getDate()
                })
                .catch(error => console.log(error));

            function message() {
                if (incorrect.cod == "404") {
                    document.getElementById("errorMessage").classList.remove("errorMessage")
                } else {
                    document.getElementById("errorMessage").classList.add("errorMessage")
                }
            }
            
//            function getDate() {
//                for(var i = 0; i < forecastArr.length; i++) {
//                    this.allDates = forecastArr.list[i].dt;
//                }
//            }

        },
        getCity() {
            this.callAllFuncs();
        }
    }
})
