'use strict';

import React              from 'react';
import Velocity           from 'velocity-animate'
import OverlayInfo               from './OverlayInfo';
import OverlayProjects           from './OverlayProjects';

class Overlay extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      overlayTarget: this.props.initialOverlayTarget
    };

    this.handleProjectClick = this.handleProjectClick.bind(this);
  }

  componentWillAppear(callback) {
    callback();
  }

  componentWillEnter(callback) {
    var self = this;

    var projectLinks = this.refs['overlay-bg'].querySelectorAll('.animate-this');

    Velocity(this.refs['overlay-bg'],
      {
        opacity: [ 1.0, 0.0 ],
        translateZ: [ 0, 0 ]
      },
      {
        duration: 375,
        display: 'block',
        easing: 'easeInOutSine',
        complete: function() {
          Velocity(self.refs['close-overlay-button'],
            {
              translateZ: [ 0, 0 ],
              opacity: [ 1.0, 0 ]
            },
            {
              duration: 375,
              delay: 500,
              easing: 'easeInOutSine',
            });

          [...projectLinks].forEach((el, index) => {
            Velocity(el,
              {
                translateX: [ 0, 30 ],
                translateZ: [ 0, 0 ],
                opacity: [ 1.0, 0 ]
              },
              {
                duration: 250,
                delay: 50 * (index + 1),
                easing: 'easeInOutSine',
              });
          });
          callback()
        }
      });
  }

  componentDidAppear() {
    // console.log('hellllo3');
  }

  componentDidEnter() {
    // console.log('hellllo4');
  }

  componentWillLeave(callback) {
    var self = this;

    var projectLinks = this.refs['overlay-bg'].querySelectorAll('.animate-this'),
        projectLinksLength = projectLinks.length;

    Velocity(self.refs['close-overlay-button'],
      {
        translateZ: [ 0, 0 ],
        opacity: [ 0.0, 1.0 ]
      },
      {
        duration: 375,
        delay: 250,
        easing: 'easeInOutSine',
      });

    [...projectLinks].forEach((el, index) => {
      Velocity(el,
      {
        translateX: [ -30, 0 ],
        translateZ: [ 0, 0 ],
        opacity: [ 0.0, 1.0 ]
      },
      {
        duration: 250,
        delay: 12 * (index + 1),
        easing: 'easeInOutSine',
        complete: () => {
          if (index === projectLinksLength - 1) {
            Velocity(self.refs['overlay-bg'],
              {
                opacity: [ 0.0, 1.0 ]
              },
              {
                duration: 375,
                delay: 25,
                display: 'none',
                easing: 'easeInOutSine',
                complete: function() {
                  callback()
                }
              });
          }
        }
      });
    });
  }

  componentDidLeave() {
    // console.log("LEFT");
  }

  handleProjectClick(projectId, e) {
    e.preventDefault();
    var self = this;

    var projectLinks = this.refs['overlay-bg'].querySelectorAll('.animate-this'),
        projectLinksLength = projectLinks.length;

    Velocity(self.refs['close-overlay-button'],
      {
        translateZ: [ 0, 0 ],
        opacity: [ 0.0, 1.0 ]
      },
      {
        duration: 375,
        delay: 250,
        easing: 'easeInOutSine',
      });

    [...projectLinks].forEach((el, index) => {
      // The below wont work the last link so figure it out.
      if (el != e.target) {
        Velocity(el,
        {
          translateX: [ -30, 0 ],
          translateZ: [ 0, 0 ],
          opacity: [ 0.0, 1.0 ]
        },
        {
          duration: 250,
          delay: 25 * index,
          easing: 'easeInOutSine',
          complete: () => {
            if (index === projectLinksLength - 1) {
              Velocity(this.refs['overlay-bg'],
                {
                  opacity: [ 0.0, 1.0 ]
                },
                {
                  duration: 375,
                  delay: 125,
                  display: 'none',
                  easing: 'easeInOutSine',
                  complete: function() {
                    self.props.history.pushState(null, projectId);
                    self.props.handleClose();
                  }
                });
            }
          }
        });
      } else {
        if (index === projectLinksLength - 1) {
          Velocity(this.refs['overlay-bg'],
            {
              opacity: [ 0.0, 1.0 ]
            },
            {
              duration: 375,
              delay: 500,
              display: 'none',
              easing: 'easeInOutSine',
              complete: function() {
                self.props.history.pushState(null, projectId);
                self.props.handleClose();
              }
            });
        }
      }
    });
  }

  render() {
    var OverlayContent;

    if (this.state.overlayTarget == 'projects') {
      OverlayContent = <OverlayProjects handleClick={this.handleProjectClick} />
    } else {
      OverlayContent = <OverlayInfo />
    }
    return (
      <div ref="overlay-bg" className="overlay">
        <a ref="close-overlay-button" className="button close-overlay-button" onClick={this.props.handleClose} href="">CLOSE</a>
        {OverlayContent}
      </div>
    );
  }

}

export default Overlay;