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
        'built/docs/Styles': 'src/sass/**/*.{scss,sass}'
      }
    }
  }
};
