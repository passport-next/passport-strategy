import { expect } from 'chai';
import { Strategy } from '../lib/index.js';

describe('passport-strategy', function () {
  it('should export Strategy constructor directly from package', function () {
    expect(Strategy).to.be.a('function');
  });
});
