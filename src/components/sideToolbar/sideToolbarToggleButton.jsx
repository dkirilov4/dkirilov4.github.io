import React, { Component } from 'react';

class SideToolbarToggleButton extends Component {
    state = {  }
    render() { 
        return ( 
            <button className = "toggle-button" onClick = {this.props.click}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
        );
    }
}
 
export default SideToolbarToggleButton;