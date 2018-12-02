'use strict'
const helper = require('protractor-helper')

describe('Change page', () => {
  beforeEach(() => browser.get('/videos/5c040691e67e122758c69042/edit'))

  it('should change a video', () => {
    
    const fieldtitle = element(by.id('video-title-input'))
    const buttonSave = element(by.className('edit-video-button'))
    
    helper.clearFieldWhenVisibleAndFillItWithText(fieldtitle, 'Change successfully')
    helper.clickWhenClickable(buttonSave)
  })

  it('should show a delete button and a edit button', () => {
    const deleteButton = element(by.css('form button'))
    const editButton = element(by.css('form'))

    helper.waitForElementVisibility(deleteButton)
    helper.waitForElementVisibility(editButton)
  })
})