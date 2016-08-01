'use strict';

module.exports = {
    continuous: [
        'mochaTest:test',
        'watch:continuous',
    ],
    test: [
        'mochaTest:test',
    ]
};
