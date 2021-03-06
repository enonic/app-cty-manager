module.exports = {
  testEnvironment: 'jsdom',
  rootDir: 'src/main/resources/admin/tools/vue/',
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)',
  ],
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html',
      },
    },
  },
};
