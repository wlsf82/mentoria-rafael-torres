const helper = require('protractor-helper')

describe('Home page', () => {
  beforeEach(() => browser.get('/'))

  it('should show a logo and a create button', () => {
    const logo = element(by.className('title-logo'))
    const createButton = element(by.className('add-video-button'))

    helper.waitForElementVisibility(logo)
    helper.waitForElementVisibility(createButton)
  })
})
