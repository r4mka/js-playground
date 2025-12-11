import js from '@eslint/js'; // this provides eslint:recommended
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended, // ← enables eslint:recommended

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      // Prettier errors
      'prettier/prettier': 'error',
    },
  },
];
