'use strict'
const helper = require('protractor-helper')

describe('Create page', () => {
  beforeEach(() => browser.get('/videos/create'))

  it('should required fields', () => {
    const buttonRegister = element(by.id('submit-button'))
    const messageFieldTitle = element.all(by.className('error'))
    
    helper.clickWhenClickable(buttonRegister)
    helper.waitForElementVisibility(messageFieldTitle.last())

    expect(messageFieldTitle.count()).toBe(2)
  })

  it('should validate the title field', () => {
    const buttonRegister = element(by.id('submit-button'))
    const fieldDescription = element(by.id('video-description-input'))
    const fieldURL = element(by.id('video-url-input'))
    const messageFieldTitle = element.all(by.className('error'))
    
    helper.fillFieldWithTextWhenVisible(fieldDescription, 'Description a video')
    helper.fillFieldWithTextWhenVisible(fieldURL, 'Link')
    helper.clickWhenClickable(buttonRegister)
    helper.waitForElementVisibility(messageFieldTitle.last())

    expect(messageFieldTitle.count()).toBe(1)
  })

  it('should validate the URL field', () => {
    const buttonRegister = element(by.id('submit-button'))
    const fieldTitle = element(by.id('video-title-input'))
    const fieldURL = element(by.id('video-url-input'))
    const messageFieldTitle = element.all(by.className('error'))
    
    helper.fillFieldWithTextWhenVisible(fieldTitle, 'Title 001')
    helper.clearFieldWhenVisibleAndFillItWithText(fieldURL, '')
    helper.clickWhenClickable(buttonRegister)
    helper.waitForElementVisibility(messageFieldTitle.last())

    expect(messageFieldTitle.count()).toBe(1)
  })

  it('should save a video', () => {
    const fieldtitle = element(by.id('video-title-input'))
    const fieldDescription = element(by.id('video-description-input'))
    const fieldURL = element(by.id('video-url-input'))
    const buttonRegister = element(by.id('submit-button'))
    const createButton = element(by.className('add-video-button'))

    helper.clickWhenClickable(createButton)
    helper.clearFieldWhenVisibleAndFillItWithText(fieldtitle, 'Title Tests 001')
    helper.clearFieldWhenVisibleAndFillItWithText(fieldDescription, 'Description of videos')
    helper.clearFieldWhenVisibleAndFillItWithText(fieldURL, 'https://www.youtube.com/embed/57134cHJlAs?list')
    helper.clickWhenClickable(buttonRegister)
  })

  it('should show a delete button and a edit button', () => {
    const deleteButton = element(by.css('form button'))
    const editButton = element(by.css('form'))

    helper.waitForElementVisibility(deleteButton)
    helper.waitForElementVisibility(editButton)
  })
})
