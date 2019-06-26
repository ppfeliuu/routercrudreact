import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <Link to="/p" className="navbar-brand">
                React CRUD & Routing
            </Link>
        </div>
    </nav>
);

 
export default Header;