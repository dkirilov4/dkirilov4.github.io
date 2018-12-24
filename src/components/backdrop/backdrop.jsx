import React, { Component } from 'react';
import "./backdrop.css"

class Backdrop extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "backdrop" onClick = {this.props.click}></div>
        );
    }
}
 
export default Backdrop;