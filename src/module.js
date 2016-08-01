'use strict';

var path = require('path');

function initLecheFramework(files) {
    var leche = path.join(path.dirname(path.resolve(require.resolve('leche'))), '../dist/leche.js');

    files.unshift({
        included: true,
        pattern: leche,
        served: true,
        watched: false
    });
};

initLecheFramework.$inject = ['config.files'];

module.exports = {
  'framework:leche': ['factory', initLecheFramework]
};
