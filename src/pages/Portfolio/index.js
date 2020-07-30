import React, { Component } from 'react';
import Project from "../../components/Project";


class Portfolio extends Component {
    render() {
        return (
            <div>
                <main className="card container1" id="container1">
                    <div className="row">
                        <Project />
                    </div>
                </main>
            </div>
        );
    }
}

export default Portfolio;