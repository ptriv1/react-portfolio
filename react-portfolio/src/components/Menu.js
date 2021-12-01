import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return (
        <div className="navigation">
            <li class="navigation-link">
                <Link to="/About">About</Link>
            </li>
            <li class="navigation-link">
                <Link to="/Contact">Contact</Link>
            </li>
            <li class="navigation-link">
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li class="navigation-link">
                <Link to="/Resume">Resume</Link>
            </li>
        </div>
    );
}

export default navbar;