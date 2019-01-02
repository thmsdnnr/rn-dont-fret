module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'avoid-escape': true,
    'allow-template-literals': true,
    indent: 'off',
    'react/prefer-stateless-function': 'off'
  },
  globals: {
    fetch: false
  }
};
