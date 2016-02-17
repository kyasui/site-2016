'use strict';

import React              from 'react';
import {Link}             from 'react-router';
import ImagesLoaded       from 'imagesLoaded';
import Velocity           from 'velocity-animate';

import ProjectsData       from '../data/ProjectsData';

class Project extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillAppear(callback) {
    var self = this;

    var projectElements = this.refs['project'].querySelectorAll('.animate-this'),
        projectElementsLength = projectElements.length;

    var projectImages = this.refs['project'].querySelectorAll('.js-image'),
        projectImagesLength = projectImages.length;

    var projectVideo = this.refs['project-additional'];

    Velocity(this.refs['project'],
      {
        opacity: 1.0
      },
      {
        duration: 500,
        display: 'block',
        easing: 'easeInOutSine',
        complete: function() {
          var imgLoad = ImagesLoaded(self.refs['project'], { background: '.js-image' });

          imgLoad.on('progress', (instance, image) => {
            if(image.isLoaded) {
              if (image.element) {
                image.element.classList.add('loaded');
              } else {
                image.img.classList.add('loaded');
              }
            }

            var loadedImagesLength = self.refs['project'].querySelectorAll('.loaded').length,
                width = Math.ceil(100 * (loadedImagesLength / projectImagesLength));

            self.props.handleLoading(width);

            if (projectImagesLength === loadedImagesLength) {
              console.log('ya done');
            }
          }).on('always', () => {
            setTimeout(() => {
              [...projectElements].forEach((el, index) => {
                Velocity(el,
                {
                  translateY: [ 0, -10 ],
                  translateZ: [ 0, 0 ],
                  opacity: [ 1.0, 0.0 ]
                },
                {
                  duration: 375,
                  delay: 25 * (index + 1),
                  easing: 'easeInOutSine',
                  complete: () => {
                    if (index === projectElementsLength - 1) {

                    }
                  }
                });
              });

              Velocity(projectVideo, {
                  opacity: 1.0
                }, {
                  duration: 125
                });
              callback()
            }, 250);
          });
        }
      });
  }

  componentWillEnter(callback) {
    var self = this;

    var projectElements = this.refs['project'].querySelectorAll('.animate-this'),
        projectElementsLength = projectElements.length;

    var projectImages = this.refs['project'].querySelectorAll('.js-image'),
        projectImagesLength = projectImages.length;

    var projectVideo = this.refs['project-additional'];

    console.log('sup');

    Velocity(this.refs['project'],
      {
        opacity: 1.0
      },
      {
        duration: 500,
        delay: 1000,
        display: 'block',
        easing: 'easeInOutSine',
        complete: function() {
          var imgLoad = ImagesLoaded(self.refs['project'], { background: '.js-image' });

          imgLoad.on('progress', (instance, image) => {
            console.log(image);
            if(image.isLoaded) {
              if (image.element) {
                image.element.classList.add('loaded');
              } else {
                image.img.classList.add('loaded');
              }
            }

            var loadedImagesLength = self.refs['project'].querySelectorAll('.loaded').length,
                width = Math.ceil(100 * (loadedImagesLength / projectImagesLength));

            self.props.handleLoading(width);

            if (projectImagesLength === loadedImagesLength) {
              console.log('ya done');
            }
          }).on('always', () => {
            setTimeout(() => {
              [...projectElements].forEach((el, index) => {
                Velocity(el,
                  {
                    translateY: [ 0, -10 ],
                    translateZ: [ 0, 0 ],
                    opacity: [ 1.0, 0.0 ]
                  },
                  {
                    duration: 375,
                    delay: 25 * index,
                    easing: 'easeInOutSine',
                    complete: () => {
                      if (index === projectElementsLength - 1) {

                      }
                    }
                  });
              });
              Velocity(projectVideo, {
                  opacity: 1.0
                }, {
                  duration: 125
                });
              callback()
            }, 250);
          });
        }
      });
  }

  componentDidMount() {
    // Todo: Overlay based on query string?
    console.log(this.props.location.query);
  }

  componentDidAppear() {
    console.log('hellllo3');
  }

  componentDidEnter() {
    console.log('hellllo4');
  }

  componentWillLeave(callback) {
    var self = this;

    var projectElements = this.refs['project'].querySelectorAll('.animate-this'),
        projectElementsLength = projectElements.length;

    var projectVideo = this.refs['project-additional'];

    self.props.resetLoading();

    Velocity(projectVideo,
      {
        translateZ: 0,
        opacity: [ 0.0, 1.0 ]
      },
      {
        duration: 250,
        complete: () => {
          [...projectElements].forEach((el, index) => {
            Velocity(el,
            {
              translateY: [ -15, 0 ],
              translateZ: [ 0, 0 ],
              opacity: [ 0.0, 1.0 ]
            },
            {
              duration: 375,
              delay: 25 * index,
              easing: 'easeInOutSine',
              complete: () => {}
            });
          });
          Velocity(self.refs['project'],
            {
              opacity: 0.0
            },
            {
              duration: 500,
              delay: 50,
              easing: 'easeInOutSine',
              complete: function() {
                callback()
              }
            });
        }
      });
  }

  componentDidLeave() {
    console.log('did left');
  }

  render() {
    var currentProject;

    ProjectsData.projects.forEach((project) => {
      if (project['project-slug'] === this.props.params.slug) {
        currentProject = project;
      }
    });

    return (
      <div ref="project" className="project">
          {(() => {
            switch (currentProject['images']['hero']['type']) {
              case 'monitor':
                return (
                  <header className="project-header">
                    <div className="project-header-image-content content-width animate-this">
                      <div className="project-header-image-holder">
                        <img className="project-header-image-frame js-image" src='/images/monitor-frame.png' />
                        <img className="project-header-image js-image" src={currentProject['images']['hero']['asset']} />
                      </div>
                    </div>
                  </header>
                );
              case 'full-screen':
                return (
                    <header className="project-header-full-screen animate-this">
                      <div className="project-header-image-full-screen js-image" style={{ 'backgroundImage' : 'url(' + currentProject['images']['hero']['asset'] + ')' }}></div>
                    </header>
                );
              default:
                return '';
            }
          })()}
        <div className="project-details content-width">
          <div className="project-column col-2-3">
            {(() => {
              var detailImages = currentProject['images']['details'].map((detailImage, index) => {
                  if (detailImage['type'] === 'tablet') {
                    return(
                      <div key={'detail-' + index} className="project-tablet-image-content animate-this">
                        <div className="project-detail-image-holder">
                          <img className="project-detail-image-frame js-image" src={'/images/tablet-frame.png'} />
                          <img className="project-detail-image js-image" src={detailImage['asset']} />
                        </div>
                      </div>
                    )
                  } else if (detailImage['type'] === 'phone') {
                    return(
                      <div key={'detail-' + index} className="project-phone-image-content animate-this">
                        <div className="project-detail-image-holder">
                          <img className="project-detail-image-frame js-image" src='/images/phone-frame.png' />
                          <img className="project-detail-image js-image" src={detailImage['asset']} />
                        </div>
                      </div>
                    )
                  }
                });

              return detailImages;
            })()}
          </div>
          <div className="project-column col-1-3 animate-this">
            <h3 className="project-detail-heading">{currentProject['project-title']}</h3>
            <div className="project-detail-body">
              <p>{currentProject['description']['body']}</p>
              <strong className="project-detail-body-heading">Role</strong>
              <p>{currentProject['description']['role']}</p>
            </div>
            {(() => {
              if (currentProject['link']) {
                return(
                  <a className="button" target="_blank" href={ currentProject['link'] }>VIEW</a>
                )
              }
            })()}
          </div>
        </div>
        <div ref="project-additional" className="project-additional">
          <footer className="footer">
            <h3 className="site-credit">
              Kei Yasui / 2016
            </h3>
            <h3 className="site-meta">
              Built with React / View Code
            </h3>
          </footer>
          <div className="project-additional-tint"></div>
          {(() => {
            switch (currentProject['additional']['type']) {
              case 'video':
                return (
                  <video className="project-additional-content" poster={currentProject['additional']['poster']} autoPlay loop muted>
                    <source src={currentProject['additional']['asset']} type="video/mp4" />
                  </video>
                );
              case 'image':
                return (
                  <div className="project-additional-content is-image" style={{ 'backgroundImage' : 'url(' + currentProject['additional']['asset'] + ')' }}>
                  </div>
                );
              default:
                return '';
            }
          })()}
        </div>
      </div>
    );
  }

}

export default Project;