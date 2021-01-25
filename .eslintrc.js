module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'no-undef': 'off',
    'comma-dangle': ['error', 'always-multiline'],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { baseIndent: 1 }],
      },
    },
  ],
};
