var app = new Vue({
    el: "#app",
    data: {
        weatherData: [],
        search: "",
    },
    methods: {
        callAllFuncs() {
            var url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.search + "&appid=c86be36a020f3d6fc311354ac9cc9878&units=metric"
            
            fetch(url, {
                    mode: "cors"
                })
                .then(function (response) {
                    return response.json()
                })
                .then(function (newJson) {
                    console.log(newJson)
                    app.weatherData = newJson
                })
                .catch(error => console.log(error));
        },
        getCity() {
            this.callAllFuncs()
        }
    }
})

