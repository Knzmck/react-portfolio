import React, { Component } from 'react';
import ProfilePic from './croppedprofpic.jpg'
import Resume from './updatedresume2020.pdf'

class About extends Component {

    handleClick(e) {
        e.preventDefault();
        window.open(Resume)
    }

    render() {
        return (
            <div>
                <div className="card" id="container0">
                    <div className="card-body">
                        <div className="row">
                            <div className="media">
                                <img src={ProfilePic} alt="picture of Mackenzie." className="profilepic mr-5 mt-5"></img>
                                <section className="media-body">
                                    <p className="description">
                                        <h3><b>Hello!</b></h3>
                                        <h5>Allow me to introduce myself...</h5>
                        My name is Mackenzie Schutz. I am a Registered Nurse, Marketing Consultant & Full Stack Web Developer [in training] from the
                        Kansas City area.
                                    </p>
                                    <button className="btn btn-info" id="resume-btn" onClick={this.handleClick}>See My Full Resume Here</button>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;