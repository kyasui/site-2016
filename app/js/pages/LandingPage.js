'use strict';

import React         from 'react';
import {Link}        from 'react-router';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillAppear(callback) {
    var landingPage = this.refs['landing-page'];
    console.log('will appear');

    Velocity(landingPage, {
        opacity: [ 1.0, 0.0 ]
      }, {
        duration: 375,
        delay: 625,
        easing: 'easeInOutSine',
        complete: () => {
          callback()
        }
      });
  }

  componentWillEnter(callback) {
    var landingPage = this.refs['landing-page'];

    Velocity(landingPage, {
        opacity: 1.0
      }, {
        duration: 375,
        delay: 1000,
        easing: 'easeInOutSine',
        complete: () => {
          callback()
        }
      });
  }

  componentDidAppear() {
    // console.log('did appear');
  }

  componentDidEnter() {
    // console.log('did enter');
  }

  componentWillLeave(callback) {
    var landingPage = this.refs['landing-page'];

    Velocity(landingPage, {
        opacity: 0.0
      }, {
        duration: 375,
        delay: 250,
        easing: 'easeInOutSine',
        complete: () => {
          callback()
        }
      });
  }

  componentDidLeave() {
    console.log('did left');
  }

  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <section ref="landing-page" className="landing-page">
        <video className="landing-page-video" autoPlay loop muted poster="landing-poster.jpg">
          <source src="/video/landing.mp4" type="video/mp4" />
        </video>
      </section>
    );
  }

}

export default LandingPage;