import React, { Component } from 'react';
import "./verticalNonLinearStepper.css"

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';


class VerticalNonLinearStepper extends Component {
    state = { 
        activeStep: 0
    }

    render() {
        const steps = this.getSteps();
        const { activeStep } = this.state;
    
        return (
            <div className = "stepper">
                <Stepper nonLinear activeStep = {activeStep} 
                         orientation = "vertical" 
                         className ="stepper__vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key = {label}>
                                <StepButton onClick = {this.handleStep(index)} className = "stepper__button">
                                    <StepLabel><span className = "stepper__step-label-primary">{label.primary}</span></StepLabel>
                                    <StepLabel><span className = "stepper__step-label-secondary">{label.secondary}</span></StepLabel>
                                </StepButton>
                                <StepContent>
                                    <Typography className = "stepper__step-content-subheading">{this.getStepContent(index).subheading}</Typography>
                                    <Typography className = "stepper__step-content-body">{this.getStepContent(index).body}</Typography>
                                </StepContent>
                            </Step>
                        )
                    })}
                </Stepper>
            </div>
        );
    }

    getSteps() {
        return [
            {primary: "Software Developer Research Assistant",
             secondary: "Fall 2017 - Fall 2018"},
            {primary: "Research Intern",
             secondary: "Summer 2017"}]
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return {
                    subheading: "University of Illinois at Chicago | Chicago, IL",
                    body: <React.Fragment>
                        Description
                    </React.Fragment>
                };
            case 1:
                return {
                    subheading: "University of Illinois at Chicago | Chicago, IL",
                    body: <React.Fragment>
                    Description
                </React.Fragment>
                };
            default:
                return {
                    subheading: "Unknown step",
                    body: "Unknown step"
                };
        }
    }

    handleStep = step => () => {
        this.setState({activeStep: step})
    }
}
 
export default VerticalNonLinearStepper;