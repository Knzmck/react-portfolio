import React, { Component } from 'react';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';

class Contact extends Component {

    render() {
        return (
            <main className="card contactpg">
                <div className="card-body">
                    <div className="mb-4" id="container2">                       
                            <h2 className="contact-header">Contact me</h2>
                            <div className="row contactpgrow">
                                <div className="col-md-9 mb-md-0 mb-5">
                                    <ContactForm />
                                </div>
                                <ContactInfo />
                            </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;