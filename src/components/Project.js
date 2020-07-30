import React, { Component } from 'react';
import ProfilePic from '../assets/weather.jpg'

class Project extends Component {
    render() {
        return (
            <div className="card">
                <img src={ProfilePic} alt="picture of Mackenzie." className="profilepic mr-5 mt-5"></img>
                <button className="btn btn1" id="weather-btn">Weather Dashboard App</button>
                <button className="btn btn2" id="weather-repo"> Repository </button>
            </div>
        );
    }
}

export default Project;