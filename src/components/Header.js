import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
    <header class = "headerbackground">
        <h1 class="main-header">Mackenzie Schutz</h1>
        <nav class="navbar navbar-info">
            <form class="form-inline">
                <button className="navbtn btn btn-outline-dark" type="button" component= { Link } to="/about"> <Link to= "/" >About </Link></button>
                <button class="navbtn btn btn-sm btn-outline-dark" type="button"><Link to= "/portfolio" >Portfolio </Link></button>
                <button class="navbtn btn btn-sm btn-outline-dark" type="button"><Link to= "/contact" >Contact</Link></button>
            </form>
        </nav>
    </header>
    );
}
export default Header;