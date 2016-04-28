'use strict';

import 'babel-polyfill';
import React              from 'react';
import {Link}             from 'react-router';
import ImagesLoaded       from 'imagesLoaded';
import Velocity           from 'velocity-animate';

import ProjectsData       from '../data/ProjectsData';
import BadUtils           from '../utils/BadUtils';

class Project extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      scrollFunction: {},
      isAnimatingToNextProject: false
    };

    this.nextProject = this.nextProject.bind(this);
  }

  nextProject(projectId, e) {
    e.preventDefault();
    this.setState({
      isAnimatingToNextProject: true
    });
    Velocity(document.getElementsByTagName('html')[0], 'scroll', {
      offset: 0,
      duration: 200,
      complete: () => {
        Velocity(this.refs['project'],
          {
            translateZ: [ 0, 0 ],
            opacity: [ 0.0, 1.0 ]
          },
          {
            duration: 200,
            easing: [.22,.22,.18,1],
            complete: () => {
              this.props.history.pushState(null, projectId);
              ga('set', 'page', projectId);
            }
          });
      }
    });
  }

  componentWillAppear(callback) {
    this.initProject(false, false, callback);
  }

  initProject(shouldAnimate, isFromProject, callback) {
    var self = this;

    this.props.setNav(null, shouldAnimate, null, this.props.params.slug, isFromProject);

    var projectElements = this.refs['project'].querySelectorAll('.animate-this');

    var position = document.body.scrollTop,
        scrollTimer = -1;

    var scrollFunction = function() {
      var scroll = document.body.scrollTop,
          action = 'SHOW';

      if (scroll > position) {
        action = 'HIDE';
      } else {
        action = 'SHOW';
      }

      if (scrollTimer != -1)
        clearTimeout(scrollTimer);

      scrollTimer = setTimeout(self.props.controlDesc(action, self.props.params.slug), 500);
      position = scroll;
    }

    Velocity(document.getElementsByTagName('html')[0], 'scroll', {
        offset: 0,
        duration: 125,
        complete: () => {
          self.setState({
            scrollFunction: BadUtils.debounce(() => {
              scrollFunction();
            }, 0)
          });

          window.addEventListener('scroll', self.state.scrollFunction);
        }
    });

    Velocity(this.refs['project'],
      {
        opacity: 1.0
      },
      {
        duration: 250,
        display: 'block',
        easing: [.22,.22,.18,1],
        complete: function() {
          var imgLoad = ImagesLoaded(self.refs['project'], { background: '.js-image' }),
              projectImg = self.refs['project'].querySelector('.project-header-image'),
              preloader = self.refs['project'].querySelector('.preloader');

          imgLoad.on('progress', (instance, image) => {}).on('always', () => {
            Velocity(projectImg,
              {
                opacity: [ 1.0, 0.0 ]
              },
              {
                duration: 1000,
                delay: 500,
                easing: [.22,.22,.18,1]
              });

            Velocity(preloader,
              {
                opacity: [ 0.0, 1.0 ]
              },
              {
                duration: 1000,
                easing: [.22,.22,.18,1]
              });
          });

          setTimeout(() => {
            [...projectElements].forEach((el, index) => {
              Velocity(el,
              {
                translateY: [ 0, -10 ],
                translateZ: [ 0, 0 ],
                opacity: [ 1.0, 0.0 ]
              },
              {
                duration: 180,
                delay: 25 * (index + 1),
                easing: [.22,.22,.18,1]
              });
            });

            self.refs['project'].classList.add('current-active-project');
            callback()
          }, 600);
        }
      });
  }

  componentWillEnter(callback) {
    this.initProject(true, true, callback);
  }

  componentDidMount() {

  }

  componentDidAppear() {

  }

  componentDidEnter() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.params.slug != this.props.params.slug;
  }

  componentWillLeave(callback) {
    var self = this;

    window.removeEventListener('scroll', self.state.scrollFunction);

    if (!self.state.isAnimatingToNextProject) {
      self.props.resetNav(null, this.props.params.slug);

      Velocity(this.refs['project'],
        {
          translateZ: [ 0, 0 ],
          opacity: [ 0.0, 1.0 ]
        },
        {
          duration: 200,
          easing: [.22,.22,.18,1],
          complete: () => {
            callback();
          }
        });
    } else {
      callback();
    }
  }

  componentDidLeave() {
  }

  render() {
    var currentProject;
    var nextProject;

    ProjectsData.projects.forEach((project, index) => {
      if (project['project-slug'] === this.props.params.slug) {
        currentProject = project;
        if ((index + 1) > ProjectsData.projects.length - 1) {
          nextProject = ProjectsData.projects[0];
        } else {
          nextProject = ProjectsData.projects[index + 1];
        }
      }
    });

    return (
      <div ref="project" className="project">
          {(() => {
            return (
              <header className="project-header">
                <div className="project-header-image-holder animate-this">
                  <div className="project-header-image-content">
                      <div className="preloader"></div>
                      <img className="project-header-image js-image" src={currentProject['image']} />
                  </div>
                </div>
              </header>
            );
          })()}
        <div className="project-details">

          <div className="project-column col-3-3 animate-this">
            <div className="project-detail-body">
              <div className="project-row">
                <div className="proj-detail-col">
                  <strong className="project-detail-body-heading">Info</strong>
                </div>
                <div className="proj-detail-col">
                  {(() => {
                    var details = currentProject['description'].map((body, index) => {
                      return(
                        <p className="project-detail-body" key={index} dangerouslySetInnerHTML={{__html: body}}></p>
                      )
                    });

                    return details;
                  })()}
                </div>
              </div>
              <div className="project-row">
                <div className="proj-detail-col">
                  <strong className="project-detail-body-heading">Role</strong>
                </div>
                <div className="proj-detail-col">
                  <p>{currentProject['role']}</p>
                </div>
              </div>
              <div className="project-row">
                <div className="proj-detail-col">
                  <strong className="project-detail-body-heading">Year</strong>
                </div>
                <div className="proj-detail-col">
                  <p>{currentProject['year']}</p>
                </div>
              </div>
              <div className="project-row">
                <div className="proj-detail-col">
                  <strong className="project-detail-body-heading">Tech</strong>
                </div>
                <div className="proj-detail-col">
                  <p>
                  {(() => {
                    var techDetails = currentProject['tech'].map((tech, index) => {
                      return(
                        <span className="project-tech-detail" key={index}>{tech}</span>
                      )
                    });

                    return techDetails;
                  })()}
                  </p>
                </div>
              </div>
              <div className="project-row">
                <div className="proj-detail-col">
                  <strong className="project-detail-body-heading">Credits</strong>
                </div>
                <div className="proj-detail-col">
                  <p>
                  {(() => {
                    if (currentProject['credits']) {
                      var creditDetails = currentProject['credits'].map((credit, index) => {
                        if (!credit['linkItself']) {
                          return(
                            <span className="project-detail-link" key={index}>{credit['credit']}</span>
                          )
                        } else {
                          return(
                            <a className="project-detail-link" href={credit['linkItself']} target="_blank" key={index}>{credit['credit']}</a>
                          )
                        }
                      });
                    }

                    return creditDetails;
                  })()}
                  </p>
                </div>
              </div>
                {(() => {
                  if (currentProject['links']) {
                    var linkDetails = currentProject['links'].map((link, index) => {
                      return(
                        <a className="project-detail-link" href={link['linkItself']} target="_blank" key={index}>{link['linkText']}</a>
                      )
                    });

                    return (
                      <div className="project-row">
                        <div className="proj-detail-col">
                          <strong className="project-detail-body-heading">Links</strong>
                        </div>
                        <div className="proj-detail-col">
                          <p>
                            {linkDetails}
                          </p>
                        </div>
                      </div>
                    )
                  }
                })()}
                <div className="project-row">
                  <div className="proj-detail-col">
                    <strong className="project-detail-body-heading">Next</strong>
                  </div>
                  <div className="proj-detail-col">
                    <p>
                      <a className="project-detail-link next-project-link" onClick={this.nextProject.bind(this, '/project/' + nextProject['project-slug'])} href={'/project/' + nextProject['project-slug']}>{nextProject['project-title']}
                        <svg className="next-button" fill="#000000" height="24" viewBox="0 0 24 24">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Project;