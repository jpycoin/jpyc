module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    "jsx-a11y",
  ],
  'rules': {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off"
  },
};
