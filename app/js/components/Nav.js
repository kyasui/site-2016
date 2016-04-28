'use strict';

import React                    from 'react';
import {IndexLink, Link}        from 'react-router';
import ProjectsData             from '../data/ProjectsData';
import Velocity                 from 'velocity-animate';

import BadUtils                 from '../utils/BadUtils';

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  positionNavigation() {
    var siteNav = this.refs['site-nav'],
        siteHeader = this.refs['site-nav-header'],
        animatedNavItems = siteNav.querySelectorAll('.animated-nav-item'),
        projectItems = siteNav.querySelectorAll('.project-item'),
        topPosition = 0;

    [...projectItems].forEach((el, index) => {
      if (!index) {
        topPosition = parseInt(siteHeader.offsetHeight);

        if (!el.classList.contains('active-state')) {
          Velocity(el, {
            top: topPosition + 28
          }, {
            duration: 0
          });
        }

        el.dataset.originalTop = topPosition + 28;
      } else {
        topPosition = parseInt(siteHeader.offsetHeight) + (index * (parseInt(projectItems[index-1].offsetHeight) + 28));

        if (!el.classList.contains('active-state')) {
          Velocity(el, {
            top: topPosition + 28
          }, {
            duration: 0
          });
        }

        el.dataset.originalTop = topPosition + 28;
      }
    });

    if (this.props.params.slug) {
      Velocity(siteNav,
        {
          opacity: 1.0
        },
        {
          duration: 800,
          delay: 400,
          easing: [.4,.4,.18,1]
        });
    } else {
      Velocity(siteNav,
        {
          opacity: 1.0
        },
        {
          duration: 0
        });
    }

    Velocity(siteHeader,
      {
        opacity: 1.0
      },
      {
        duration: 800,
        delay: 400,
        easing: [.4,.4,.18,1]
      });

    setTimeout(()=> {
      [...animatedNavItems].forEach((el, index) => {
        Velocity(el,
          {
            opacity: 1.0
          },
          {
            duration: 1000,
            delay: (index) * 25,
            easing: [.4,.4,.18,1]
          });
      });

      [...projectItems].forEach((el, index) => {
        el.addEventListener('mouseenter', function(e) {
          if (!el.classList.contains('no-hover')) {
            Velocity(el.querySelector('.project-name'), 'stop');
            Velocity(el.querySelector('.project-name'),
            {
              translateX: '12px',
              translateZ: 0
            },
            {
              duration: 250,
              easing: [.4,.4,.18,1]
            });

            Velocity(el.querySelector('.project-role'), 'stop');
            Velocity(el.querySelector('.project-role'),
            {
              translateY: [0, '-12px'],
              opacity: 0.6
            },
            {
              duration: 200,
              delay: 75,
              easing: [.4,.4,.18,1]
            });
          }
        });

        el.addEventListener('mouseleave', function(e) {
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
              easing: [.4,.4,.18,1]
            });

            Velocity(el.querySelector('.project-role'), 'stop');
            Velocity(el.querySelector('.project-role'),
            {
              translateY: '-12px',
              opacity: 0.0
            },
            {
              duration: 200,
              easing: [.4,.4,.18,1]
            });
          }
        });
      });
    }, 1200);
  }

  componentDidMount() {
    var self = this;

    self.positionNavigation();
    BadUtils.lockBodyScroll(true);

    // var debouncedReposition = BadUtils.debounce(() => {
    //   self.positionNavigation();
    // }, 250);

    // window.addEventListener('resize', debouncedReposition);
  }

  render() {
    var projects;

    projects = ProjectsData['projects'].map((project, index) => {
      return (
        <a ref={project['project-slug']} key={"key-" + index} data-original-top="" data-nav-position={index} className={"project-item nav-item-" + project['project-slug']} href={'/project/' + project['project-slug']} onClick={this.props.handleProjectClick.bind(this, '/project/' + project['project-slug'])}>
          <svg className="back-button" viewBox="0 0 24 24">
            <path fill="#000000" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z" />
          </svg>
          <span className="site-nav-main-item site-nav-item animated-nav-item project-name" ref={"project-" + project['project-slug']}>{ project['project-title'] }</span>
          <p className="site-nav-sub-item site-nav-item project-role">{ project['project-role'] }</p>
          <p className="site-nav-sub-item site-nav-item project-description">{ project['project-description'] }</p>
        </a>
      )
    });
    return (
      <nav className="site-nav" ref="site-nav">
        <div className="site-nav-header" ref="site-nav-header">
          <IndexLink className="site-nav-main-item site-nav-item logo " to="/">Kei Yasui</IndexLink>
          <p className="site-nav-sub-item site-nav-item about-content">New York City based Developer + Designer.</p>
          <p className="site-nav-sub-item site-nav-item about-content"><a target="_blank" href="https://twitter.com/keiyasui">Twitter</a> – <a target="_blank" href="https://github.com/kyasui">Github</a> – <a target="_blank" href="https://www.linkedin.com/in/kei-yasui-856a1ba">LinkedIn</a></p>
          <p className="site-nav-sub-item site-nav-item about-content">info@keiyasui.com</p>
          <h3 className="site-nav-item site-nav-sub-item title animated-nav-item">Projects:</h3>
        </div>
        { projects }
      </nav>
    );
  }

}

export default Nav;