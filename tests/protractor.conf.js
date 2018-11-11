module.exports.config = {
  baseUrl: 'http://localhost:4001',
  specs: ['./specs/*.spec.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true
  }
}
