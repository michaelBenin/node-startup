'use strict';

module.exports = {
  styleguide: {
    styledocco: {
      options: {
        framework: {
          name: 'styledocco'
        },
        name: 'Style Guide',
        template: {
          include: []
        }
      },
      files: {
        'built/docs/Styles': 'browser/scss/**/*.{scss,sass}'
      }
    }
  }
};
