import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <nav className="footernav">
                    <button id="linkedin" type="button" className="btn btn-li"><i class="fa fa-linkedin-square" onClick={ ()=> window.open("https://linkedin.com/in/mackenzie-schutz")}></i></button>
                    <button id="github" type="button" className="btn btn-li"><i class="fa fa-github-square" onClick={ ()=> window.open("https://github.com/Knzmck")}></i></button>
                </nav>
            </footer>
        );
    }
}

export default Footer;