# CHANGES for @passport-next/passport-strategy

## 2.3.0

- feat: allow `fail` to accept no arguments, number as first argument without second argument, or string|AuthInfo as first argument with optional number status as second
- feat: make second `status` argument optional in `redirect`
- chore: update passport-types (with updated peer dep.)

## 2.2.0

- chore: use `passport-types`

## 2.1.0

- feat(types): add `StrategyLike` type export

## 2.0.0

BREAKING CHANGES:
- Requires Node >= ^22.22.2 || >=24.15.0
- ESM only
- Changes to named import: import { Strategy } from '@passport-next/passport-strategy';

- feat: make native ESM only with exports
- feat: add EnhancedStrategy class (for typings if nothing else)
- chore: Add lint and lintfix scripts
- chore: update devDeps; drop travis
- chore: add eslint-config-ash-nazg and apply (and remove jshint) to JS, Markdown, HTML
- chore: Add .editorconfig
- chore: Add package-lock.json
- chore: Add separate mocha (no-coverage) test script and add coverage to test
- chore: Add recommended fields (contributors, homepage)
- chore: Change deprecated licenses with license
- chore: Update link from http to https
- chore: Simplify test (full relative binary path not needed in npm scripts
- docs: use proper package name on README; clean-up
- refactor: Use ES6 classes
- test: Add c8 for coverage

## 1.1.0 (2018-06-29)

* Added CHANGELOG.md @rwky
* Updated travis to use node 6, 8 and 10 @rwky
* Updated dev deps @rwky
* Updated README.md and package.json for passport-next org
