import { expect } from 'chai';
import { Strategy, EnhancedStrategy } from '../lib/index.js';

describe('Strategy', function () {
  const strategy = new Strategy();

  it('authenticate should throw error', function () {
    expect(function () {
      strategy.authenticate({}, {});
    }).to.throw(Error, 'Strategy#authenticate must be overridden by subclass');
  });
});

describe('EnhancedStrategy', function () {
  const strategy = new EnhancedStrategy();

  it('success should throw error', function () {
    expect(function () {
      strategy.success({}, {});
    }).to.throw(Error, 'EnhancedStrategy#success must be overridden by subclass');
  });

  it('fail should throw error', function () {
    expect(function () {
      strategy.fail('challenge', 200);
    }).to.throw(Error, 'EnhancedStrategy#fail must be overridden by subclass');
  });

  it('redirect should throw error', function () {
    expect(function () {
      strategy.redirect('https://example.com', 200);
    }).to.throw(Error, 'EnhancedStrategy#redirect must be overridden by subclass');
  });

  it('pass should throw error', function () {
    expect(function () {
      strategy.pass();
    }).to.throw(Error, 'EnhancedStrategy#pass must be overridden by subclass');
  });

  it('error should throw error', function () {
    expect(function () {
      strategy.error(new Error('error'));
    }).to.throw(Error, 'EnhancedStrategy#error must be overridden by subclass');
  });
});
