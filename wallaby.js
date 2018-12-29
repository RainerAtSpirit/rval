process.env.BABEL_ENV = 'test'
module.exports = function (wallaby) {

  return {
    files: [
      'pkgs/**/*.ts?(x)',
      '!pkgs/**/tests/*.ts?(x)',
      { pattern: 'tsconfig.*', instrument: false },
      { pattern: 'jest.config.json', instrument: false },
      { pattern: 'package.json', instrument: false }
    ],

    tests: [
      'pkgs/**/*.spec.ts?(x)',
      'pkgs/**/tests/*.spec.ts?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs'
      })
    },

    testFramework: "jest",
    debug: true,

    setup: function (wallaby) {
      var jestConfig = require('./jest.config.json');
      wallaby.testFramework.configure(jestConfig);
    }
  }
}
