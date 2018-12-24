import React, { Component } from 'react';
import "./sideToolbar.css"
import {Link} from "react-router-dom";

class SideToolbar extends Component {
    state = {  }
    render() { 
        let sideToolbarClasses = "side-toolbar";

        if (this.props.show) {
            sideToolbarClasses = "side-toolbar open";
        }

        return ( 
            <nav className = {sideToolbarClasses}>
                <ul>
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/projects"><li>Projects</li></Link>
                    <Link to = "/about"><li>About</li></Link>
                    <Link to = "/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        );
    }
}

export default SideToolbar;