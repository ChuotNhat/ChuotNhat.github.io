/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */

var Site = (function($, window, undefined) {
  'use strict';

  site.viewportWidth = (function() {
    if (window.Modernizr.touch) {
      return function() {
        return $(window).width();
      };
    } else {
      if (navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i)) {
        return function() {
          return document.documentElement.clientWidth;
        };
      } else {
        return function() {
          return window.innerWidth || document.documentElement.clientWidth;
        };
      }
    }
  })();

  site.isLgDesktop = (function() {
    return function() {
      if (site.viewportWidth() >= 1224) {
        return true;
      }
      return false;
    }
  })();

  site.isDesktop = (function() {
    return function() {
      if (site.viewportWidth() < 992) {
        return false;
      }
      return true;
    }
  })();

  site.isMobile = (function() {
    return function() {
      if (site.viewportWidth() < 768) {
        return true;
      }
      return false;
    }
  })();

  site.isTablet = (function() {
    return function() {
      if (!site.isMobile() && !site.isDesktop()) {
        return true;
      }
      return false;
    }
  })();

})(jQuery, window);

jQuery(function() {
  Site.publicMethod();
});
