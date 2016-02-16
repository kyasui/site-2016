'use strict';

import Velocity           from 'velocity-animate'

const BadUtils = {
  lockBodyScroll(shouldLock) {
    document.body.classList.toggle('is-locked', shouldLock);
  },
  scrollToTopOfWindow() {
    var html = document.getElementsByTagName('html');
    Velocity(html,
      'scroll', {
        offset: '0',
        mobileHA: false
      },
      {
        duration: 500,
        easing: 'easeInOutSine'
      });
  }
};

export default BadUtils;