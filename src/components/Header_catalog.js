import React from 'react';
import "../style2.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <img className='logo' src='/images/logo.png' alt="Logo" />
            <div className='nav-header'>
                <nav className='catalog_nav'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/catalog'>Catalog</Link>
                        </li>
                        <li>
                            <Link to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </div>
    );
}

export default Header;
