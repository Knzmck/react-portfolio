import React, { Component } from 'react';
import Project from "../../components/Project";
import WeatherPic from "../../assets/weather.jpg";
import drinks from "../../assets/tulips-drink-and-books.jpg";
import burger from "../../assets/burger.jpg";
import note from "../../assets/note.jpg";
import directory from "../../assets/employeedir.PNG";
import fitness from "../../assets/dashboard.PNG";

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
        title: "Cocktail Finder",
        picture: drinks,
        repo: "https://github.com/Knzmck/Drinking-At-Home.git",
        app: "https://knzmck.github.io/Drinking-At-Home/"
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