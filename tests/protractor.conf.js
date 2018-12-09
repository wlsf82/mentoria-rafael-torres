let SpecReporter = require('jasmine-spec-reporter').SpecReporter

module.exports.config = {
  baseUrl: 'http://localhost:4001',
  specs: ['./specs/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=1280,1024']
    }
  },

  onPrepare: () => {
    browser.ignoreSynchronization = true

    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      })
    )
  }
}
