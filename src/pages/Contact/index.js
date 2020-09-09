import React, { Component } from 'react';
import Icon from './components/Icon';
import ContactInfo from './components/ContactInfo';
import ProfilePic from '../About/croppedprofpic.jpg'
import "./style.css";

const iconInfo = [
    {
        id: 1,
        name: "Github",
        buttonId: "github",
        iClassName: "fa fa-github-square",
        link: "https://github.com/Knzmck"
    },
    {
        id: 2,
        name: "LinkedIn",
        buttonId: "linkedin",
        iClassName: "fa fa-linkedin-square",
        link: "https://linkedin.com/in/mackenzie-schutz"
    }
]

class Contact extends Component {

    render() {
        return (
            <main className="contactpg container card">
                <div className="card-body">
                    <h2 className="contact-header">Let's connect!</h2>
                    <div className="row">
                        <div className="col-md-8 mb-4 card contact-card">
                            <div className="row">
                                <img src={ProfilePic} alt="picture of Mackenzie." className="contactpic mr-5 mt-5"></img>
                                <text className="mt-5 ml-3 contact-info">
                                    <h3>Mackenzie Schutz</h3>
                                    <h5 className="mt-2">Full Stack Web Developer</h5>
                                    <h6 className="mt-3">mshoots64@gmail.com</h6>
                                    <h6 className="mt-2">C. 913-660-2003</h6>
                                </text>
                            </div>
                        </div>
                        <div className="col-6 col-md-4">
                            <Icon icons={iconInfo} />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;