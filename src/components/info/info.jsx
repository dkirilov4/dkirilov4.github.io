import React, { Component } from 'react';
import "./info.css"
import VerticalNonLinearStepper from "../verticalNonLinearStepper/verticalNonLinearStepper"
import DataTable from '../datatable/datatable';

class Info extends Component {
    state = {  }
    render() { 
        return (
            <div className = "info m1">
                <div className = "info__employment">
                    <div className = "info-title"> Employment</div>
                    <VerticalNonLinearStepper/>
                </div>
                <div className = "info__education">
                    <div className = "info-title"> Education</div>
                    <div className = "education-background">
                        <div className = "education-background-primary">BS in Computer Science at University of Illinois at Chicago</div>
                        <div className = "education-background-secondary">Fall 2015 - Fall 2018</div>
                        <div className = "divider"><hr></hr></div>
                        <DataTable></DataTable>
                    </div>
                    
                </div>
                <div className = "info__skills">
                    <div className = "info-title"> Skills

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Info;