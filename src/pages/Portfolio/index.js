import React, { Component } from 'react';
import Project from "../../components/Project";
import WeatherPic from "../../assets/weather.jpg"

const portfolioInfo = [
    {
        id: 1,
        title: "Weather App",
        picture: WeatherPic,
        repo: "https://github.com/Knzmck/weather-dashboard.git",
        app: "https://knzmck.github.io/weather-dashboard/"
    },
    {
        id: 2,
        title: "Weather App",
        picture: WeatherPic,
        repo: "https://github.com/Knzmck/weather-dashboard.git",
        app: "https://knzmck.github.io/weather-dashboard/"
    }

]

class Portfolio extends Component {
    
    render() {
        return (
            <div>
                <main className="card container1" id="container1">
                    <div className="row">
                        <Project projects={portfolioInfo} />
                    </div>
                </main>
            </div>
        );
    }
}

export default Portfolio;