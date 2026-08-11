/**
 * Creates an instance of `Strategy`.
 *
 * @public
 */
class Strategy {
  /* eslint-disable no-unused-vars, class-methods-use-this -- Abstract */
  /**
   * Authenticate request.
   *
   * This function must be overridden by subclasses.  In abstract
   * form, it always throws an exception.
   *
   * @param {object} req The request to authenticate.
   * @param {object} [options] Strategy-specific options.
   * @public
   * @returns {void}
   */
  authenticate(req, options) {
    /* eslint-enable no-unused-vars, class-methods-use-this -- Abstract */
    throw new Error('Strategy#authenticate must be overridden by subclass');
  }
}

/**
 * Expose `Strategy`.
 */
export default Strategy;
