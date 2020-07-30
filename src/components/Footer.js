import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <nav class="footernav">
                    <button id="linkedin" type="button" class="btn btn-li"><i class="fa fa-linkedin-square"></i></button>
                    <button id="github" type="button" class="btn btn-li"><i class="fa fa-github-square"></i></button>
                </nav>
            </footer>
        );
    }
}

export default Footer;