import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function Project(props) {
    return (
        // <div className="card">
        //     <img src={ProfilePic} alt="picture of Mackenzie." className="profilepic mr-5 mt-5"></img>
        //     <button className="btn btn1" id="weather-btn">Weather Dashboard App</button>
        //     <button className="btn btn2" id="weather-repo"> Repository </button>
        // </div>
        <ul>
            {props.projects.map(item => (
                <li className="row" key={item.id}>
                    {item.title}
                    <img className="project-icon" src= {item.picture}></img>
                    <Link className="col" to={item.repo}> Repo</Link>
                    <Link className="col" to={item.repo}> App</Link>
                </li>
                // <li key={item.id}> 
                // {item.title}
                //  </li>
            ))}
        </ul>
    );
}

export default Project;