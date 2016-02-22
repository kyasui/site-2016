'use strict';

import React              from 'react';
import ReactTransitionGroup    from 'react/lib/ReactTransitionGroup';

import Nav             from './components/Nav';
import Footer             from './components/Footer';
import Overlay            from './components/Overlay';
import Project            from './components/Project';
import LoadingIndicator   from './components/LoadingIndicator';

import NotFoundPage       from './pages/NotFoundPage';

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

    this.state = {
      showOverlay: false,
      overlayTarget: '',
      indicatorWidth: 0
    };

    this.showOverlay = this.showOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.resetLoading = this.resetLoading.bind(this);
  }

  showOverlay(overlayTarget, e) {
    e.preventDefault();

    BadUtils.lockBodyScroll(!this.state.showOverlay);

    this.setState({
      showOverlay: !this.state.showOverlay,
      overlayTarget: overlayTarget
    });
  }

  closeOverlay(e) {
    if (e) {
      e.preventDefault();
    }

    BadUtils.lockBodyScroll(!this.state.showOverlay);

    this.setState({
      showOverlay: !this.state.showOverlay,
      overlayTarget: ''
    });
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
    // this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
    // CurrentUserActions.checkLoginStatus();
  }

  componentWillUnmount() {

  }

  handleLoading(width) {
    this.refs['loading-indicator'].updateWidth(width);
  }

  resetLoading() {
    this.refs['loading-indicator'].updateWidth(0);
    this.refs['loading-indicator'].show();
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
        <Nav history={this.props.history} showOverlay={this.showOverlay}/>

        <ReactTransitionGroup component="div">
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            handleLoading: this.handleLoading,
            resetLoading: this.resetLoading
          })}
        </ReactTransitionGroup>

        <Footer />

        <ReactTransitionGroup component="div">
          { this.state.showOverlay ? <Overlay history={this.props.history} initialOverlayTarget={this.state.overlayTarget} handleClose={this.closeOverlay}/> : null }
        </ReactTransitionGroup>
        <LoadingIndicator ref="loading-indicator" />
      </div>
    );
  }

}

App.contextTypes = {
    history: React.PropTypes.object
};

App.propTypes = propTypes;

export default App;