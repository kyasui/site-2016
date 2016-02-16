'use strict';

import React              from 'react';
import {Router}           from 'react-router';
import ProjectsData       from '../data/ProjectsData';

class OverlayProjects extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    var projects;

    projects = ProjectsData['projects'].map((project, index) => {
      return (
        <a key={"key-" + index} ref={"project-" + project['project-slug']} href="" onClick={this.props.handleClick.bind(this, '/project/' + project['project-slug'])} className="overlay-heading overlay-project-link animate-this">{ project['project-title'] }</a>
      )
    });

    console.log(projects);
    return (
      <div className="overlay-content info-content content-width">
        { projects }
      </div>
    );
  }

}



export default OverlayProjects;