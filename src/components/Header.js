import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
        <h1 class="main-header">Mackenzie Schutz</h1>
        <nav class="navbar navbar-light ">
            <form class="form-inline">
                <button className="btn btn-outline-info" type="button" component= { Link } to="/about"> <Link to= "/" >About </Link></button>
                <button class="btn btn-sm btn-outline-secondary" type="button"><Link to= "/portfolio" >Portfolio </Link></button>
                <button class="btn btn-sm btn-outline-secondary" type="button"><Link to= "/contact" >Contact</Link></button>
            </form>
        </nav>
    </header>
    );
}
export default Header;