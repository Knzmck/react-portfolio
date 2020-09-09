import React from "react";
import { Link } from 'react-router-dom';


function Navbar() { 
    return (
        <nav className="navbar navbar-info">
            <form className="form-inline">
                <button className="navbtn btn btn-outline-dark" type="button"> <Link to="/" className="nav-text">About </Link></button>
                <button className="navbtn btn btn-sm btn-outline-dark" type="button"><Link to="/portfolio" className="nav-text">Portfolio </Link></button>
                <button className="navbtn btn btn-sm btn-outline-dark" type="button"><Link to="/contact" className="nav-text">Contact</Link></button>
            </form>
        </nav>
    );
}
export default Navbar;