'use strict';

import React         from 'react';
import {IndexLink, Link}        from 'react-router';
import Overlay       from './Overlay';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.showOverlay = this.props.showOverlay.bind(this);
  }

  render() {
    return (
      <header>
        <IndexLink to="/"><img className='site-logo' src='/images/kei-logo@2x.png' /></IndexLink>
        <nav className='site-nav'>
          <a href='' onClick={this.props.showOverlay.bind(this, 'projects')} className='nav-item projects-nav-item button'>PROJECTS</a>
          <a href='' onClick={this.props.showOverlay.bind(this, 'info')} className='nav-item info-nav-item button'>INFO</a>
        </nav>
      </header>
    );
  }

}

export default Header;