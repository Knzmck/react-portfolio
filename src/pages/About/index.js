import React, { Component } from 'react';
import ProfilePic from './croppedprofpic.jpg'
import Resume from './updatedresume2020.pdf'
import "./style.css";

class About extends Component {

    handleClick(e) {
        e.preventDefault();
        window.open(Resume)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={ProfilePic} alt="picture of Mackenzie." className="profilepic mr-5 mt-5"></img>
                    <card className="card col-md-6 mt-5 desc-card">
                        <h2>Welcome to my page!</h2>
                        <text className="desc-text"> I am a Full Stack Web Developer & Registered Nurse from the Kansas City area seeking web development opportunities and projects.  </text>
                        <button className="btn mt-4" id="resume-btn" onClick={this.handleClick}>See My Full Resume Here</button>
                    </card>
                </div>

            </div>
        );
    }
}

export default About;