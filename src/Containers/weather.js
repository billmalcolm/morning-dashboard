import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTemp: '',
            currentSky: '',

        }
    }

    // current weather: http://api.openweathermap.org/data/2.5/weather?lat=42.9723&lon=-88.0037&appid=5d15af8ebf8d890b4d0bca7b1433040d
    // forecast: http://api.openweathermap.org/data/2.5/forecast/?lat=42.9723&lon=-88.0037&APPID=5d15af8ebf8d890b4d0bca7b1433040d


    componentWillMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?lat=42.9723&lon=-88.0037&appid=5d15af8ebf8d890b4d0bca7b1433040d')
            .then(results => {
                return results.json();
            }).then(data => {
                let currently = data;
                this.setState({
                    currentTemp: currently.main.temp,
                    currentSky: currently.weather[0].description
                });
            })
    }


    render() {

        // api returns units in Kelvin, so need to convert to Fahrenheit
        function convertKtoF(k) {
            let p1 = k - 273.15;
            let p2 = p1 * 9 / 5;
            let f = p2 + 32;

            return Math.round(f)
        }


        let currentF = convertKtoF(this.state.currentTemp)

        return (
            <div>
                Currently: {currentF}&deg;F, {this.state.currentSky}
            </div>
        );
    }
}

export default Weather;