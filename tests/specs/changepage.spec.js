'use strict'
const helper = require('protractor-helper')

const EditPage = require('../page-objects/editPage')

describe('Change page', () => {
  let editPage

  beforeEach(() => {
    editPage = new EditPage()

    const firstVideoCardLink = element.all(by.css('.video-card a')).first()
    const editVideoButton = element(by.className('edit-video-button'))

    browser.get('/videos/')
    helper.clickWhenClickable(firstVideoCardLink)
    helper.clickWhenClickable(editVideoButton)
  })

  it('should change a video', () => {
    const newVideoTitle = 'Change successfully'

    const videoTitle = element(by.className('video-title'))

    helper.clearFieldWhenVisibleAndFillItWithText(editPage.titleField, newVideoTitle)
    helper.clickWhenClickable(editPage.saveButton)

    helper.waitForTextToBePresentInElement(videoTitle, newVideoTitle)
  })

  it('should show a delete button and a edit button', () => {
    const deleteButton = element(by.css('form button'))
    const editButton = element(by.css('form'))

    helper.waitForElementVisibility(deleteButton)
    helper.waitForElementVisibility(editButton)
  })

  it('goes to home page when clicking in the logo', () => {
    helper.clickWhenClickable(editPage.logo)

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/videos`)

    browser.sleep(2000)
  })
})
