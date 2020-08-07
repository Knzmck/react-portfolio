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
                        <div className="media">
                            <img src={ProfilePic} alt="picture of Mackenzie." className="profilepic mr-5 mt-5"></img>
                            <section className="media-body">
                                <p className="description">
                                    <br></br>
                                    <h3>Hello!</h3>
                        My name is Mackenzie Schutz. I am a Registered Nurse, Marketing Consultant & Full Stack Web Developer [in training] from the
                        Kansas City area.
                                    </p>
                            </section>
                        </div>
                    </div>
                <button className="btn" id="resume-btn" onClick={this.handleClick}>See My Full Resume Here</button>
            </div>
        );
    }
}

export default About;