'use strict';

module.exports = {
  jsbeautifier: {
    'default': {
      src: [
        '<%= jshint.files %>'
      ]
    },
    options: {
      js: {
        'indentSize': 2,
        'indentChar': ' ',
        'indentLevel': 0,
        'indentWithTabs': false,
        'preserveNewlines': true,
        'maxPreserveNewlines': 2,
        'braceStyle': 'collapse',
        'keepArrayIndentation': false,
        'keepFunctionIndentation': true,
        'spaceBeforeConditional': true,
        'evalCode': false,
        'indentCase': true,
        'unescapeStrings': false,
        'spaceAfterAnonFunction': true
      },
      html: {
        fileTypes: ['.hbs'],
        braceStyle: 'collapse',
        indentChar: ' ',
        indentInnerHtml: true,
        indentScripts: 'keep',
        indentSize: 2,
        maxPreserveNewlines: 2,
        preserveNewlines: true,
        unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u'],
        wrapLineLength: 0
      }
    },
    verify: {
      src: [
        '<%= jshint.files %>'
      ],
      options: {
        mode: 'VERIFY_ONLY'
      }
    }
  }
};
