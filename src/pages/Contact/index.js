import React, { Component } from 'react';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';

class Contact extends Component {

    render() {
        return (
            <main className="card">
                <div className="card-body">
                    <div className="mb-4" id="container2">
                        <section className="mb-4">
                            <h2 className="contact-header">Contact me</h2>
                            <div className="row">
                                <div className="col-md-9 mb-md-0 mb-5">
                                    <ContactForm />
                                    <div class="text-center text-md-left">
                                        <a class="btn btn-info">Send</a>
                                    </div>
                                </div>
                                <ContactInfo />
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;