import React, { Component } from 'react';

import Toolbar from './toolbar/toolbar'
// import Footer from './footer'
import SideToolbar from './sideToolbar/sideToolbar'
import Backdrop from './backdrop/backdrop'

import Projects from "./views/projects"
import Home from "./views/home"

import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {
    state = { 
        sideToolbarOpen: false
    }

    render() {
        let backdrop;

        if (this.state.sideToolbarOpen) {
            backdrop = <Backdrop click = {this.handleBackdropClick}/>;
        }
        return ( 
            <Router>
            <div id = "router">
                <React.Fragment>
                    <div className = "content" style = {{marginTop: "64px"}}>
                        <Toolbar handleToolbarClick = {this.handleSideToolbarToggleButton}/>
                        <SideToolbar show = {this.state.sideToolbarOpen}/>
                        {backdrop}
                        
                    </div>

                    <Route exact = {true} path = "/" component = {Home}></Route>
                    <Route path = "/projects" component = {Projects}></Route>

                    {/* <Footer/> */}
                </React.Fragment>
            </div>
            </Router>
         );
    }

    handleSideToolbarToggleButton = () => {
        this.setState((prevState) => {
            return {sideToolbarOpen: !prevState.sideToolbarOpen}
        });
    }

    handleBackdropClick = () => {
        this.setState({sideToolbarOpen: false})
    }
}
 
export default App;