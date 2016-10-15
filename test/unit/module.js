var lecheFramework = require('../../src/module.js'),
    path = require('path');

describe('karma-leche', () => {

    describe('initLeche()', () => {

        var initLecheFramework;

        beforeEach(() => {
            initLecheFramework = lecheFramework['framework:leche'][1];
        });

        it("should unshift leche's dist file", () => {
            var files = [ 'a fake file' ];

            initLecheFramework(files);

            expect(path.relative(__dirname, files[0].pattern)).to.equal('../../node_modules/leche/dist/leche.js');

            expect(files).to.deep.equal([ {
                included: true,
                pattern: files[0].pattern,
                served: true,
                watched: false
            }, 'a fake file' ]);
        });

    });

});
