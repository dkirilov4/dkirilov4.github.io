import React, { Component } from 'react';
import "./project.css"

class Project extends Component {
    state = {  }
    render() { 
        var repoLink;
        var projectPage;
        var moreInfo;

        if (this.props.repoLink !== "") {
            repoLink = <div className = "project__links-repo"><button className = "project__links-repo-btn"><i className="fa fa-github fa-lg" aria-hidden="true"></i><a rel="noopener noreferrer" target="_blank" href = {this.props.repoLink}>Code Repository</a></button></div>
        }
        if (this.props.projectPage !== "") {
            projectPage = <div className = "project__links-page"><button className = "project__links-page-btn"><i className="fa fa-file-text-o fa-lg" aria-hidden="true"></i><a rel="noopener noreferrer" target="_blank" href = {this.props.projectPage}>Project Page</a></button></div>
        }
        if (this.props.moreInfo !== "") {
            moreInfo = <div className = "project__links-info"><button className = "project__links-info-btn"><i className="fa fa-external-link fa-lg" aria-hidden="true"></i><a rel="noopener noreferrer" target="_blank" href = {this.props.moreInfo}>More Info</a></button></div>
        }

        return ( 
            <div className = "project">
                <div className = "project__title">
                    {this.props.title}
                </div>

                <div className = "project__info">
                    <div className = "project__info-description">
                        <div className = "project-text-primary">Project Description:</div>
                        
                        <br></br>
                        {this.props.description}
                    </div>
                    <div className = "project__info-info">
                        <div className = "project-text-primary">Project Information:</div>
                        <br></br>
                        <div className = "project__info-members">
                            <div className = "project-text-secondary"> Members: </div>
                            {this.props.members}
                        </div>
                    </div>
                </div>
                
                <div className = "project__links">
                    {repoLink}
                    {projectPage}
                    {moreInfo}
                </div>
            </div>
        );
    }
}
 
export default Project;