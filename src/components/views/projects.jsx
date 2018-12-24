import React, { Component } from 'react';

import PropTypes from "prop-types";
import Project from "../project/project";

const projects = [
    {id: 1, 
        title: "Top-Down Strategy RPG", 
        description: "A collaborative project made for my Software Design Course. For this project, we created a top-down strategy game based off of the Fire Emblem series. The entire game was coded from scratch in Java and utilized several design patterns. More information about the project can be found at our project", 
        info: "Info 1",
        members: ["Dimitar Kirilov, ", "David Fulmer, ", "Kaeyan Jones"],
        repoLink: "https://github.com/fulmerd627/342Project/",
        projectPage: "",
        moreInfo: "https://docs.google.com/document/d/1zwF77UoKWqC2kDMRkwoWGqfiJbBRGeje0rGu1bg2X0A/edit?ts=589bc961/",
        created: "TODO",
        lastCommit: "TODO"
    },
    {id: 2, 
        title: "In Your Room - Virtual Reality", 
        description: "A collaborative project made for my Virtual/Augmented Reality Course. For this project, we were instructed to remake our classrooms at EVL into a room that would be our ideal office area. Our approach was to make a room that made us feel comfortable and at ease when working. In order to achieve both those goals, we decided to divide our office space into two main areas - a work area and a lounging area. ", 
        info: "",
        members: ["Dimitar Kirilov, ", "Bartosz Kupiec"],
        repoLink: "",
        projectPage: "",
        moreInfo: "https://docs.google.com/document/d/1T9klDWaqO9k28f0W24KQkNT3KcGQzdViCLzAhClgprc/",
        created: "TODO",
        lastCommit: "TODO"
    },
    {id: 3, 
        title: "Here Comes the Sun - Virtual Reality", 
        description: "This was a collaborative project made for my Virtual/Augmented Reality Course. The goal of this project was to create an interactive virtual reality application, where the user can interact with the different views of over 600 solar systems.",
        info: "",
        members: ["Dimitar Kirilov, ", "Bartosz Kupiec, ", "Peter Hanula"],
        repoLink: "https://github.com/bkupie/cs491",
        projectPage: "",
        moreInfo: "https://docs.google.com/document/d/1LRmvnfy6RCGhEGBIxd4zOVKG0sksjkmztmgMlu5liS0/",
        created: "TODO",
        lastCommit: "TODO"
    },
    {id: 4, 
        title: "GuARdians of Fort Joy - Augmented Reality", 
        description: "A collaborative project made for my Virtual/Augmented Reality Course. The project features an interactive augmented reality multiplayer for mobile users. The goal of the game is to defend the center from oncoming waves of enemies using one of three selectable heroes, each of which has different abilities. The game features real world interraction as well by introducing cards which can be placed and augmented into the game", 
        info: "",
        members: ["Dimitar Kirilov, ", "Bartosz Kupiec"],
        repoLink: "",
        projectPage: "",
        moreInfo: "https://docs.google.com/document/d/1KK9p8q9QxS0dyKzY5bArRy8Y0uX0mHnFEfoZ7ayIdco/",
        created: "TODO",
        lastCommit: "TODO"
    },

    /* Blank Template:
        {id: , 
            title: "", 
            description: "", 
            info: "",
            members: [],
            repoLink: "",
            projectPage: "",
            moreInfo: "",
            created: "TODO",
            lastCommit: "TODO"
        },
    */
    
]

class Projects extends Component {
    state = {  }
    render() { 

        return ( 
            <div className = "projects">
                {projects.map(p => 
                    <Project key = {p.id} title = {p.title} 
                             description = {p.description} 
                             info = {p.info} 
                             members = {p.members} 
                             repoLink = {p.repoLink}
                             projectPage = {p.projectPage}
                             moreInfo = {p.moreInfo}></Project>
                )}
            </div>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
}
 
export default Projects;