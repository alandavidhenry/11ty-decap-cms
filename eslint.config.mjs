import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import unicornPlugin from 'eslint-plugin-unicorn'

export default [
  {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['airbnb-base', eslintConfigPrettier],
    languageOptions: {
      globals: globals.browser
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: [
      unicornPlugin.configs.recommended.plugins,
      pluginJs.configs.recommended.plugins
    ],
    rules: {
      'arrow-body-style': 'error',
      'prefer-arrow-callback': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', mjs: 'never', jsx: 'never' }
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '.eleventy.js',
            '*.config.{cjs,js,mjs}',
            'src/_data/**'
          ],
          optionalDependencies: false
        }
      ],
      'import/order': [
        'error',
        { groups: [['builtin', 'external'], 'parent', 'sibling', 'index'] }
      ],
      'import/prefer-default-export': 'off',
      'linebreak-style': [
        'error',
        process.platform === 'win32' ? 'windows' : 'unix'
      ],
      'unicorn/prefer-node-protocol': 'error',
      'no-unused-vars': 'error',
      'no-console': 'warn'
    }
  }
]
