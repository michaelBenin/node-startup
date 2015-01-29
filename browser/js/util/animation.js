'use strict';

module.exports = {
  setupAnimation: function ($) {
    $.fn.animate = $.fn.velocity;
    $.fn.fadeOut = function (duration, complete) {
      $(this).velocity({
        opacity: 0,
        duration: duration,
        complete: complete
      }, {
        display: 'none'
      });
      return $(this);
    };
    $.fn.fadeIn = function (duration, complete) {
      $(this).velocity({
        opacity: 1,
        duration: duration,
        complete: complete
      }, {
        display: 'block'
      });
      return $(this);
    };
  }
};
