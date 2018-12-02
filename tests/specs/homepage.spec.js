'use strict'
const helper = require('protractor-helper')

describe('Home page', () => {
  beforeEach(() => browser.get('/'))

  it('should show a logo and a create button', () => {
    const logo = element(by.className('title-logo'))
    const createButton = element(by.className('add-video-button'))

    helper.waitForElementVisibility(logo)
    helper.waitForElementVisibility(createButton)
  })

  it('go to create video page when clicking create button', () => {
    const createButton = element(by.className('add-video-button'))

    helper.clickWhenClickable(createButton)

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/videos/create`)
  })

  it('shows two videos in the home page', () => {
    const videoCards = element.all(by.className('video-card'))

    helper.waitForElementVisibility(videoCards.last())

    expect(videoCards.count()).toBe(3)
  })
})
