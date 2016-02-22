'use strict';

import React                    from 'react';
import {IndexLink, Link}        from 'react-router';
import ProjectsData       from '../data/ProjectsData';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  componentDidMount() {
    var projectItems = this.refs['site-nav'].querySelectorAll('.project-item');

    [...projectItems].forEach((el, index) => {
      if (!index) {
        Velocity(el, {
          top: parseInt(getComputedStyle(this.refs['site-nav-header']).height) + 80 +  'px'
        }, {
          duration: 0
        });
      } else {
        Velocity(el, {
          top: 491 + (index * parseInt(getComputedStyle(projectItems[index-1]).height)) + 'px'
        }, {
          duration: 0
        });
      }

      el.addEventListener('mouseover', function() {
        if (!el.classList.contains('no-hover')) {
          Velocity(el.querySelector('.project-name'), 'stop');
          Velocity(el.querySelector('.project-name'),
          {
            translateX: '10px',
            translateZ: 0
          },
          {
            duration: 250,
            easing: 'easeOutSine'
          });

          Velocity(el.querySelector('.project-description'), 'stop');
          Velocity(el.querySelector('.project-description'),
          {
            translateX: '10px',
            opacity: 0.6
          },
          {
            duration: 250,
            delay: 150,
            easing: 'easeInSine'
          });
        }
      });

      el.addEventListener('mouseout', function() {
        if (!el.classList.contains('no-hover')) {
          Velocity(el.querySelector('.project-name'), 'stop');
          Velocity(el.querySelector('.project-name'),
          {
            opacity: 1.0,
            translateX: 0,
            translateZ: 0
          },
          {
            duration: 250,
            easing: 'easeInOutSine'
          });

          Velocity(el.querySelector('.project-description'), 'stop');
          Velocity(el.querySelector('.project-description'),
          {
            translateX: 0,
            opacity: 0.0
          },
          {
            duration: 250,
            easing: 'easeInOutSine'
          });
        }
      });
    });
  }

  handleProjectClick(projectId, e) {
    e.preventDefault();
    var self = this;

    var siteNav = this.refs['site-nav'],
        projectItems = this.refs['site-nav'].querySelectorAll('.project-item'),
        animatedElements = this.refs['site-nav'].querySelectorAll('.animate-this');

    [...projectItems].forEach((el, index) => {
      el.classList.add('no-hover');

      if (el != e.target.parentNode) {
        Velocity(el,
        {
          opacity: 0.0
        },
        {
          duration: 500,
          easing: 'easeOutSine',
          complete: () => {
            // self.props.history.pushState(null, projectId);
          }
        });
      } else {
        Velocity(document.getElementsByTagName("body")[0], 'scroll', {
            duration: 500,
            offset: 0,
            delay: 1000,
            easing: 'easeOutSine'
        });
        Velocity(e.target.parentNode,
        {
          // opacity: 0.0,
          top: '0',
          paddingTop: '5%'
        },
        {
          duration: 500,
          delay: 1000,
          easing: 'easeOutSine',
          complete: () => {
            self.props.history.pushState(null, projectId);
          }
        });
      }
    });

    [...animatedElements].forEach((el, index) => {
      // The below wont work the last link so figure it out.
      // Velocity(el, 'stop');
      Velocity(el,
      {
        opacity: 0.0
      },
      {
        display: 'none',
        duration: 500,
        delay: 25 * index,
        easing: 'easeOutSine'
      });
    });
  }

  render() {
    var projects;

    projects = ProjectsData['projects'].map((project, index) => {
      return (
        <a key={"key-" + index} className="project-item" href="" onClick={this.handleProjectClick.bind(this, '/project/' + project['project-slug'])}>
          <span className="site-nav-main-item site-nav-item project-name" ref={"project-" + project['project-slug']}>{ project['project-title'] }</span>
          <p className="site-nav-sub-item site-nav-item project-description">{ project['project-role'] }</p>
        </a>
      )
    });
    return (
      <nav className="site-nav" ref="site-nav">
        <div className="site-nav-header" ref="site-nav-header">
          <IndexLink className="site-nav-main-item site-nav-item logo animate-this" to="/">Kei Yasui</IndexLink>
          <p className="site-nav-sub-item site-nav-item about-content animate-this">New York City based Developer + Designer.</p>
          <p className="site-nav-sub-item site-nav-item about-content animate-this"><a target="_blank" href="https://twitter.com/keiyasui">Twitter</a> / <a target="_blank" href="https://github.com/kyasui">Github</a> / <a target="_blank" href="https://www.linkedin.com/in/kei-yasui-856a1ba">LinkedIn</a></p>
          <p className="site-nav-sub-item site-nav-item about-content animate-this">info@keiyasui.com</p>
          <h3 className="site-nav-item site-nav-sub-item animate-this title">Projects:</h3>
        </div>
        { projects }
      </nav>
    );
  }

}

export default Nav;