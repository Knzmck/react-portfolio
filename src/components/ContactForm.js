import React, { Component } from 'react';

class ContactForm extends Component {
    sendEmail(e) {
        e.preventDefault();
        console.log("clicked send email button");
        // Clear out form
    }
    render() {
        return (
            <form action="mailto:mshoots64@gmail.com">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"></input>
                            <label for="name">Your
                        name</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"></input>
                            <label for="email">Your
                        email</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"></input>
                            <label for="subject"
                            >Subject</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2"
                                class="form-control md-textarea"></textarea>
                            <label for="message" >Your
                        message</label>
                        </div>
                    </div>
                </div>
                <div class="text-center text-md-left">
                    <a class="btn btn-info" type="submit" value="send" onClick={this.sendEmail}>Send</a>
                </div>
            </form>
        );
    }
}

export default ContactForm;