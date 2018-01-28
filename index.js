'use strict';

module.exports = {
  name: 'ember-addon-site',

  config() {
    return {
      'ember-bootstrap': {
        'bootstrapVersion': 3,
        'importBootstrapFont': false,
        'importBootstrapCSS': false
      }
    }
  }
};
