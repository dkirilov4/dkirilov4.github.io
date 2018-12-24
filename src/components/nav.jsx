import React, { Component } from 'react';

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
        <div id = "navbar">
            <ul className="main-nav" id="menu">
                <li>
                    <a href="./" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="./" className="nav-link">Projects</a>
                </li>
                <li>
                    <a href="./" className="nav-link">About</a>
                </li>
                <li>
                    <a href="./" className="nav-link">Contact</a>
                </li>
            </ul>
        </div>  
        );
    }

    toggleNavBar()
    {
        let mainNav = document.getElementById('menu');
        mainNav.classList.toggle('active');
    }
}
 
export default Navigation;