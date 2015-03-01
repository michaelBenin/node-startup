'use strict';

var DiffDOM = require('diff-dom');
var diffDOM = new DiffDOM();
var _ = require('underscore');
var $ = require('jquery');

function makeVirtualDOM(el, renderedHTML) {
  var virtualDOM = $.parseHTML(el.outerHTML)[0];
  virtualDOM.innerHTML = renderedHTML;
  return virtualDOM;
}

var debouncedMakeVirtualDOM = _.debounce(makeVirtualDOM, 17);

function diff(el, renderedHTML) {

  var virtualDOM = makeVirtualDOM(el, renderedHTML);

  /*jshint validthis:true */
  var diffs = diffDOM.diff(el, virtualDOM);

  if (diffs.length > 0) {
    diffDOM.apply(el, diffs);
    return this;
  }

  return this;
}

var debouncedDiff = _.debounce(diff, 17);

module.exports = {
  makeVirtualDOM: makeVirtualDOM,
  diff: diff,
  debouncedMakeVirtualDOM: debouncedMakeVirtualDOM,
  debouncedDiffDom: debouncedDiff
};
