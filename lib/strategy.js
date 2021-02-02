'use strict';
/**
 * Creates an instance of `Strategy`.
 *
 * @public
 */
class Strategy {
  /**
   * Authenticate request.
   *
   * This function must be overridden by subclasses.  In abstract form, it always
   * throws an exception.
   *
   * @param {PlainObject} req The request to authenticate.
   * @param {PlainObject} [options] Strategy-specific options.
   * @public
   * @returns {void}
   */
  authenticate(req, options) { // eslint-disable-line no-unused-vars, class-methods-use-this, max-len -- Abstract
    throw new Error('Strategy#authenticate must be overridden by subclass');
  }
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
