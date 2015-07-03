# karma-leche

**A Karma adapter for Leche.**

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
