/* eslint-disable no-unused-vars, class-methods-use-this -- Abstract */
/** @import {AuthInfo, Request, User} from '@passport-next/passport-types' */

/**
 * Creates an instance of `Strategy`.
 *
 * @public
 */
class Strategy {
  /**
   * Authenticate request.
   *
   * This function must be overridden by subclasses.  In abstract
   * form, it always throws an exception.
   *
   * @param {Request} req The request to authenticate.
   * @param {object} [options] Strategy-specific options.
   * @public
   * @returns {void}
   */
  authenticate(req, options) {
    throw new Error('Strategy#authenticate must be overridden by subclass');
  }
}

/**
 *
 */
class EnhancedStrategy extends Strategy {
  /**
   * @param {User} user
   * @param {AuthInfo} [info]
   * @returns {void}
   */
  success(user, info) {
    throw new Error('EnhancedStrategy#success must be overridden by subclass');
  }

  /**
   * @overload
   * @returns {void}
   */

  /**
   * @overload
   * @param {number} status
   * @returns {void}
   */

  /**
   * @overload
   * @param {string | AuthInfo} challenge
   * @param {number} [status]
   * @returns {void}
   */

  /**
   * @param {string | AuthInfo | number} [challenge]
   * @param {number} [status]
   * @returns {void}
   */
  fail(challenge, status) {
    throw new Error('EnhancedStrategy#fail must be overridden by subclass');
  }

  /**
   * @param {string} url
   * @param {number} [status]
   * @returns {void}
   */
  redirect(url, status) {
    throw new Error('EnhancedStrategy#redirect must be overridden by subclass');
  }

  /**
   * @returns {void}
   */
  pass() {
    throw new Error('EnhancedStrategy#pass must be overridden by subclass');
  }
  /* eslint-disable n/handle-callback-err -- Abstract */
  /**
   * @param {Error} err
   * @returns {void}
   */
  error(err) {
    /* eslint-enable n/handle-callback-err -- Abstract */
    throw new Error('EnhancedStrategy#error must be overridden by subclass');
  }
}
/* eslint-enable no-unused-vars, class-methods-use-this -- Abstract */

/**
 * @typedef {Strategy &
 *   Partial<Omit<EnhancedStrategy, keyof Strategy>>
 * } StrategyLike
 */

/**
 * Expose `Strategy`.
 */
export { Strategy, EnhancedStrategy };
