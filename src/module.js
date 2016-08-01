const path = require('path');

const LECHE = path.join(path.dirname(require.resolve('leche')), '../dist/leche.js');

const initLecheFramework = (files) => files.unshift({
    included: true,
    pattern: LECHE,
    served: true,
    watched: false
});

initLecheFramework.$inject = [ 'config.files' ];

module.exports = { 'framework:leche': [ 'factory', initLecheFramework ] };
