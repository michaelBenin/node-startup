'use strict';

var DiffDOM = require('diff-dom');
var diffDOM = new DiffDOM();
var _ = require('underscore');

function makeVirtualDOM(tagName, className, renderedHTML) {
  var virtualDOM = document.createElement(tagName);
  virtualDOM.className = className;
  virtualDOM.innerHTML = renderedHTML;
  return virtualDOM;
}

function diff(virtualDOM, existingDOM) {
  /*jshint validthis:true */
  var diffs = diffDOM.diff(existingDOM, virtualDOM);

  if (diffs.length > 0) {
    diffDOM.apply(existingDOM, diffs);
    return this;
  }

  return this;
}

module.exports = {
  makeVirtualDOM: makeVirtualDOM,
  diff: diff,
  debouncedMakeVirtualDOM: _.debounce(makeVirtualDOM, 17),
  debouncedDiffDom: _.debounce(diff, 17)
};
