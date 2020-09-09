import React from 'react';
import ProfilePic from '../../About/croppedprofpic.jpg'

function ContactInfo() {
    return (
        <div className="col-12 col-sm-6 col-md-8 mb-4 card contact-card">
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
    )
}
export default ContactInfo;