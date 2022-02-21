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
        map: [],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
