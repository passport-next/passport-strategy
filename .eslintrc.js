module.exports = {
    env: {
      node: true,
      browser: false
    },
    extends: [
      'ash-nazg/sauron-node',
      // Override ash-nazg's current preference for ESM
      'plugin:node/recommended-script'
    ],
    settings: {
      polyfills: [
      ]
    },
    overrides: [
      {
        files: ['test/*'],
        env: {
          mocha: true
        },
        globals: {
          expect: 'readonly'
        },
        rules: {
          'func-names': 0
        }
      },
      {
        files: ['**/*.md'],
        rules: {
          'eol-last': 'off',
          'no-console': 'off',
          'no-undef': 'off',
          'no-unused-vars': 'warn',
          'padded-blocks': 'off',
          'import/unambiguous': 'off',
          'import/no-unresolved': 'off',
          'node/no-missing-import': 'off',
          'node/no-missing-require': 'off',
          'func-names': 'off',
          'import/newline-after-import': 'off',
          'no-unused-vars': ['error', {varsIgnorePattern: 'CustomStrategy'}],
          strict: 'off',
          // Disable until eslint-plugin-jsdoc may fix: https://github.com/gajus/eslint-plugin-jsdoc/issues/211
          indent: 'off'
        }
      }
    ],
    globals: {
      // By some ESLint bug, config overrides not working with globals
      require: 'readonly',
      module: 'readonly',
      exports: 'writable'
    },
    rules: {
      'comma-dangle': 0,
      'no-underscore-dangle': 0,
      'no-param-reassign': 0,

      // Disable current preferences of ash-nazg
      'import/no-commonjs': 0,
      'node/exports-style': 0,

      // Browser only
      'compat/compat': 0,

      // add back different or stricter rules from airbnb
      'object-curly-spacing': ['error', 'always'],
      'func-names': 'warn',
      'max-len': ['error', 100, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      'arrow-parens': ['error', 'as-needed', {
        requireForBlockBody: true,
      }],
      'no-empty-function': ['error', {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ]
      }],
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-multi-assign': ['error'],
      'no-unused-expressions': ['error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      }]
    }
  };
