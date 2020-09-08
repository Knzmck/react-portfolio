import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Header() {
    return (
        <header className="headerbackground">
            <div className= "navstyle row mt-4">
            <h1 className="mr-4 nav-name">Mackenzie Schutz</h1>
            <Navbar />
            </div>
    
        </header>
    );
}
export default Header;