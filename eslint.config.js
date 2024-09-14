import globals from 'globals';
import pluginJs from '@eslint/js';
import mochaPlugin from 'eslint-plugin-mocha';

export default [
  {
      files: [
          'baseline-status.js',
          'baseline-icon.js',
          'icons.js'
      ],
      languageOptions: {
        globals: globals.browser
      },
      rules: {
        ...pluginJs.configs.recommended.rules,
      },
      plugins: {
        'mochaPlugin': mochaPlugin.configs.flat.recommended,
      }
  },
];