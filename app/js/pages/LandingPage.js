'use strict';

import 'babel-polyfill';
import React         from 'react';
import Velocity      from 'velocity-animate';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
  }

  initVideo(callback) {
    var landingVid = document.getElementById('landing-video');

    landingVid.addEventListener('canplay', () => {
      Velocity(landingVid, {
          opacity: [ 1.0, 0.0 ]
        }, {
          duration: 3000,
          delay: 500,
          complete: () => {
            callback();
          }
        });
    });
  }

  removeVideo(callback) {
    var landingVid = document.getElementById('landing-video');
    landingVid.pause();

    Velocity(landingVid, {
        opacity: 0.0
      }, {
        duration: 500,
        complete: () => {
          callback()
        }
      });
  }

  componentWillAppear(callback) {
    this.initVideo(callback);
  }

  componentWillEnter(callback) {
    this.initVideo(callback);
  }

  componentDidAppear() {
  }

  componentDidEnter() {
  }

  componentWillLeave(callback) {
    this.removeVideo(callback);
  }

  componentDidLeave() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <section ref="landing-page" className="landing-page">
        <div className="landing-tint"></div>
        <video id="landing-video" className="landing-page-video" autoPlay loop muted poster="/video/landing-poster.jpg">
          <source src="/video/landing.mp4" type="video/mp4" />
        </video>
      </section>
    );
  }

}

export default LandingPage;

// <div className="landing-tint"></div>
// <video className="landing-page-video" autoPlay loop muted poster="/video/landing-poster.jpg">
//   <source src="/video/landing.mp4" type="video/mp4" />
// </video>