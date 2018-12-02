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
  });

  it('shows two videos in the home page', () => {
    const videoCards = element.all(by.className('video-card'))

    helper.waitForElementVisibility(videoCards.last())

    expect(videoCards.count()).toBe(2)
  })

  it('should valid message', () => {
    const buttonRegister = element(by.id('submit-button'))
    const createButton = element(by.className('add-video-button'))
    
    helper.clickWhenClickable(createButton)
    helper.clickWhenClickable(buttonRegister)
    expect(element(by.className('error')).getText()).toEqual('Title is required')
  })

  // it('should save a video', () => {
  //   const fieldtitle = element(by.id('video-title-input'))
  //   const fieldDescription = element(by.id('video-description-input'))
  //   const fieldURL = element(by.id('video-url-input'))
  //   const buttonRegister = element(by.id('submit-button'))
  //   const createButton = element(by.className('add-video-button'))

  //   helper.clickWhenClickable(createButton)
  //   helper.fillFieldWithTextWhenVisible(fieldtitle, 'Title Tests 001')
  //   helper.fillFieldWithTextWhenVisible(fieldDescription, 'Description of videos')
  //   helper.fillFieldWithTextWhenVisible(fieldURL, 'https://www.youtube.com/watch?v=M76qUQTt_Sw')
  //   helper.clickWhenClickable(buttonRegister)
  // })

  // it('should change a video', () => {
  //   const selectEdit = element(by.css('div.video-title'))
  //   const buttonEdit = element(by.id('edit'))
  //   const fieldtitle = element(by.id('video-title-input'))
  //   const buttonSave = element(by.className('edit-video-button'))
    
  //   helper.clickWhenClickable(selectEdit)
  //   helper.clickWhenClickable(buttonEdit)
  //   helper.clearFieldWhenVisibleAndFillItWithText(fieldtitle, 'Change successfully')
  //   helper.clickWhenClickable(buttonSave)
  // })

  // it('should delete a video', () => {
  //   const selectEdit = element(by.css('div.video-title'))
  //   const buttonDelete = element(by.id('delete'))

  //   helper.clickWhenClickable(selectEdit)
  //   helper.clickWhenClickable(buttonDelete)
  // })
})
