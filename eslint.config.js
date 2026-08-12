import ashNazg from 'eslint-config-ash-nazg';

export default [
  {
    ignores: [
      '.git',
      'coverage/',
      'node_modules/',
      'var/'
    ]
  },
  ...ashNazg(['sauron', 'node']),
  {
    rules: {
      '@stylistic/comma-dangle': 0,
      'no-underscore-dangle': 0,
      'no-param-reassign': 0,

      // Disable current preferences of ash-nazg
      'import/no-commonjs': 0,
      'node/exports-style': 0,

      // Browser only
      'compat/compat': 0,

      // add back different or stricter rules from airbnb
      '@stylistic/object-curly-spacing': ['error', 'always'],
      'func-names': 'warn',
      '@stylistic/max-len': ['error', 100, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      '@stylistic/space-before-function-paren': ['error', {
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
  },
  {
    files: ['test/**/*.js'],
    rules: {
      'func-names': 0
    }
  },
  {
    files: ['**/*.md/*.js'],
    rules: {
      'class-methods-use-this': 'off',
      'eol-last': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'padded-blocks': 'off',
      'import/unambiguous': 'off',
      'import/no-unresolved': 'off',
      'node/no-missing-import': 'off',
      'node/no-missing-require': 'off',
      'func-names': 'off',
      'import/newline-after-import': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: 'CustomStrategy|authMiddleware' }],
      strict: 'off',
      // Disable until eslint-plugin-jsdoc may fix: https://github.com/gajus/eslint-plugin-jsdoc/issues/211
      indent: 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-param-type': 'off'
    }
  }
];
