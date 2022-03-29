import React from "react";
import '../App.css';

class Weather extends React.Component {
    render() {
        return (

            <div className="weather-block">
                { this.props.city &&
                <div className="weather">
                    <div className="weather-item">
                        <div>City</div>
                        <div>{this.props.city}, {this.props.country}</div>
                    </div>
                    <div className="weather-item">
                        <div>Temperature</div>
                        <div> {this.props.temp} °C </div>
                    </div>
                    <div className="weather-item">
                        <div>Sunrise time</div>
                        <div>{this.props.sunrise}</div>
                    </div>
                    <div className="weather-item">
                        <div>Sunset time</div>
                        <div>{this.props.sunset}</div>
                    </div>
                    <div className="weather-item">
                        <div>Wind speed</div>
                        <div>{this.props.wind} m/sec</div>
                    </div>
                </div>
                }
                <p className="error">{this.props.error}</p>
            </div>
        )
    }
}
export default Weather;