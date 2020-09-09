import React, { Component } from 'react';
import Icon from './components/Icon';
import ContactInfo from './components/ContactInfo';
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
                <div className="contactpg card-body">
                    <h2 className="contact-header">Let's chat!</h2>
                    <div className="row no-gutters">
                        <ContactInfo />
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