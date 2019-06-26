import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <Link to="/p" className="navbar-brand">
                React CRUD & Routing
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/p" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/new" className="nav-link">New Product</Link>
                </li>
            </ul>
        </div>
    </nav>
);

 
export default Header;