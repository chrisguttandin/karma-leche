# karma-leche

**A Karma adapter for Leche.**

[![tests](https://img.shields.io/travis/chrisguttandin/karma-leche/master.svg?style=flat-square)](https://travis-ci.org/chrisguttandin/karma-leche)
[![dependencies](https://img.shields.io/david/chrisguttandin/karma-leche.svg?style=flat-square)](https://www.npmjs.com/package/karma-leche)
[![version](https://img.shields.io/npm/v/karma-leche.svg?style=flat-square)](https://www.npmjs.com/package/karma-leche)

[Leche](https://github.com/box/leche) is a testing utility which extends
[Mocha](http://mochajs.org/) and [Sinon](http://sinonjs.org/). This little adapter makes it
available with the [Karma](http://karma-runner.github.io/) test runner.

```js
module.exports = function (config) {
    config.set({
        frameworks: ['leche']
    });
};
```
