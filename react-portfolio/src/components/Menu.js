import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <div class="navigation">
            <li class="navigation-link">
                <Link to="/">Home</Link>
            </li>
            <li class="navigation-link">
                <Link to="/about">About</Link>
            </li>
            <li class="navigation-link">
                <Link to="/contact">Contact</Link>
            </li>
            <li class="navigation-link">
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li class="navigation-link">
                <Link to="/resume">Resume</Link>
            </li>
        </div>
    );
}

export default navbar;