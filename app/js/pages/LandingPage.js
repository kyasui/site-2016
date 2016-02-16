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
        duration: 750,
        delay: 1250,
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
        duration: 750,
        delay: 2000,
        easing: 'easeInOutSine',
        complete: () => {
          callback()
        }
      });
  }

  componentDidAppear() {
    console.log('did appear');
  }

  componentDidEnter() {
    console.log('did enter');
  }

  componentWillLeave(callback) {
    var landingPage = this.refs['landing-page'];

    Velocity(landingPage, {
        opacity: 0.0
      }, {
        duration: 750,
        delay: 500,
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