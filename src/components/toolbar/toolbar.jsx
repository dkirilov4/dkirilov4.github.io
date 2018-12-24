import React, { Component } from 'react';
import "./toolbar.css"

import SideToolbarToggleButton from "../sideToolbar/sideToolbarToggleButton";

import logo_mouseout from "./logo-before.png"
import logo_mouseover from "./logo-after.png"

import {Link} from "react-router-dom";



class Toolbar extends Component {
    state = {
        logo: logo_mouseout
    }

    render() { 
        return ( 
        <header className = "toolbar">
            <nav className = "toolbar__nav">
                <div className = "toolbar__toggle-button">
                    <SideToolbarToggleButton click = {this.props.handleToolbarClick}/>
                </div>
                <div className = "toolbar__logo">
                    <Link to = "/">
                    <img
                        src = {this.state.logo}
                        alt = "logo"
                        onMouseOver = { this.handleMouseOver } 
                        onMouseOut  = { this.handleMouseOut }>
                    </img>
                    </Link>
                </div>
                <div className = "spacer"></div>
                <div className = "toolbar__nav-items">
                    <ul>
                        <Link to = "/"><li>Home</li></Link>
                        <Link to = "/projects"><li>Projects</li></Link>
                        <Link to = "/about"><li>About</li></Link>
                        <Link to = "/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }

    handleMouseOver = () =>
    {
        this.setState({
            logo: logo_mouseover
        })
    }

    handleMouseOut = () =>
    {
        this.setState({
            logo: logo_mouseout
        })
    }
}
 
export default Toolbar;