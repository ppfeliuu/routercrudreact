import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <Link to="/p" className="navbar-brand">
                React CRUD & Routing
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/p" className="nav-link" activeClassName="active">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/new" className="nav-link" activeClassName="active">New Product</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

 
export default Header;