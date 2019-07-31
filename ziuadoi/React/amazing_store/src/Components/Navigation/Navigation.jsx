import React from 'react';
import './Navigation.css';


class Navigation extends React.Component {
    render () {
        return <nav className="navigation">
            <ul className="main-menu">
                <li className="menu-item">Shipping</li>
                <li className="menu-item">Blog</li>
                <li className="menu-item">Company</li>
                <li className="menu-item">My account</li>
            </ul>
        </nav>
    }
}

export default Navigation;