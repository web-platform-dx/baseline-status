// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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