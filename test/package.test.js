import { expect } from 'chai';
import strategy from '../lib/index.js';

describe('passport-strategy', function () {
  it('should export Strategy constructor directly from package', function () {
    expect(strategy).to.be.a('function');
  });
});
