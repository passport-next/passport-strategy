'use strict';
const Strategy = require('../lib/strategy.js');

describe('Strategy', function () {
  const strategy = new Strategy();

  it('authenticate should throw error', function () {
    expect(function () {
      strategy.authenticate();
    }).to.throw(Error, 'Strategy#authenticate must be overridden by subclass');
  });
});
