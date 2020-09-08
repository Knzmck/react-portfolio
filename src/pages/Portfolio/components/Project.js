import React from 'react';

function Project(props) {
    return (
        <div className="container cards">
                {props.projects.map(item => (
                    <li className="card project-card col-lg-4 col-md-6 col-sm-12 m-4">
                        <div className="card-body" key={item.id}>
                            <h2 className="project-title">  {item.title} </h2>
                            <img className="project-icon" src={item.picture}></img>
                            <div className="row project-btn">
                                <button className="btn"><a className="projecta" target="_blank" href={item.repo}>Repo</a>  </button>
                                <button className="btn"><a className="projecta" target="_blank" href={item.app}>App</a> </button>
                            </div>
                        </div>
                    </li>
                ))}
        </div>
    );
}

export default Project;