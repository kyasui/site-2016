'use strict';

import React              from 'react';
import Velocity           from 'velocity-animate'

class LoadingIndicator extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      shouldShow: this.props.shouldShow,
      width: this.props.width
    };
  }

  updateWidth(width) {
    this.setState({
      width: width
    });

    if (width >= 100) {
      Velocity(this.refs['indicator-content'], {
          opacity: [ 0.0, 0.6 ]
        }, {
          duration: 250,
          delay: 250
        });
    }
  }

  show() {
    Velocity(this.refs['indicator-content'], {
        opacity: [ 0.6, 0.0 ]
      }, {
        duration: 0,
        delay: 250
      });
  }

  render() {
    return (
      <div className="loading-indicator">
        <div ref="indicator-content" className="loading-indicator-content" style={{width: this.state.width + '%'}}></div>
      </div>
    );
  }

}

export default LoadingIndicator;