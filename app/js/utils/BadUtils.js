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
        easing: [.22,.22,.18,1]
      });
  },
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);

        if (immediate && !timeout) func.apply(context, args);
    };
  }
};

export default BadUtils;