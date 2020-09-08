import React, { Component } from 'react';
import Project from "../Portfolio/components/Project";
import WeatherPic from "../../assets/weather.jpg";
import drinks from "../../assets/tulips-drink-and-books.jpg";
import burger from "../../assets/burger.jpg";
import note from "../../assets/note.jpg";
import directory from "../../assets/employeedir.PNG";
import fitness from "../../assets/dashboard.PNG";
import jobspot from "../../assets/jobSpotScreenShot.png"
import "./style.css";

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
        title: "JobSpot",
        picture: jobspot,
        repo: "https://github.com/Anverch/JobSpot.git",
        app: "https://job-spot.herokuapp.com/"
    },
    {
        id: 3,
        title: "Burger App",
        picture: burger,
        repo: "https://github.com/Knzmck/burger.git",
        app: "https://eat-da-burger-nomnom.herokuapp.com/"
    },
    {
        id: 4,
        title: "Note Taker App",
        picture: note,
        repo: "https://github.com/Knzmck/note-taker.git",
        app: "https://radiant-dusk-28475.herokuapp.com/"
    },
    {
        id: 5,
        title: "React Employee Directory",
        picture: directory,
        repo: "https://github.com/Knzmck/employee-directory.git",
        app: "https://employee-directory-of-wonder.herokuapp.com/"
    },
    {
        id: 6,
        title: "Fitness App",
        picture: fitness,
        repo: "https://github.com/Knzmck/fitness-app.git",
        app: "https://workin-out.herokuapp.com/"
    },
    {
        id: 7,
        title: "Cocktail Finder",
        picture: drinks,
        repo: "https://github.com/Knzmck/Drinking-At-Home.git",
        app: "https://knzmck.github.io/Drinking-At-Home/"
    },
]

class Portfolio extends Component {

    render() {
        return (
            <main className="portfolio-container">
                <div className="row">
                    <h2 className="portfolio-header mt-4"> Portfolio </h2>
                </div>
                <div className="row">
                    <Project projects={portfolioInfo} />
                </div>
            </main>
        );
    }
}

export default Portfolio;