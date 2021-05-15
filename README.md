# karma-leche

**A Karma adapter for Leche.**

[![dependencies](https://img.shields.io/david/chrisguttandin/karma-leche.svg?style=flat-square)](https://github.com/chrisguttandin/karma-leche/network/dependencies)
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
