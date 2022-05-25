import './App.css';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";
import React from "react";
const API_KEY = "f8c8aacebdf5d287bb2fe1f5e99ebba3";
class App extends React.Component {


    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined,
        wind: undefined,
        description: undefined,
        main: undefined
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

            if (city) {
                const api_url = await
                    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
                const data = await api_url.json();


                if(data.cod === '404') {
                            this.setState({
                                error: 'Write name of your city correctly'
                            })
                            return;
                        }

                function celsiusToFahrenheit(c) {
                    const w = 273.15;
                    let d = data.main.temp;
                    const f = d - w;
                    let a = Math.round(f);
                    return a;
                }
               let temp2 = celsiusToFahrenheit();


                function timeConverter(UNIX_timestamp){
                        let a = new Date(UNIX_timestamp * 1000);
                        let hour = a.getHours();
                        let min = "0" + a.getMinutes();
                        let sec = "0" + a.getSeconds();
                        let time = hour + ':' + min.substr(-2) + ':' + sec.substr(-2) ;
                        return time;
                    }
                let sunset = data.sys.sunset,
                    sunrise = data.sys.sunrise;
                let sunset_date = timeConverter(sunset);
                let sunrise_date = timeConverter(sunrise);

                this.setState({
                        temp: temp2,
                        city: data.name,
                        country: data.sys.country,
                        sunrise: sunrise_date,
                        sunset: sunset_date,
                        wind: data.wind.speed,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        error: undefined
                    }
                );
            } else {
                this.setState ({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    wind: undefined,
                    main: undefined,
                    description: undefined,
                    error: "Write name of your city"
                });
            }
    }
  render() {
    return (

        <div className="wrapper">
            <div className="container">
                <Info/>
                <div>
                    <Form weatherMethod={this.gettingWeather}/>
                    <Weather
                        temp={this.state.temp}
                        city={this.state.city}
                        country={this.state.country}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        wind={this.state.wind}
                        main={this.state.main}
                        description={this.state.description}
                        error={this.state.error}
                    />
                </div>
                </div>
        </div>
    )
  }
}
export default App;
