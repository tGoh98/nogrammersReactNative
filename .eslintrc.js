module.exports = {
  root: true,
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
};
