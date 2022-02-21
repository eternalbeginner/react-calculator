module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./config/**/*.js'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'after-props',
        selfClosing: 'after-props',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@reducer', './src/reducer'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
