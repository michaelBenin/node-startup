'use strict';
var _ = require('lodash');
// https://coderwall.com/p/xj81ua
module.exports = {
  extendableBackboneDataTypes: function(types) {
    _.each(types, function(DataType) {
      // Additional extension layer for DataTypes
      DataType.fullExtend = function(protoProps, staticProps) {
        // Call default extend method
        var extended = DataType.extend.call(this, protoProps, staticProps);
        // Add a usable super method for better inheritance
        extended.prototype._super = this.prototype;
        // Apply new or different defaults on top of the original
        if (protoProps.defaults) {
          for (var k in this.prototype.defaults) {
            if (this.prototype.defaults.hasOwnProperty(k)) {
              if (!extended.prototype.defaults[k]) {
                extended.prototype.defaults[k] = this.prototype.defaults[k];
              }
            }
          }
        }
        return extended;
      };
    });
  },
  backbone: function(Backbone) {
    this.extendableBackboneDataTypes([
      Backbone.Model,
      Backbone.Collection,
      Backbone.View
    ]);
  }
};
