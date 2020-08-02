import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Project(props) {
    return (
        <div className="cardss">
            <ul>
                {props.projects.map(item => (
                    <li class="card project-card">
                        <div className="card-body" key={item.id}>
                           <h2>  {item.title} </h2>
                            <img className="project-icon" src={item.picture}></img>
                            <Link className="col link" to={item.repo}> <h3> Repo </h3></Link>
                            <Link className="col link" to={item.repo}><h3> App </h3></Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Project;