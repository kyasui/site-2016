'use strict';

import 'babel-polyfill';
import React              from 'react';
import ReactTransitionGroup    from 'react/lib/ReactTransitionGroup';

import Nav                from './components/Nav';
import Project            from './components/Project';
import Velocity           from 'velocity-animate';

import BadUtils           from './utils/BadUtils';

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleProjectClick = this.handleProjectClick.bind(this);
    this.setNav = this.setNav.bind(this);
    this.resetNav = this.resetNav.bind(this);
    this.controlDesc = this.controlDesc.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleProjectClick(projectId, e) {
    if (e) {
      e.preventDefault();
    }

    var self = this,
        targetParentEl = e.target.parentNode;

    if (targetParentEl.classList.contains('active-state')) {
      // Going backward
      this.props.history.pushState(null, '/');
      ga('set', 'page', '/');
    } else {
      // Going forward
      this.props.history.pushState(null, projectId);
      ga('set', 'page', projectId);
    }
  }

  controlDesc(action, slug) {
    var siteNav = this.refs['site-nav'].refs['site-nav'],
        currentProject = siteNav.querySelector('.nav-item-' + slug),
        projectDescription = currentProject.querySelector('.project-description');

    if (action === 'HIDE') {
      if (projectDescription.style.opacity > 0) {
        Velocity(projectDescription, 'stop');
        Velocity(projectDescription,
          {
            opacity: 0.0
          },
          {
            display: 'none',
            duration: 250,
            easing: [.35,.35,.18,1],
            complete: () => {
              projectDescription.classList.remove('is-animating');
            }
          });
      }
    } else {
      if (projectDescription.style.opacity < 1) {
        if (!projectDescription.classList.contains('is-animating')) {
          projectDescription.classList.add('is-animating');
          Velocity(projectDescription, 'stop');
          Velocity(projectDescription,
            {
              opacity: 1.0
            },
            {
              display: 'block',
              duration: 250,
              easing: [.35,.35,.18,1],
              complete: () => {
                projectDescription.classList.remove('is-animating');
              }
            });
        }
      }
    }
  }

  setNav(e, animated, projectId, slug, isTransitioningFromProject) {
    var siteNav = this.refs['site-nav'].refs['site-nav'],
        siteNavHeader = siteNav.querySelector('.site-nav-header'),
        projectItems = siteNav.querySelectorAll('.project-item'),
        currentProject = siteNav.querySelector('.nav-item-' + slug),
        targetParentEl;

    if (e) {
      targetParentEl = e.target.parentNode;
    } else {
      targetParentEl = currentProject;
    }

    var projectName = targetParentEl.querySelector('.project-name'),
        backButton = targetParentEl.querySelector('.back-button'),
        projectRole = targetParentEl.querySelector('.project-role'),
        projectDescription = targetParentEl.querySelector('.project-description');

    [...projectItems].forEach((el, index) => {

      el.classList.add('no-hover');

      if (el != targetParentEl) {
        Velocity(el,
        {
          opacity: 0.0
        },
        {
          duration: animated ? 250 : 0,
          easing: [.35,.35,.18,1],
          complete: () => {
            Velocity(el,
              {
                translateX: '-1000%',
                top: '30px'
              },
              {
                duration: 0,
                delay: 1500
              });
          }
        });

        if (isTransitioningFromProject) {
          var elProjectName = el.querySelector('.project-name'),
              elProjectRole = el.querySelector('.project-role'),
              elBackButton = el.querySelector('.back-button'),
              elProjectDescription = el.querySelector('.project-description');

          Velocity(elProjectName, 'stop');
          Velocity(elProjectName,
            {
              color: '#FFFFFF',
              translateX: 0
            },
            {
              duration: 250
            });

          Velocity(elProjectDescription, 'stop');
          Velocity(elProjectDescription,
            {
              translateX: [ '-5px', 0 ],
              opacity: 0.0
            },
            {
              duration: 250,
              display: 'none'
            });

          Velocity(elProjectRole, 'stop');
          Velocity(elProjectRole,
            {
              opacity: 0.0
            },
            {
              duration: 0
            });

          Velocity(elBackButton,
            {
              translateX: ['-12px', '0'],
              opacity: 0.0
            },
            {
              duration: 250,
              display: 'none'
            });

          Velocity(el,
            {
              top: el.dataset.originalTop,
              translateX: [0, 0],
              translateZ: 0
            },
            {
              duration: 0,
              complete: () => {
                Velocity(el,
                  {
                    opacity: 1.0
                  },
                  {
                    easing: [.35,.35,.18,1],
                    duration: 200
                  });
              }
            });

        }
      } else {
        Velocity(siteNavHeader, 'stop');
        Velocity(siteNavHeader,
        {
          opacity: 0.0,
          translateZ: 0
        },
        {
          duration: animated ? 250 : 0,
          easing: [.35,.35,.18,1],
          complete: () => {
            Velocity(siteNavHeader,
              {
                translateX: '-1000%'
              },
              {
                duration: 0
              });
          }
        });

        Velocity(projectRole, 'stop');
        Velocity(projectRole,
        {
          translateY: '-12px',
          opacity: 0.0
        },
        {
          duration: animated ? 250 : 0,
          easing: [.35,.35,.18,1]
        });

        Velocity(projectName, 'stop');
        Velocity(projectName,
        {
          opacity: 1.0,
          translateX: '0'
        }, {
          duration: 100,
          complete: () => {
            Velocity(projectName,
            {
              opacity: 1.0,
              color: '#000000',
              translateZ: 0
            },
            {
              duration: animated ? 50 : 0,
              easing: [.35,.35,.18,1],
              complete: () => {
                Velocity(siteNavHeader, 'scroll', {
                    container: siteNav,
                    delay: animated ? 150 : 0,
                    duration: animated ? 300 : 0,
                    easing: [.35,.35,.18,1],
                    offset: '-50px'
                });
                Velocity(targetParentEl, 'stop');
                Velocity(targetParentEl,
                  {
                    top: [ '30px' ],
                    translateX: 0,
                    opacity: 1.0,
                    translateZ: 0
                  },
                  {
                    duration: animated ? 300 : 0,
                    delay: animated ? 250 : 0,
                    easing: [.35,.35,.18,1],
                    complete: () => {
                      targetParentEl.classList.add('active-state');
                      Velocity(projectDescription, 'stop');
                      Velocity(projectDescription,
                        {
                          translateX: [ 0, '-5px'],
                          opacity: 1.0
                        },
                        {
                          display: 'block',
                          delay: animated ? 250 : 50,
                          duration: animated ? 125 : 0,
                          easing: [.35,.35,.18,1],
                          complete: () => {
                            siteNav.classList.add('is-fixed');
                            siteNav.style.overflow = 'hidden';
                            BadUtils.lockBodyScroll(false);
                          }
                        });

                      Velocity(projectName,
                        {
                          translateX: '32px'
                        },
                        {
                          delay: animated ? 250 : 0,
                          duration: animated ? 125 : 0,
                          easing: [.35,.35,.18,1]
                        });

                      Velocity(backButton,
                        {
                          translateX: ['0', '-12px'],
                          opacity: 1.0
                        },
                        {
                          delay: animated ? 250 : 0,
                          duration: animated ? 125 : 0,
                          display: 'block',
                          easing: [.35,.35,.18,1]
                        });
                    }
                  });
              }
            });
          }
        });
      }
    });
  }

  resetNav(e, slug) {
    var siteNav = this.refs['site-nav'].refs['site-nav'],
        siteNavHeader = siteNav.querySelector('.site-nav-header'),
        logo = siteNav.querySelector('.logo'),
        projectItems = siteNav.querySelectorAll('.project-item'),
        currentProject = siteNav.querySelector('.nav-item-' + slug),
        currentProjectIndex = currentProject.dataset.navPosition,
        targetParentEl;

    if (e) {
      targetParentEl = e.target.parentNode;
    } else {
      targetParentEl = currentProject;
    }

    this.props.history.pushState(null, '/');
    siteNav.classList.remove('is-fixed');
    BadUtils.lockBodyScroll(true);

    var projectName = targetParentEl.querySelector('.project-name'),
        projectRole = targetParentEl.querySelector('.project-role'),
        backButton = targetParentEl.querySelector('.back-button'),
        projectDescription = targetParentEl.querySelector('.project-description'),
        gotoBottom = currentProjectIndex > 2;

    setTimeout(() => {
      Velocity(projectDescription, 'stop');
      Velocity(projectDescription,
      {
        translateX: [ '-5px', 0 ],
        opacity: 0.0
      },
      {
        duration: 50,
        delay: 55,
        display: 'none',
        easing: [.35,.35,.18,1]
      });

      Velocity(projectRole, 'stop');
      Velocity(projectRole,
      {
        opacity: 0.0
      },
      {
        duration: 0,
        delay: 500
      });
    }, 250);

    Velocity(backButton,
      {
        translateX: ['-12px', '0'],
        opacity: 0.0
      },
      {
        duration: 500,
        display: 'none',
        easing: [.35,.35,.18,1]
      });

    Velocity(projectName,
      {
        color: '#FFFFFF',
        translateX: 0
      },
      {
        duration: 500,
        easing: [.35,.35,.18,1],
        complete: () => {
          Velocity(targetParentEl,
            {
              top: targetParentEl.dataset.originalTop
            },
            {
              duration: 500,
              easing: [.35,.35,.18,1],
              complete: () => {
                [...projectItems].forEach((el, index) => {
                  el.classList.remove('no-hover');
                  el.classList.remove('active-state');

                  if (el !== targetParentEl) {
                    var elProjectName = el.querySelector('.project-name'),
                        elProjectRole = el.querySelector('.project-role'),
                        elBackButton = el.querySelector('.back-button'),
                        elProjectDescription = el.querySelector('.project-description');

                    Velocity(elProjectName, 'stop');
                    Velocity(elProjectName,
                      {
                        color: '#FFFFFF',
                        translateX: 0
                      },
                      {
                        duration: 0
                      });

                    Velocity(elProjectDescription, 'stop');
                    Velocity(elProjectDescription,
                      {
                        translateX: [ '-5px', 0 ],
                        opacity: 0.0
                      },
                      {
                        duration: 0,
                        display: 'none'
                      });

                    Velocity(elProjectRole, 'stop');
                    Velocity(elProjectRole,
                      {
                        opacity: 0.0
                      },
                      {
                        duration: 0
                      });

                    Velocity(elBackButton,
                      {
                        translateX: ['-12px', '0'],
                        opacity: 0.0
                      },
                      {
                        duration: 0,
                        display: 'none'
                      });

                    Velocity(el,
                      {
                        top: el.dataset.originalTop,
                        translateX: [0, 0],
                        translateZ: 0
                      },
                      {
                        duration: 0,
                        complete: () => {
                          Velocity(el,
                            {
                              opacity: 1.0
                            },
                            {
                              easing: [.35,.35,.18,1],
                              duration: 200
                            });
                        }
                      });
                  }
                });

                Velocity(siteNavHeader,
                  {
                    opacity: 1.0,
                    translateX: [0, 0]
                  },
                  {
                    duration: 300,
                    easing: [.35,.35,.18,1],
                    complete: () => {
                      // Hack to fix issue where sometimes nav would be unscrollable on return to landing page.
                      siteNav.style.overflow = 'auto';
                    }
                  });

                Velocity(logo, 'scroll', {
                  container: siteNav,
                  duration: 600,
                  easing: 'ease-out',
                  offset: gotoBottom ? 419 : -50
                });
              }
            });
        }
    });
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
    });
  }

  render() {
    return (
      <div>
        <Nav ref="site-nav" history={this.props.history} params={this.props.params} handleProjectClick={this.handleProjectClick}/>

        <ReactTransitionGroup component="div">
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            resetNav: this.resetNav,
            setNav: this.setNav,
            controlDesc: this.controlDesc,
            handleProjectClick: this.handleProjectClick,
            history: this.props.history
          })}
        </ReactTransitionGroup>
      </div>
    );
  }
}

App.contextTypes = {
    history: React.PropTypes.object
};

App.propTypes = propTypes;

export default App;