import React, { Component } from 'react';
import Header from "../../components/Header";
import Project from "../../components/Project";

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Header />
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