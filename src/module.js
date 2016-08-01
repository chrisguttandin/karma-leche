'use strict';

var path = require('path');

function initLeche(files) {
    var leche = path.join(path.dirname(path.resolve(require.resolve('leche'))), '../dist/leche.js');

    files.unshift({
        included: true,
        pattern: leche,
        served: true,
        watched: false
    });
};

initLeche.$inject = ['config.files'];

module.exports = {
  'framework:leche': ['factory', initLeche]
};
