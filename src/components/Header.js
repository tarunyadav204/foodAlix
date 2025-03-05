import React from 'react'
import Assignment from "../../assest/assignment.png";
import { Link } from 'react-router';


const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={Assignment} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </header>
    );
}

export default Header