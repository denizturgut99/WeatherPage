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
            var url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + this.search + "&appid=c86be36a020f3d6fc311354ac9cc9878&units=metric"
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.search + "&appid=c86be36a020f3d6fc311354ac9cc9878&units=metric"

            var currentDate;
            var forecastArr;
            var currentArr;
            var forDate;

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
                    //                    setImage()
                    //                    console.log(currentDate);
                })
                .catch(error => console.log(error));

            fetch(url2, {
                    mode: "cors"
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (forecastJson) {
                    console.log(forecastJson);
                    app.weatherForecast = forecastJson.list;
                    forecastArr = forecastJson.list;
//                    findDates();
                    //                    app.forecastDates = forecastJson.list.dt;
                    //                    forDate = forecastJson.list.dt;
                    //                    console.log(forDate);
                })
                .catch(error => console.log(error));

            function findDates() {
                for (var i = 0; i < this.forecastArr.length; i++) {
                    this.forecastDates = forecastArr[i].dt;
                }
            }

        },
        getCity() {
            this.callAllFuncs();
//            this.getDates();
        }
    }
})
