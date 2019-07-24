'use strict'

const defaultConfig = {
  integration: 'express',
  repo: 'https://github.com/expressjs/express',
  pretestCmd: 'npm install',
  testType: 'mocha',
  testArgs: '--require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/'
}

const testConfigs = [
  {
    branch: '4.x'
  },
  {
    branch: '5.x'
  },
  {
    branch: 'master'
  }
]

module.exports = {
  defaultConfig,
  testConfigs
}
